export type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  status: "completed" | "in-progress" | "archived";
};

export const projects: Project[] = [
  {
    name: "Jubelio POS",
    description:
      "Point of Sale application featuring real-time socket integration, optimized backend endpoints with 70% latency reduction, and robust observability (logging, metrics, tracing).",
    stack: ["React", "Fastify", "PostgreSQL", "Socket.io", "CI/CD"],
    status: "completed",
  },
  {
    name: "Jubelio Store",
    description:
      "E-commerce storefront system built with server-side frameworks, featuring highly efficient backend services that successfully decreased endpoint latency by 63%.",
    stack: ["Next.js", "Fastify", "Go", "PostgreSQL"],
    status: "completed",
  },
  {
    name: "Jubelio Loyalty",
    description:
      "Loyalty and rewards management module integrated across Jubelio POS and Store ecosystems with high-performance API services.",
    stack: ["Vite", "Go", "PostgreSQL"],
    status: "completed",
  },
  {
    name: "Jubelio Omnichannel",
    description:
      "Centralized omnichannel retail management platform utilizing automated CI/CD pipelines to ensure code quality and seamless deployment.",
    stack: ["React", "Fastify", "PostgreSQL", "CI/CD"],
    status: "completed",
  },
  {
    name: "LRT Sumatera Selatan Gate Application",
    description:
      "Transit e-ticketing and hardware-integrated gate payment system featuring real-time monitoring and automated data routing.",
    stack: [
      "C#",
      ".NET Framework",
      "WinForms",
      "Node.js",
      "PostgreSQL",
      "CI/CD",
    ],
    status: "completed",
  },
  {
    name: "ASDP Indonesia Ferry Gate & POS Application",
    description:
      "Maritime transport ticketing system integrated with physical gate hardware and sales terminals for secure passenger processing.",
    stack: ["C#", ".NET Framework", "WinForms", "WPF", "CI/CD"],
    status: "completed",
  },
  {
    name: "Implementation RFID and Barcode Scanner in Book Lending System in Libraries Integrated with Android",
    description:
      "Academic library management system featuring desktop-to-web synchronization and physical RFID hardware integration.",
    stack: ["Android", "Python", "Tkinter", "RFID"],
    status: "completed",
  },
  {
    name: "Classification Model for Student Response to Lecture Topics Using the BERT Algorithm and Natural Language Processing (NLP)",
    description:
      "NLP-based system that analyzes and matches student answers against lecture syllabus topics using a fine-tuned BERT language model.",
    stack: ["React", "Flask", "Python", "BERT", "LLM"],
    status: "completed",
  },
];
