import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  cisco,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shopease,
  f1dashboard,
  finconnect,
  cona,
  accenture,
  healthcareportal,
  neurobalance,
  blockchainidentity,
  drivezone,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    title: "Software Engineer",
    company_name: "Coke-One North America",
    icon: cona,
    iconBg: "#383E56",
    date: "April 2023 - October 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Cisco",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "January 2021 - December 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "FinConnect",
    description:
      "A financial SaaS platform that connects multiple bank accounts, displays real-time transactions, and enables secure funds transfer between users.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: finconnect, // Replace with the image variable
    source_code_link: "",
  },
  {
    name: "DriveZone",
    description:
      "A responsive car showcase platform with advanced filtering, pagination, and server-side rendering for an optimized user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: drivezone, // Replace with the image variable
    source_code_link: "",
  },
  {
    name: "ShopEase",
    description:
      "A scalable e-commerce platform with product catalog, shopping cart, and secure Stripe payment gateway integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: shopease, // Replace with the image variable
    source_code_link: "",
  },
  {
    name: "F1 Dashboard",
    description:
      "A web-based Formula 1 dashboard providing driver standings, constructor rankings, and race results using dynamic API integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: f1dashboard, // Replace with the image variable
    source_code_link: "",
  },
  {
    name: "Blockchain Digital Identity System",
    description:
      "A decentralized digital identity system leveraging blockchain technology to ensure security, immutability, and transparency.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ipfs",
        color: "pink-text-gradient",
      },
    ],
    image: blockchainidentity, // Replace with the image variable
    source_code_link: "",
  },
  {
    name: "NeuroBalance Fitness App",
    description:
      "A fitness tracking platform designed to help users improve balance and strength through curated workouts and real-time progress tracking.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: neurobalance, // Replace with the image variable
    source_code_link: "",
  },
  {
    name: "Healthcare Management Portal (Upcoming)",
    description:
      "A healthcare management system for patient registration, appointment scheduling, and administrative tools for efficient clinic management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: healthcareportal, // Replace with the image variable
    source_code_link: "",
  },
];


export { services, technologies, experiences, testimonials, projects };
