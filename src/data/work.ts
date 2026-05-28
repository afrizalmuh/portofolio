export type WorkEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  bullets: string[];
  logo?: string;
};

export const work: WorkEntry[] = [
  {
    company: "Jubelio",
    role: "Mid Fullstack Engineer",
    startDate: "Jan 2024",
    endDate: null,
    location: "Jakarta · Hybrid",
    bullets: [
      "Maintain and develop Jubelio PoS (Point of Sales), Jubelio Store, Jubelio Loyalty, and Jubelio Omnichannel.",
      "Developed RESTful API services in Go with PostgreSQL, reducing report generation time by 60% compared to the legacy system.",
      "Design UI on the web application using Next Js and React Js.",
      "Develop and maintain systems for a variety of clients using NodeJs, Golang, ReactJs, NextJs, PostgreSQL and MongoDB.",
      "Coordinating with other division in system development.",
      "Ensure code quality and maintainability through automated testing, continuous integration, and code reviews.",
      "Conduct knowledge sharing sessions with the team to stay up to date on emerging technologies and best practices in software engineering.",
      "Led and mentored one junior full stack engineer to improve technical and operational capabilities.",
      "Collaborated with stakeholders to gather requirements and iterate on UI/UX based on end-user feedback.",
    ],
  },
  {
    company: "Nutech Integrasi",
    role: "Software Engineer",
    startDate: "Feb 2022",
    endDate: "Dec 2023",
    location: "Jakarta · Onsite",
    bullets: [
      "Programming and develop the DUALi and Kinetic Reader of RFID.",
      "Design UI on the desktop application using Winform and WPF.",
      "Maintained ongoing client relationships with iterative feedback cycles and timely delivery.",
      "Develop the desktop application software using .NET (C#) programming language to integrate with the Gate and PoS (Point of Sale) payment system.",
      "Develop and maintain systems for a variety of clients in the transportation using C#, .NET Framework, NodeJs, ReactJs, Postgres.",
      "Monitoring Gate and PoS payment system.",
      "Coordinating with Other Division in system development.",
      "Ensure code quality and maintainability through automated testing, continuous integration, and code reviews.",
      "Conduct knowledge sharing sessions with the team to stay up to date on emerging technologies and best practices in software engineering.",
    ],
  },
  {
    company: "Hartech Indonesia",
    role: "Service Engineer",
    startDate: "Nov 2021",
    endDate: "Jan 2022",
    location: "Jakarta · Onsite",
    bullets: [
      "Calibration Particle Counter Beckman Coulter.",
      "Calibration Cytotoxic Cabinet.",
      "Troubleshooting.",
      "Maintained ongoing client relationships with iterative feedback cycles and timely delivery.",
    ],
  },
  {
    company: "Respati Solusi Rekatama",
    role: "Electronic Engineer",
    startDate: "Feb 2021",
    endDate: "Marc 2021",
    location: "Tangerang · Onsite",
    bullets: [
      "Develop wheeled robot using Blynk application.",
      "Integrated third-party APIs including payment gateways, map services, and headless CMS platforms.",
      "Stabilization DC Motor using MPU6050 sensor and C programming language.",
      "Conduct knowledge sharing sessions with the team to stay up to date on emerging technologies.",
    ],
  },
];
