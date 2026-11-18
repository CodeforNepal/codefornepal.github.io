import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Map as LeafletMap, GeoJSON as LeafletGeoJSON, Layer, LeafletMouseEvent } from 'leaflet';
import type { Feature } from 'geojson';
import { useReveal } from '@/components/layout/RevealProvider';
import { fellowshipCohort, provinceImpact, reachBin, reachBins, type ProvinceImpact } from '@/data/regionalImpact';

const byCode = new Map(provinceImpact.map((p) => [p.code, p]));
const maxFellows = Math.max(...provinceImpact.map((p) => p.fellows));
const sans = "'Montserrat', sans-serif";
const serif = "'Droid Serif', serif";

function provinceCode(feature: Feature): string {
  const props = (feature.properties ?? {}) as Record<string, unknown>;
  if (props.ADM1_EN) return String(props.ADM1_EN).trim();
  if (props.ADM1_PCODE) {
    const pcode = String(props.ADM1_PCODE).trim();
    const numMatch = pcode.match(/\d+/);
    if (numMatch) return String(parseInt(numMatch[0], 10));
  }
  return '';
}

interface TooltipState {
  info: ProvinceImpact | null;
  x: number;
  y: number;
  visible: boolean;
}

/** Ported from _includes/sections/home/nepal_map.html. Uses npm leaflet (not the CDN). */
export function NepalMap() {
  const { isScrolled } = useReveal();
  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LeafletGeoJSON | null>(null);
  const recalcRef = useRef(false);
  const [tooltip, setTooltip] = useState<TooltipState>({ info: null, x: 0, y: 0, visible: false });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !mapElRef.current || mapRef.current) return;

      const map = L.map(mapElRef.current, {
        center: [28.2, 84.15],
        zoom: 7,
        dragging: false,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
        attributionControl: false,
      });
      mapRef.current = map;

      const res = await fetch('/assets/data/nepal-states.geojson');
      const data = await res.json();
      if (cancelled) return;

      const layer = L.geoJSON(data, {
        style: (feature) => {
          const info = feature ? byCode.get(provinceCode(feature)) : undefined;
          return {
            fillColor: info ? reachBin(info.fellows).color : '#475569',
            fillOpacity: 1,
            color: '#0f172a',
            weight: 2,
            opacity: 1,
          };
        },
        onEachFeature: (feature: Feature, lyr: Layer) => {
          const info = byCode.get(provinceCode(feature));
          const bin = info ? reachBin(info.fellows) : null;

          const positionFrom = (e: LeafletMouseEvent) => {
            const width = mapElRef.current?.clientWidth ?? 0;
            let x = e.containerPoint.x + 15;
            const y = e.containerPoint.y + 15;
            if (x + 290 > width) x = e.containerPoint.x - 305;
            return { x, y };
          };

          lyr.on({
            mouseover: (e: LeafletMouseEvent) => {
              (e.target as ReturnType<typeof L.geoJSON>).setStyle({
                fillColor: bin ? bin.hover : '#94a3b8',
                color: '#ffffff',
                weight: 3,
              });
              if (info) {
                const { x, y } = positionFrom(e);
                setTooltip({ info, x, y, visible: true });
              }
            },
            mousemove: (e: LeafletMouseEvent) => {
              if (!info) return;
              const { x, y } = positionFrom(e);
              setTooltip((t) => ({ ...t, x, y }));
            },
            mouseout: (e: LeafletMouseEvent) => {
              (e.target as ReturnType<typeof L.geoJSON>).setStyle({
                fillColor: bin ? bin.color : '#475569',
                color: '#0f172a',
                weight: 2,
              });
              setTooltip((t) => ({ ...t, visible: false }));
            },
            click: (e: LeafletMouseEvent) => {
              L.DomEvent.stopPropagation(e);
              (e.target as ReturnType<typeof L.geoJSON>).setStyle({
                fillColor: bin ? bin.hover : '#94a3b8',
                color: '#ffffff',
                weight: 3,
              });
              if (info) {
                const { x, y } = positionFrom(e);
                setTooltip({ info, x, y, visible: true });
              }
            },
          });
        },
      }).addTo(map);
      layerRef.current = layer;

      window.setTimeout(() => {
        map.invalidateSize();
        map.fitBounds(layer.getBounds(), { padding: [20, 20] });
      }, 100);
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  // Re-measure once the hero reveal completes (was tied to body.is-scrolled).
  useEffect(() => {
    if (!isScrolled || recalcRef.current) return;
    recalcRef.current = true;
    window.setTimeout(() => {
      const map = mapRef.current;
      const layer = layerRef.current;
      if (map) {
        map.invalidateSize();
        if (layer) map.fitBounds(layer.getBounds(), { padding: [20, 20] });
      }
    }, 400);
  }, [isScrolled]);

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    display: tooltip.visible ? 'block' : 'none',
    left: tooltip.x,
    top: tooltip.y,
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    padding: '1rem',
    color: 'white',
    fontFamily: "'Montserrat',sans-serif",
    fontSize: '0.8rem',
    pointerEvents: 'none',
    zIndex: 10000,
    width: '290px',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    opacity: 0.98,
    transition: 'opacity 0.15s ease',
  };

  const info = tooltip.info;

  return (
    <section id="nepal-impact-map" style={{ padding: '6rem 0', background: '#0f172a', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Our Regional Impact
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: "'Droid Serif', serif",
              lineHeight: 1.6,
            }}
          >
            Our {fellowshipCohort.year} Data Fellowship welcomed about {fellowshipCohort.fellowsLabel} fellows
            from all {fellowshipCohort.provinces} provinces. Hover or tap a province to see where they come from.
          </p>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ position: 'relative', height: '500px', boxSizing: 'border-box', zIndex: 10 }}>
            <div
              ref={mapElRef}
              id="nepal-leaflet-map"
              style={{ width: '100%', height: '100%', background: 'transparent' }}
            />
            <div id="svg-map-tooltip" style={tooltipStyle}>
              {info && (
                <div style={{ fontFamily: sans, padding: '0.15rem', maxWidth: '290px', whiteSpace: 'normal', lineHeight: 1.5 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', gap: '1rem' }}>
                    <strong style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, letterSpacing: '-0.01em' }}>{info.name}</strong>
                    <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', fontWeight: 700, color: '#ffffff', background: '#dc2626', padding: '0.2rem 0.6rem', borderRadius: '100px', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                      {info.fellowsLabel} fellows
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {[
                      ['Share of cohort', info.share],
                      ['First-generation', info.firstGen],
                      ['Women', info.women],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem' }}>
                        <span style={{ color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>{k}</span>
                        <span style={{ color: '#ffffff', fontWeight: 600 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0.75rem 0 0', paddingTop: '0.6rem', borderTop: '1px solid #475569', fontFamily: serif }}>
                    Fellows from {info.hubs.join(', ')} and beyond.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '1.5rem 2rem', marginTop: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {reachBins.map((b) => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', background: b.color, borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontSize: '0.78rem', fontFamily: sans, fontWeight: 600, color: '#cbd5e1', letterSpacing: '0.02em' }}>{b.label}</span>
              </div>
            ))}
          </div>

          {/* Cohort summary */}
          <div className="impact-summary">
            {[
              [fellowshipCohort.fellowsLabel, 'Fellows in 2026'],
              [`${fellowshipCohort.provinces} / 7`, 'Provinces reached'],
              [fellowshipCohort.womenLabel, 'Women'],
              [fellowshipCohort.firstGenLabel, 'First-generation students'],
            ].map(([v, k]) => (
              <div key={k}>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, fontFamily: sans, color: '#ffffff', letterSpacing: '-0.02em' }}>{v}</div>
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#94a3b8', fontFamily: sans, fontWeight: 600, marginTop: '0.25rem' }}>{k}</div>
              </div>
            ))}
          </div>

          {/* Province breakdown (direct labels; doubles as the map's table view) */}
          <ul className="impact-list" aria-label="Estimated fellows by province">
            {provinceImpact.map((p) => (
              <li key={p.code}>
                <span className="impact-list-name">{p.name.replace(' Province', '')}</span>
                <span className="impact-list-track" aria-hidden>
                  <span style={{ width: `${(p.fellows / maxFellows) * 100}%`, background: reachBin(p.fellows).color }} />
                </span>
                <span className="impact-list-value">{p.fellowsLabel}</span>
              </li>
            ))}
          </ul>
          <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#64748b', fontFamily: sans, margin: '1.25rem 0 0' }}>
            Figures are rounded estimates based on fellows&apos; home provinces.
          </p>
        </div>
      </div>

      <style>{`
        .leaflet-container { background: transparent !important; font-family: 'Montserrat', sans-serif; }
        .leaflet-control-attribution { display: none !important; }
        .leaflet-interactive { outline: none !important; cursor: pointer !important; }
        .impact-summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; text-align: center; margin: 3.5rem auto 0; padding: 2rem 0; border-top: 1px solid #1e293b; border-bottom: 1px solid #1e293b; max-width: 860px; }
        .impact-list { list-style: none; padding: 0; margin: 2.5rem auto 0; max-width: 640px; display: flex; flex-direction: column; gap: 0.7rem; }
        .impact-list li { display: grid; grid-template-columns: 8.5rem 1fr 3rem; align-items: center; gap: 1rem; font-family: ${sans}; font-size: 0.8rem; }
        .impact-list-name { color: #cbd5e1; font-weight: 600; }
        .impact-list-track { height: 8px; background: #1e293b; border-radius: 4px; overflow: hidden; }
        .impact-list-track > span { display: block; height: 100%; border-radius: 0 4px 4px 0; }
        .impact-list-value { color: #ffffff; font-weight: 700; text-align: right; }
        @media (max-width: 640px) {
          .impact-summary { grid-template-columns: repeat(2, 1fr); gap: 1.75rem 1rem; }
          .impact-list li { grid-template-columns: 6.75rem 1fr 2.75rem; gap: 0.75rem; }
        }
      `}</style>
    </section>
  );
}
