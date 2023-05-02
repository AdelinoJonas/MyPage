import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  cypress,
  sass,
  tailwind,
  nodejs,
  sql,
  git,
  figma,
  docker,
  myBeauty,
  cubosAcademy,
  econexo,
  myBeautyPass,
  maisAdv,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Engineer",
    company_name: "MY BEAUTY PASS",
    icon: myBeauty,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Developing web and mobile applications using ReactJS and React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "CUBOS ACADEMY",
    icon: cubosAcademy,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Provi Hackathon",
    description:
      "Web-based platform that allows users to search for suppliers of materials for the civil construction sector produced with recycled and/or reforested products, providing a solution that helps to conserve the planet.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: econexo,
    source_code_link: "https://github.com/AdelinoJonas/api_econexo",
  },
  {
    name: "My Beauty Pass",
    description:
      "Corporate benefit focused on beauty. A platform where registered customers can make appointments and discover the location of partner establishments.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "mapsAPI",
        color: "pink-text-gradient",
      },
    ],
    image: myBeautyPass,
    source_code_link: "https://www.mybeautypass.com/ourTeam",
  },
  {
    name: "Mais ADV",
    description:
      "A platform for registration of offices so that they can register their customers and their respective audiences, in addition to digital signature, generate PDF among other features.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "cypress",
        color: "pink-text-gradient",
      },
    ],
    image: maisAdv,
    source_code_link: "https://github.com/AdelinoJonas",
  },
];

export { services, technologies, experiences, testimonials, projects };
