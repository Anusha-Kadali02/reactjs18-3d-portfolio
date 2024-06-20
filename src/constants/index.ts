import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  nodejs,
  mongodb,
  git,
  jpmc,
  shlipkala,
  railwaymgmt,
  angular,
  springboot,
  mysql,
  selenium,
  python,
  tcs,
  chubbgif,
  stackoverflow,
  ashritha,
  venu,
  sneha,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume"
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Spring Boot",
    icon: springboot,
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
    name: "My SQl",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "selenium",
    icon: selenium,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences: TExperience[] = [
  {
    title: "Technology Intern",
    companyName: "Chubb",
    icon: chubbgif,
    iconBg: "#383E56",
    date: "August 2022 - May 2023",
    points: [
      "Collaborated with a dedicated team to design and develop a comprehensive application tailored for the facility and administration department, leveraging Angular for the frontend and NodeJS for the backend.",
      "Utilized Selenium for automated testing to ensure the robustness and reliability of the application.",
      "Efficiency of the facility and admin team is increased by 80 percent.",
      "Worked closely with the facility and admin teams to gather requirements, ensuring the application met their specific needs.",
      "Continuously improved the application based on user feedback, implementing updates and enhancements."
    ],
  },
  {
    title: "Hackathon Runner-Up",
    companyName: "JP Morgan And Chase",
    icon: jpmc,
    iconBg: "#383E56",
    date: "May 2022",
    points: [
      "After rigorous coding rounds and interviews, I was selected to participate in their code for good hackathon.",
      "Achieved finalist status in the hackathon, where my team and I developed a customized web application to fulfill the specific requirements of an NGO. The project was created by using React in the frontend and NodeJS in the backend."
    ],
  },
  {
    title: "Top Performer",
    companyName: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "October 2021",
    points: [
      "Secured a ranking of 917 in the TCS CodeVita, a highly competitive coding contest with participation from over 100,000 individuals.",
      "Subsequently, received a direct interview invitation for their software engineer role based on this achievement."
    ],
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Anusha is a highly skilled full stack developer with exceptional coding abilities. She is a dedicated and hardworking individual, consistently delivering high-quality work. Her expertise and strong work ethic make her a valuable asset to any team.",
    name: "Ashritha",
    designation: "Software Engineer",
    company: "Chubb",
    image: ashritha,
  },
  {
    testimonial:
    "Anusha is one of the most hardworking and dedicated individuals I've ever met. She’s not only knowledgeable but also incredibly attentive and observant. Her exceptional skills and perseverance in achieving her goals make her an invaluable asset to any team.",
    name: "Sneha",
    designation: "Software Engineer",
    company: "Chubb",
    image: sneha,
  },
];

const projects: TProject[] = [
  {
    name: "ShilpKala",
    description:
      "Developed an ecommerce app using React and Node.js, implementing features like package tracking, notifications, authentication, and authorization. Enhanced user experience with real-time tracking and communication. Designed a feature-rich admin dashboard with Chart.js for seamless platform management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: shlipkala,
    sourceCodeLink: "https://github.com/WebTeam-6/INFO6150-FinalProject",
  },
  {
    name: "Rail Ops Hub",
    description:
      "Worked on the Train Management Database System, focusing on enhancing train operations and passenger experience in Boston. Utilized SQL Server for database management, Tableau for data visualization, Angular for frontend UI, and Node.js for SQL Server connectivity.",
    tags: [
      {
        name: "SQL Server",
        color: "blue-text-gradient",
      },
      {
        name: "Tableau",
        color: "green-text-gradient",
      },
      {
        name: "Angular and NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: railwaymgmt,
    sourceCodeLink: "https://github.com/nikitha-kambhampati/Railway-Management-System",
  },
  {
    name: "Stack Overflow Clone",
    description:
      "Developed a question-and-answer platform like Stack Overflow using Angular and Node.js, featuring user-friendly interfaces, authentication, authoriation, real-time updates, and a robust MongoDB database schema for efficient content management.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: stackoverflow,
    sourceCodeLink: "https://github.com/nikitha-kambhampati/Railway-Management-System",
  }
];

export { services, technologies, experiences, testimonials, projects };
