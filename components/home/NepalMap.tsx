'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Map as LeafletMap, GeoJSON as LeafletGeoJSON, Layer, LeafletMouseEvent } from 'leaflet';
import type { Feature } from 'geojson';
import { useReveal } from '@/components/layout/RevealProvider';

interface ProvInfo {
  title: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  desc: string;
  m1: string;
  m2: string;
}

const provData: Record<string, ProvInfo> = {
  'prov-koshi': {
    title: 'Koshi Province',
    tag: 'Active Impact',
    tagColor: '#ffffff',
    tagBg: '#dc2626',
    desc: 'Koshi supports a growing network of open source contributors and data advocates. Local training seminars educate public sector representatives and volunteers on using open data tools for community research.',
    m1: 'Regional Tech Seminars',
    m2: 'Open Source Contributor Hubs',
  },
  'prov-madhesh': {
    title: 'Madhesh Province',
    tag: 'Active Impact',
    tagColor: '#ffffff',
    tagBg: '#dc2626',
    desc: 'A core focus region for digital literacy and inclusion. We run coding bootcamps and localized workshops here for young girls and underrepresented youths, fostering career entries into the tech sector.',
    m1: 'Girls Who Code Bootcamps',
    m2: 'Digital Literacy Workshops',
  },
  'prov-bagmati': {
    title: 'Bagmati Province',
    tag: 'Active Impact',
    tagColor: '#ffffff',
    tagBg: '#dc2626',
    desc: 'Our primary hub for advanced civic technology development and open data advocacy. Bagmati has hosted 4 key hackathons and our central tech fellowships, connecting developers with municipal open data projects.',
    m1: 'Civic Tech Fellowships',
    m2: 'Open Data Portals',
  },
  'prov-gandaki': {
    title: 'Gandaki Province',
    tag: 'Future Expansion',
    tagColor: '#ffffff',
    tagBg: '#475569',
    desc: 'Gandaki is a major source of tech talent in our virtual networks. Local developers collaborate online with our Bagmati teams on municipal dashboard builds and open codebases.',
    m1: 'Collaborative Dashboards',
    m2: 'Online Developer Networks',
  },
  'prov-lumbini': {
    title: 'Lumbini Province',
    tag: 'Future Expansion',
    tagColor: '#ffffff',
    tagBg: '#475569',
    desc: 'Lumbini province hosts virtual user group meetings. We are actively seeking local institutional partners in Lumbini to co-launch digital training modules and data camps.',
    m1: 'Virtual User Groups',
    m2: 'Partnership Exploration',
  },
  'prov-karnali': {
    title: 'Karnali Province',
    tag: 'Future Expansion',
    tagColor: '#ffffff',
    tagBg: '#475569',
    desc: 'A key target area for our upcoming digital literacy outreach campaigns. Remote participants from Karnali join our virtual mentoring tracks to build coding capabilities.',
    m1: 'Virtual Mentorships',
    m2: 'Future Expansion Target',
  },
  'prov-sudurpashchim': {
    title: 'Sudurpashchim Province',
    tag: 'Future Expansion',
    tagColor: '#ffffff',
    tagBg: '#475569',
    desc: 'While we do not have local bootcamps here yet, Sudurpashchim is home to several virtual community members and remote fellowship participants. We plan to establish regional workshops here soon.',
    m1: 'Remote Program Access',
    m2: 'Community Growth Area',
  },
};

const provMapping: Record<string, string> = {
  '1': 'prov-koshi',
  '2': 'prov-madhesh',
  '3': 'prov-bagmati',
  '4': 'prov-gandaki',
  '5': 'prov-lumbini',
  '6': 'prov-karnali',
  '7': 'prov-sudurpashchim',
};

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
  info: ProvInfo | null;
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
          const code = feature ? provinceCode(feature) : '';
          const isImpacted = code === '1' || code === '2' || code === '3';
          return {
            fillColor: isImpacted ? '#dc2626' : '#475569',
            fillOpacity: 1,
            color: '#0f172a',
            weight: 2,
            opacity: 1,
          };
        },
        onEachFeature: (feature: Feature, lyr: Layer) => {
          const code = provinceCode(feature);
          const isImpacted = code === '1' || code === '2' || code === '3';
          const info = provData[provMapping[code]];

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
                fillColor: isImpacted ? '#f87171' : '#94a3b8',
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
                fillColor: isImpacted ? '#dc2626' : '#475569',
                color: '#0f172a',
                weight: 2,
              });
              setTooltip((t) => ({ ...t, visible: false }));
            },
            click: (e: LeafletMouseEvent) => {
              L.DomEvent.stopPropagation(e);
              (e.target as ReturnType<typeof L.geoJSON>).setStyle({
                fillColor: isImpacted ? '#f87171' : '#94a3b8',
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
            Hover or click on the interactive map of Nepal to explore the regions where we are
            training fellows, building open source tools, and supporting digital literacy.
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
                <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '0.15rem', maxWidth: '290px', whiteSpace: 'normal', lineHeight: 1.5 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', gap: '1.5rem' }}>
                    <strong style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, letterSpacing: '-0.01em' }}>{info.title}</strong>
                    <span style={{ fontSize: '0.58rem', textTransform: 'uppercase', fontWeight: 700, color: info.tagColor, background: info.tagBg, padding: '0.2rem 0.6rem', borderRadius: '100px', letterSpacing: '0.05em', display: 'inline-block' }}>{info.tag}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 0.75rem 0', fontFamily: "'Droid Serif', serif" }}>{info.desc}</p>
                  <div style={{ borderTop: '1px solid #475569', paddingTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: "'Montserrat', sans-serif" }}>
                      <span style={{ textTransform: 'uppercase', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em' }}>Key Program:</span>{' '}
                      <span style={{ color: '#ffffff', fontWeight: 500, paddingLeft: '0.25rem' }}>{info.m1}</span>
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: "'Montserrat', sans-serif" }}>
                      <span style={{ textTransform: 'uppercase', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em' }}>Impact Focus:</span>{' '}
                      <span style={{ color: '#ffffff', fontWeight: 500, paddingLeft: '0.25rem' }}>{info.m2}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', background: '#dc2626', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: '0.78rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: '#cbd5e1', letterSpacing: '0.02em' }}>Active Impact (3 Provinces)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', background: '#475569', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: '0.78rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: '#94a3b8', letterSpacing: '0.02em' }}>Future Expansion</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .leaflet-container { background: transparent !important; font-family: 'Montserrat', sans-serif; }
        .leaflet-control-attribution { display: none !important; }
        .leaflet-interactive { outline: none !important; cursor: pointer !important; }
      `}</style>
    </section>
  );
}
