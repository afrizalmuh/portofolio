export type AboutData = {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  photo?: string;
  contact: {
    email?: string;
    github?: string;
    linkedin?: string;
  };
};

export const about: AboutData = {
  name: "Afrizal Muhardianto",
  title: "Software Engineer",
  bio: "Software Engineer with 4+ experiences in software development. Proficient in React.js, Next.js, Typescript, Node.js, Golang, PostgreSQL, and MongoDB. Passionate about creating innovative and efficient solutions to build scalable and high-performance applications. Experienced in developing end-to-end web applications, optimizing backend services, and integrating APIs. Adept at working in agile environments, collaborating with cross-functional teams, and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Go",
    "C#",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Oracle Database",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "REST APIs",
    "Microservices",
    "Redis",
    "Apache Kafka",
    "Git",
    "Natural Language Processing (NLP)",
    "Figma",
  ],
  photo: "/profile.jpg",
  contact: {
    email: "afrizalmuhardianto26@gmail.com",
    github: "https://github.com/afrizalmuh",
    linkedin: "https://www.linkedin.com/in/afrizalmuhardianto",
  },
};
