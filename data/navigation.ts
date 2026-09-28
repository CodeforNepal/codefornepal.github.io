/** Ported from _data/navigation.yml. Each item links to a page directory (/<page>/). */
export interface NavItem {
  title: string;
  page: string;
}

export const navigation: NavItem[] = [
  { title: 'About', page: 'about' },
  { title: 'Fellowship', page: 'fellowship2026' },
  { title: 'Projects', page: 'projects' },
  { title: 'Blog', page: 'blog' },
  { title: 'Join Us', page: 'joinus' },
];
