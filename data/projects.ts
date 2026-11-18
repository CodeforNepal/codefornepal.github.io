/**
 * Projects by Code for Nepal & partners.
 * Source: documents/Projects by Code for Nepal & Partners - October 2020.csv.
 * Old codefornepal.org WordPress links are rewritten to the matching blog post on
 * this site; external links are kept as-is (with an explicit https:// scheme).
 */
export type ProjectStatus = 'Ongoing' | 'Pipeline' | 'Completed';

export interface Project {
  name: string;
  status: ProjectStatus;
  /** Internal path ("/2016/08/iwalkfreely/") or absolute URL. Empty when there is no link yet. */
  link: string;
  about: string;
}

export const projectStatuses: ProjectStatus[] = ['Ongoing', 'Pipeline', 'Completed'];

export const projects: Project[] = [
  // Ongoing
  { name: 'Visit Janakpur', status: 'Ongoing', link: 'https://www.visitjanakpur.com', about: 'Attract tourists to Janakpur and help the people who live there.' },
  { name: 'AskNepal', status: 'Ongoing', link: 'https://github.com/Code4Nepal/asknepal-theme', about: 'Increase access to information.' },
  { name: 'Digital Nepal Conference', status: 'Ongoing', link: 'https://www.digitalnepal.org', about: 'A conference to empower young people digitally.' },
  { name: 'Hack for Nepal Hackathon', status: 'Ongoing', link: 'https://www.hackfornepal.org', about: 'Promote entrepreneurship.' },
  { name: 'NepalMap', status: 'Ongoing', link: 'https://www.nepalmap.org', about: 'Provide easy access to data about Nepal.' },
  { name: 'Mero Book', status: 'Ongoing', link: 'https://www.merobook.org', about: 'Increase access to books for all.' },
  { name: 'Sangraha', status: 'Ongoing', link: 'https://www.sangraha.org', about: 'Archive and promote Nepali literature.' },
  { name: 'Women in Tech Scholarships', status: 'Ongoing', link: '/2017/01/code-for-nepal-launches-scholarship-program-to-empower-women-in-nepal/', about: 'Provide more opportunities to women.' },
  { name: 'Timro Surakshya Hamro Kartyaba', status: 'Ongoing', link: 'https://www.facebook.com/TSHK2019/', about: 'Raise awareness against child sexual abuse.' },
  { name: 'Open Data Nepal', status: 'Ongoing', link: 'https://opendatanepal.com/', about: 'A portal by Open Knowledge Nepal that lets users publish, explore, download and use data to make their own visualisations, apps and services without restriction.' },

  // Pipeline
  { name: 'Nepali Experts', status: 'Pipeline', link: '', about: '' },
  { name: 'Shanti / Chatbot', status: 'Pipeline', link: 'https://github.com/Code4Nepal/nepalmap_app/issues/118', about: 'Create a user-friendly tool for accessing Code for Nepal resources.' },

  // Completed
  { name: 'Breathe Freely', status: 'Completed', link: '/2017/07/breathefreely-nepal/', about: 'Increase awareness about air pollution.' },
  { name: 'Digital Fellow 2014', status: 'Completed', link: '/2014/09/code-for-nepal-empowers-women-15-photos/', about: 'Train women to be digitally savvy.' },
  { name: 'HLON 2018', status: 'Completed', link: '/2018/04/computational-linguistic/', about: 'Support the natural language processing community in Nepal.' },
  { name: 'I Walk Freely', status: 'Completed', link: '/2016/08/iwalkfreely/', about: 'Increase awareness about street harassment.' },
  { name: 'Kata Nepali', status: 'Completed', link: 'https://www.facebook.com/codefornepal/videos/786210718254845/', about: 'Strengthen dialogue on where Nepal is heading.' },
  { name: 'Ko Nepali', status: 'Completed', link: 'https://www.facebook.com/codefornepal/videos/504084203134166/', about: 'Strengthen the culture of civic debate and what it means to be Nepali.' },
  { name: 'Tech Diversity Scholarships', status: 'Completed', link: '/2017/06/tech-scholarship/', about: 'Provide opportunities to diverse young men and women.' },
  { name: 'WomenTechmakers 2015 Birgunj', status: 'Completed', link: 'https://gdgbirgunj.blogspot.com/2015/04/womentechmakers-2015-birgunj-report.html', about: 'Support women in tech.' },
  { name: 'Rahat Payo', status: 'Completed', link: '/2015/10/rahat-payo-how-we-surveyed-767-earthquake-survivors-in-nepal/', about: 'Increase accountability in aid delivery.' },
  { name: '2015 Earthquake Digital Response', status: 'Completed', link: 'https://nyti.ms/1GCaaJk', about: 'A low-tech solution connecting volunteers and relief seekers.' },
  { name: 'Visualizing the 2015 Earthquake Disaster Toll', status: 'Completed', link: '/2015/04/map-of-reported-nepalearthquake-deaths/', about: 'Increase access to data about earthquake damage to help relief providers make evidence-based decisions.' },
  { name: '2017 Relief Support to Flood Survivors', status: 'Completed', link: 'https://www.facebook.com/donate/1922137254726047/', about: 'Provide support to flood survivors.' },
  { name: '#Blankets4Nepal', status: 'Completed', link: 'https://www.facebook.com/donate/149924182459167/', about: 'Provide support to low-income families.' },
  { name: 'Computer Education in Dhanusha (2016)', status: 'Completed', link: '/2016/09/computer-education-in-dhanusha/', about: 'Assess the status of computer literacy.' },
  { name: 'Digital Literacy in Dang', status: 'Completed', link: '/2014/10/what-i-learned-from-teaching-digital-skills-to/', about: 'Increase digital literacy.' },
  { name: 'Digital Literacy in Lalitpur', status: 'Completed', link: '/2014/10/none-of-the-gifts-are-greater-than-gifting/', about: 'Increase digital literacy.' },
  { name: 'Digital Literacy at an NGO in Kathmandu', status: 'Completed', link: '/2014/11/my-initiation-to-teach-computer-skills/', about: 'Increase digital literacy.' },
  { name: 'ICT for Smart Cities Workshop with IBM', status: 'Completed', link: 'https://www.facebook.com/codefornepal/posts/851932191682697', about: 'Support the smart city initiative.' },
  { name: 'Women Representation in Online Media', status: 'Completed', link: '/2015/08/women-are-underrepresented-in-nepali-online-media/', about: 'Assess gender parity in media.' },
];
