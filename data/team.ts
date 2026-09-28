/** Ported from _data/team.yml. (The YAML has no role/social fields, so those are omitted.) */
export interface TeamMember {
  name: string;
  image: string;
  linkedinUrl: string;
}

export const team = {
  title: 'CURRENT TEAM',
  text: 'This is the current team of the organization. We are a group of passionate individuals who are dedicated to making a positive impact in our community. We work together to achieve our goals and create a better future for everyone.',
  section: 'team',
  people: [
    {
      name: 'Animesh S. Basnet',
      image: '/assets/img/team/animesh.png',
      linkedinUrl: 'https://www.linkedin.com/in/animeshbasnet/',
    },
    {
      name: 'Ayush Subedi',
      image: '/assets/img/team/aayush.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/ayush-subedi/',
    },
    {
      name: 'Labbi Karmacharya',
      image: '/assets/img/team/labbi.png',
      linkedinUrl: 'https://www.linkedin.com/in/labbi-karmacharya/',
    },
    {
      name: 'Ravi Kumar',
      image: '/assets/img/team/ravi_kumar.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ravinepal/',
    },
    {
      name: 'Sandip Katel',
      image: '/assets/img/team/sandip_katel.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/sandipkatel/',
    },
    {
      name: 'Sanjay Shrestha',
      image: '/assets/img/team/Sanjay_Shrestha.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/sanjay-shrestha-85ba9b22b/',
    },
    {
      name: 'Sauhar Khanal',
      image: '/assets/img/team/Sauhar_Khanal.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/sauhar-khanal-87b058199/',
    },
  ] as TeamMember[],
};
