import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  tinywell,
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
    title: "React website",
    icon: web,
  },
  {
    title: "Wordpress",
    icon: mobile,
  },
  {
    title: "Shopify",
    icon: backend,
  },
  {
    title: "Webflow",
    icon: creator,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",

    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I’ve used Mercury Ink for many jobs, from minor logo amends to larger and more complex projects. The standard of work has always been excellent - I’d highly recommend them to anyone needing graphic design or web development.",
    name: "Steve Marshall",
    designation: "Marketing Manager",
    company: "Acme Co",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUL-8R5sjDxUArXVzwqpXMuNclC_envWY3ZMQLtXp80mU-NVFYF=s40-c-rp-mo-br100",
  },
  {
    testimonial:
      "I couldn’t have got better help with setting up my website. My vision was met and any guidance I needed swiftly acted upon. Great quality service. Would highly recommend.",
    name: "Dawn Williams",
    designation: "Blogger",
    company: "Nudawndiary",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVxQzhRD0GtkI3BiUzdts3Airyw4sMzzlbfrFrhyWGY93JLeqM=s40-c-rp-mo-br100",
  },
  {
    testimonial:
      "Great service nothing is to much trouble. Fantastic website Thank you.",
    name: "George Darling",
    designation: "Owner",
    company: "Mens Hair to Stay",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW00LwmV42JPyi60WA8nMZ8FOFqNJpuffXiVjJe5_AkJp_n64LAog=s40-c-rp-mo-br100",
  },
];

const projects = [
  {
    name: "Artery Heating",
    description: "React Three Fiber Landing page for a Gas Engineer",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three fiber",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://arteryheating.co.uk/",
  },
  {
    name: "Ten Your Mind",
    description: "WordPress redesign of a coaching website",
    tags: [
      {
        name: "UX/UI",
        color: "blue-text-gradient",
      },
      {
        name: "WordPress",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://tenyourmind.com/",
    website_link: "https://github.com/",
  },
  {
    name: "Slough Music Services",
    description: "WordPress redesign for the Slough Music Services",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "UX/UI",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sloughmusicservice.mercuryink.co.uk/",
  },
  // {
  //   name: "Tinywell Healthcare",
  //   description: "WordPress redesign for Tinywell Healthcare services",
  //   tags: [
  //     {
  //       name: "WordPress",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "UX/UI",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: tinywell,
  //   source_code_link: "https://tinywellhealthcareservices.org.uk/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
