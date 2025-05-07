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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  binance,
  portofolio,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "project",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "motion",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Web Development Fundamentals Course - Osama Elzero",
    company_name: "",
   
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
     "Completed a comprehensive web development course by Osama Elzero, covering the basics of HTML, CSS, and JavaScript",
     "Gained a strong foundation in building and styling web pages, along with adding interactivity using JavaScript",
     "Developed practical skills in creating responsive and user-friendly web interfaces.",
     " Enhanced understanding of core web technologies, enabling the creation of modern and efficient websites",
    ],
  },
  {
    title: "React.js Fundamentals Course - Net Ninja",
    company_name: "",
   
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
     " Completed an in-depth React.js course by Net Ninja, covering core concepts such as Components, Hooks, React Router, and State Management.",
      " Gained hands-on experience in building dynamic and interactive user interfaces using React.js.",
      " Developed a solid understanding of modern React practices, enabling the creation of scalable and maintainable web applications.",
    ],
  },
  {
    title: "Tailwind CSS Course - Net Ninja",
    company_name: "",
   
    iconBg: "#383E56",
    date: "August 1, 2022 - August 15, 2022",
    points: [
      "Completed a comprehensive course on Tailwind CSS by Net Ninja, focusing on utility-first CSS framework for rapid UI development.",
      " Gained hands-on experience in building responsive and modern user interfaces using Tailwind CSS.",
       "Learned to efficiently style web applications with minimal custom CSS, enhancing productivity and maintainability.",
       "Developed skills in creating visually appealing designs with Tailwind's pre-built components and customization options.",
    ],
  },
  {
    title: "Framer Motion Course - Net Ninja",
    company_name: "",
  
    iconBg: "#383E56",
    date: "August 20, 2022 - August 28, 2022",
    points: [
       "Completed an in-depth course on Framer Motion by Net Ninja, a powerful animation library for React.",
       "Gained practical skills in creating smooth and interactive animations for web applications.",
      "Learned to implement complex animations, transitions, and gesture-based interactions with ease.",
      "Enhanced ability to improve user experience through dynamic and engaging animations.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
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
    name: "Binance",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
    ],
    image: binance,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portofolio",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "Framer motion",
        color: "pink-text-gradient",
      },
      {
        name:"tailwind"
      }
    ],
    image: portofolio,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
