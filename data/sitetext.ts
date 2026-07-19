/**
 * Ported from _data/sitetext.yml.
 *
 * One deliberate restructure vs the YAML: `services.list` items now carry explicit
 * { name, url, icon, desc, featured } fields instead of a Markdown-link title string
 * that templates parsed with `split:'href="'`. `featured` marks the three items the
 * Projects page shows (NepalMap, Sangraha, Digital Literacy); the home "Our Work"
 * grid still shows all of them.
 */

export interface ServiceItem {
  name: string;
  url?: string;
  icon: string;
  desc: string;
  featured: boolean;
}

export interface TimelineEvent {
  title: string;
  year: string;
  desc: string; // inline markdown
  image?: string;
  alt?: string;
  align: 'left' | 'right';
}

export interface Stat {
  number: string;
  label: string;
}

export interface Pillar {
  title: string;
  desc: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface SocialLink {
  url: string;
  icon: string;
}

export const header = {
  title: 'Empower Nepal with civic technology',
  text: 'Helping to increase digital literacy and use of open data in Nepal',
  button: 'Help Nepal fight COVID-19',
  buttonlink:
    '2021/05/02/donate-to-save-lives-and-help-nepalis-fight-COVID-19-pandemic',
};

export const services = {
  title: 'Our Work',
  text: 'We use technology to create opportunity and drive positive change across Nepal.',
  section: 'work',
  list: [
    {
      name: 'NepalMap',
      url: 'https://github.com/CodeforNepal/nepalmap_federal',
      desc: 'Explore and understand Nepal using open government data — from demographics to development.',
      icon: 'fas fa-map-marker-alt',
      featured: true,
    },
    {
      name: 'Sangraha',
      url: 'https://github.com/CodeforNepal/akshara-project',
      desc: 'Access Nepali poems and literature — preserving cultural heritage through technology.',
      icon: 'fas fa-book-open',
      featured: true,
    },
    {
      name: 'Digital Literacy',
      desc: 'Running workshops and online programs to expand digital skills across Nepal.',
      icon: 'fas fa-laptop-code',
      featured: true,
    },
    {
      name: 'Open Data',
      desc: "Making Nepal's civic and government data accessible, understandable, and actionable.",
      icon: 'fas fa-database',
      featured: false,
    },
    {
      name: 'Fellowships',
      desc: 'Training the next generation of Nepali data scientists and civic technologists.',
      icon: 'fas fa-graduation-cap',
      featured: false,
    },
    {
      name: 'Community',
      desc: 'Connecting 500+ volunteers across Nepal and the Nepali diaspora to collaborate and create.',
      icon: 'fas fa-users',
      featured: false,
    },
  ] as ServiceItem[],
};

export const portfolio = {
  title: 'Stories',
  text: 'This is a placeholder for blogs.',
  section: 'stories',
};

export const timeline = {
  title: 'About',
  text: 'We hope to help create a digitally and data empowered Nepal together where everyone can thrive. Here is our story so far.',
  section: 'about',
  events: [
    {
      title: 'Our humble beginnings',
      year: '2014',
      desc: 'Founders Mia and Ravi organized their first digital literacy workshop for young women in Kathmandu and registered Code for Nepal, as a non-profit in the US.',
      image: '/assets/img/c4n_logo.png',
      alt: '',
      align: 'left',
    },
    {
      title: 'Responding to a historic crisis',
      year: '2015',
      desc: 'When the devastating earthquakes struck Nepal, Code for Nepal community members mobilized a [digital response](http://www.nytimes.com/2015/05/02/world/asia/3-ways-nepalis-are-using-crowdsourcing-to-aid-in-quake-relief.html?_r=0) to help those in need and advocated for [data-driven](https://time.com/3845593/nepal-earthquake-response-data/) relief and recovery',
      image: '/assets/img/data_fellowship_2026.jpg',
      alt: '',
      align: 'right',
    },
    {
      title: 'Creating products and empowering aspiring tech professionals',
      year: '2016-2019',
      desc: 'We launched open data and civic tech products, [organized conferences](https://digitalnepal.org/), and [hackathon](http://hackfornepal.org/), collaborated with partners such as [Purdue University](https://sbaniya.com/2017/03/09/featured-content-2/) and gave scholarships to young women and men.',
      image: '/assets/img/c4n-icon.jpg',
      alt: 'image alt text',
      align: 'left',
    },
  ] as TimelineEvent[],
  end: '[Join us](/joinus/) <br> and shape <br> our story!',
};

export const about = {
  title: 'About Us',
  text: 'our story',
  section: 'about',
};

export const contact = {
  title: 'Contact Us',
  text: 'We would love to hear from you! Of course, you can submit the form below or chat with us on [Slack](https://join.slack.com/t/codefornepal/shared_invite/zt-fm07r7gz-97iagKnDNJ3DbX8QKR6Bxg), [Twitter](https://twitter.com/codefornepal), and [Facebook](https://www.facebook.com/codefornepal).',
  section: 'contact',
};

export const sponsors = {
  title: 'Our Sponsors',
  text: '',
  section: 'sponsors',
  list: [{ url: 'https://datacamp.com/donates', image: '/assets/img/dc-regular.png' }],
};

/** No `clients` block exists in sitetext.yml, so the Partners strip renders nothing (dormant). */
export const clients = {
  title: 'Our Partners',
  section: 'clients',
  maxHeight: '70px',
  list: [] as { url: string; logo: string; title: string }[],
};

export const impact = {
  stats: [
    { number: '500+', label: 'Fellows Trained' },
    { number: '10+', label: 'Years of Impact' },
    { number: '20+', label: 'Open Source Projects' },
    { number: '10k+', label: 'Community Members' },
  ] as Stat[],
};

export const pillars: Pillar[] = [
  {
    title: 'Digital Literacy',
    desc: 'Expanding digital skills through structured workshops and online programs across Nepal.',
    icon: 'fas fa-laptop-code',
  },
  {
    title: 'Open Data',
    desc: "Making Nepal's civic and government data accessible, understandable, and actionable.",
    icon: 'fas fa-database',
  },
  {
    title: 'Fellowships & Training',
    desc: 'Building the next generation of Nepali data scientists and civic technologists.',
    icon: 'fas fa-graduation-cap',
  },
  {
    title: 'Community',
    desc: 'Connecting 500+ volunteers across Nepal and the diaspora to collaborate and create impact.',
    icon: 'fas fa-users',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'The Data Fellowship gave me the technical skills and mentorship I needed to land my first data science role.',
    name: 'Code for Nepal Fellow',
    role: 'Data Science Alumni',
  },
  {
    quote:
      "Code for Nepal's open data tools helped our organization make evidence-based decisions for Nepal's communities.",
    name: 'NGO Partner',
    role: 'Program Director',
  },
];

export const footer = {
  legalTitle: 'Code of Conduct',
  privacy: 'Privacy Policy',
  social: [
    { url: 'https://www.linkedin.com/company/code-for-nepal/', icon: 'fab fa-linkedin-in' },
    { url: 'https://twitter.com/codefornepal', icon: 'fab fa-twitter' },
    { url: 'https://www.facebook.com/codefornepal', icon: 'fab fa-facebook-f' },
    { url: 'https://github.com/code4Nepal', icon: 'fab fa-github' },
    { url: 'http://instagram.com/codefornepal', icon: 'fab fa-instagram' },
  ] as SocialLink[],
  license:
    'This work is licensed under a Creative Commons Attribution - ShareAlike 3.0 License! <br>  Code for Nepal is a registered 501(c)(3) nonprofit organization. <br> EIN: 47-3620037',
};
