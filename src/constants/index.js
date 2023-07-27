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
  pine,
  pinheiro,
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
  },
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
    date: "Nov 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Pinheiro Contabilidade",
    icon: pine,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023",
    points: [
      "I developed a custom website for an exceptional accounting firm, Pinheiro Contabilidade",
      "Using modern technologies such as ReactJS and Styled-Components, integrated with an API specialized in providing updated monthly newsletters about the world of accounting.",
    ],
  },
];
const experiencesPt = [
  {
    title: "Engenheiro FullStack",
    company_name: "MY BEAUTY PASS",
    icon: myBeauty,
    iconBg: "#E6DEDD",
    date: "Ago 2022 - Dez 2022",
    points: [
      "Desenvolvimento de aplicações web e mobile utilizando ReactJS e React Native, juntamente com outras tecnologias relacionadas.",
      "Colaboração com equipes multifuncionais, incluindo designers e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementação de design responsivo e garantia de compatibilidade entre diferentes navegadores.",
    ],
  },
  {
    title: "Desenvolvedor React.js",
    company_name: "CUBOS ACADEMY",
    icon: cubosAcademy,
    iconBg: "#383E56",
    date: "Nov 2022 - Mai 2023",
    points: [
      "Desenvolvimento e manutenção de aplicações web utilizando React.js e outras tecnologias relacionadas.",
      "Colaboração com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementação de design responsivo e garantia de compatibilidade entre diferentes navegadores.",
      "Participação em revisões de código e fornecimento de feedback construtivo para outros desenvolvedores.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Pinheiro Contabilidade",
    icon: pine,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Desenvolvi um website personalizado para uma contabilidade excepcional, Pinheiro Contabilidade.",
      "Utilizando tecnologias modernas como ReactJS e Styled-Components, integradas com uma API especializada em fornecer boletins mensais atualizados sobre o mundo da contabilidade.",
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
        name: "ReactJs",
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
        name: "Reactjs",
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
      {
        name: "API_integration",
        color: "orange-text-gradient",
      },
    ],
    image: maisAdv,
    source_code_link: "https://github.com/AdelinoJonas",
  },
  {
    name: "Pinheiro Contabilidade",
    description:
      "Custom website for an accounting firm. One of the notable features of the project is the integration with an API that specializes in providing updated monthly newsletters about the world of accounting. This allows site users to stay informed of the latest industry news, updates and trends.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "API_integration",
        color: "orange-text-gradient",
      },
    ],
    image: pinheiro,
    source_code_link: "https://pinheirocontabilidadecwb.com.br/",
  },
  ,
  {
    name: "Luciana Nutricionista",
    description:
      "Custom website for an accounting firm. One of the notable features of the project is the integration with an API that specializes in providing updated monthly newsletters about the world of accounting. This allows site users to stay informed of the latest industry news, updates and trends.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: pinheiro,
    source_code_link: "https://nutrilucianamachado.com.br/",
  },
];

export {
  services,
  technologies,
  experiences,
  experiencesPt,
  testimonials,
  projects,
};
