/**
 * Ported from _data/team.yml. (The YAML has no role/social fields, so those are omitted.)
 * Members are split into the operational team (runs day-to-day programs) and the
 * advisory group (guides strategy). An empty `image` renders a placeholder avatar.
 */
export interface TeamMember {
  name: string;
  image: string;
  linkedinUrl: string;
}

export interface TeamGroup {
  id: string;
  title: string;
  text: string;
  people: TeamMember[];
}

const operational: TeamGroup = {
  id: 'operational',
  title: 'Operational Team',
  text: 'The volunteers who run our programs, fellowships, and projects day to day.',
  people: [
    {
      name: 'Animesh S. Basnet',
      image: '/assets/img/team/animesh.png',
      linkedinUrl: 'https://www.linkedin.com/in/animeshbasnet/',
    },
    {
      name: 'Labbi Karmacharya',
      image: '/assets/img/team/labbi.png',
      linkedinUrl: 'https://www.linkedin.com/in/labbi-karmacharya/',
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
  ],
};

const advisory: TeamGroup = {
  id: 'advisory',
  title: 'Advisory Group',
  text: 'Experienced members who guide our strategy, partnerships, and long-term direction.',
  people: [
    {
      name: 'Ayush Subedi',
      image: '/assets/img/team/aayush.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/ayush-subedi/',
    },
    {
      name: 'Dibyesh Giri',
      image: '/assets/img/team/dibyesh_giri.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/dibyesh',
    },
    {
      name: 'Ravi Kumar',
      image: '/assets/img/team/ravi_kumar.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ravinepal/',
    },
    {
      name: 'Sweta Baniya',
      image: '/assets/img/team/sweta_baniya.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/sweta-baniya',
    },
  ],
};

export const team = {
  title: 'CURRENT TEAM',
  text: 'This is the current team of the organization. We are a group of passionate individuals who are dedicated to making a positive impact in our community. We work together to achieve our goals and create a better future for everyone.',
  section: 'team',
  groups: [operational, advisory],
};
