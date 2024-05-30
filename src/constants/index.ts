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
  accenture,
  carrent,
  jobit,
  angular,
  springboot,
  mysql,
  selenium,
  python,
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
    title: "Full Stack Developer",
    companyName: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "December 2020 - December 2021",
    points: [
      "Created an optimized logic for the Java Appointment Provider application using algorithms as a Software Engineer, which increased appointment capacity by 100% and cut operational costs by 50%.",
      "ReactJS provided text search, navigation, and display UIs, allowing for quick searching, grouping, and displaying results from three different APIs and Used Spring MVC to build web applications, custom-coded CSS features to have a unique styling frontend for the application, and handled data through Oracle.",
      "Integrated Oracle Database with the Spring Boot application using Spring Data JPA for seamless data access and management while adhering to technical documentation standards.",
      "Implemented RESTful API endpoints using Spring Boot, fostering collaborative communication between client applications and the Java Appointment Provider backend, and facilitating problem-solving and efficient workflow.",
    ],
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I've never encountered a web developer as dedicated to client success as Meghana. Her unwavering commitment inspires our team to prioritize our clients' satisfaction above all else.",
    name: "Karthik",
    designation: "Team Lead",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Meghana's expertise in Pandas, NumPy, and Scikit-learn was instrumental in our project's success. Her commitment to data preprocessing, model training, and real-time predictions with Flask showcased her exceptional abilities.",
    name: "Bindu",
    designation: "Team Mate",
    company: "University Of Texas At Arlington",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Meghana has been one of the most amazing math teachers I've ever had. Her patience, clear explanations, and dedication made learning math not just bearable but enjoyable. Her commitment to teaching is truly inspiring.",
    name: "Anusha",
    designation: "Student",
    company: "Sahaya Foundation",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Inventory management of a construction-based hardware store",
    description:
      "Developed a web-based platform for a hardware store that allows users to manage inventory efficiently. Is integrated with a SQL database, providing a robust solution for tracking stock levels, orders, and deliveries.",
    tags: [
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Personal Loan Predictor",
    description:
      "Created a personal loan prediction model in Python using Pandas, NumPy, Scikit-learn, and XGBoost. Preprocessed CSV data, trained various models with up to 98.1% accuracy. Built RESTful APIs with Flask for real-time predictions, serialized the model with Pickle, and visualized data using Matplotlib and Seaborn.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
