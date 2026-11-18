/**
 * Regional reach of the 2026 Data Fellowship, by fellows' home province.
 *
 * Figures are deliberately rounded ESTIMATES derived from the accepted-fellows
 * list (~800 fellows); the source file contains personal data and is not part
 * of the site. Shares are approximate and phrased for display, not analysis.
 */

export interface ProvinceImpact {
  /** ADM1 code used by public/assets/data/nepal-states.geojson ("1".."7"). */
  code: string;
  name: string;
  /** Rounded fellow count, used to shade the map. */
  fellows: number;
  /** Display label for the estimate, e.g. "150+". */
  fellowsLabel: string;
  /** Approximate share of the cohort, e.g. "~20%". */
  share: string;
  /** Approximate share who are first in their family to pursue a degree. */
  firstGen: string;
  /** Approximate share of women. */
  women: string;
  /** Cities fellows came from (largest first). */
  hubs: string[];
}

export const fellowshipCohort = {
  year: 2026,
  fellowsLabel: '800',
  provinces: 7,
  womenLabel: '~55%',
  firstGenLabel: '~57%',
  outsideBagmatiLabel: '~4 in 5',
};

export const provinceImpact: ProvinceImpact[] = [
  {
    code: '3',
    name: 'Bagmati Province',
    fellows: 150,
    fellowsLabel: '150+',
    share: '~20%',
    firstGen: '~1 in 2',
    women: 'All',
    hubs: ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Chitwan'],
  },
  {
    code: '1',
    name: 'Koshi Province',
    fellows: 140,
    fellowsLabel: '140+',
    share: '~18%',
    firstGen: '~6 in 10',
    women: '~4 in 10',
    hubs: ['Biratnagar', 'Itahari', 'Jhapa'],
  },
  {
    code: '5',
    name: 'Lumbini Province',
    fellows: 120,
    fellowsLabel: '120+',
    share: '~16%',
    firstGen: '~6 in 10',
    women: '~1 in 2',
    hubs: ['Butwal', 'Bhairahawa', 'Dang', 'Nepalgunj'],
  },
  {
    code: '4',
    name: 'Gandaki Province',
    fellows: 120,
    fellowsLabel: '120+',
    share: '~15%',
    firstGen: '~6 in 10',
    women: '~2 in 3',
    hubs: ['Pokhara', 'Gorkha'],
  },
  {
    code: '2',
    name: 'Madhesh Province',
    fellows: 110,
    fellowsLabel: '110+',
    share: '~14%',
    firstGen: '~6 in 10',
    women: '~1 in 3',
    hubs: ['Janakpur', 'Birgunj'],
  },
  {
    code: '7',
    name: 'Sudurpashchim Province',
    fellows: 70,
    fellowsLabel: '70+',
    share: '~9%',
    firstGen: '~6 in 10',
    women: '~1 in 3',
    hubs: ['Mahendranagar', 'Dhangadhi', 'Achham', 'Darchula'],
  },
  {
    code: '6',
    name: 'Karnali Province',
    fellows: 50,
    fellowsLabel: '50+',
    share: '~7%',
    firstGen: '~2 in 3',
    women: '~1 in 4',
    hubs: ['Surkhet', 'Salyan'],
  },
];

/**
 * Sequential single-hue ramp (red), darker → brighter as reach grows; the map sits
 * on a dark (#0f172a) surface. Low-contrast steps are backed by the direct-labeled
 * province list under the map.
 */
export const reachBins = [
  { min: 0, label: 'Under 100 fellows', color: '#991b1b', hover: '#b91c1c' },
  { min: 100, label: '100 to 140 fellows', color: '#dc2626', hover: '#ef4444' },
  { min: 140, label: '140+ fellows', color: '#f87171', hover: '#fca5a5' },
];

export function reachBin(fellows: number) {
  return [...reachBins].reverse().find((b) => fellows >= b.min) ?? reachBins[0];
}
