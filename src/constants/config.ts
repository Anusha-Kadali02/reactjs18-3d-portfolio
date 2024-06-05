type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    resume: TSection;
    skills: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Anusha",
    fullName: "Anusha Kadali",
    email: "kadali.a@northeastern.edu",
  },
  hero: {
    name: "Anusha Kadali",
    p: ["Passionate about web development,", "excelling in databases and data visualization with strong data management skills."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a graduate student at the Northeastern University specializing in Computer Software Engineering. I am skilled in C++, Python, MySQL, Tableau, MongoDB, and frameworks like React, Node.js, and Angular.js. With one year of experience as a Teachnology Intern at Chubb, I am a quick learner who collaborates closely with clients to create efficient, scalable, and user-friendly solutions. Let's work together to bring your ideas to life and drive organizational success through innovative software development.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience And Achievements",
    },
    skills: {
      p: "What I bring to the table",
      h2: "Skills.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    resume:{
      p: "Ready to dive deeper?",
      h2: "Download My Resume."
    }
  },
};
