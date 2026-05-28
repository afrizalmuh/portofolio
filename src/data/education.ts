export type EducationEntry = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description?: string;
  logo?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Binus University",
    degree: "Bachelor of Computer Science",
    field: "Informatics Engineering",
    startDate: "Sep 2023",
    endDate: "Jul 2025",
    location: "Jakarta, Indonesia",
    description:
      "Extention from associate degree to bachelor degree. Focused on software engineer, system design, machine learning, artificial intelligence, database system, math and analysis. Final thesis on building a Classification Model for Student Response to Lecture Topics Using the BERT Algorithm and Natural Language Processing (NLP).",
  },
  {
    institution: "Politeknik Negeri Jakarta",
    degree: "Associate Degree of Electrical Engineering",
    field: "Electronics Engineering",
    startDate: "Aug 2018",
    endDate: "Jul 2021",
    location: "Depok, Indonesia",
    description:
      "Focused on Electronics Engineering, weak current system, python, database, instrumentation, analytical computation, algorithm and analysis. Final thesis on building a Implementation RFID and Barcode Scanner in Book Lending System in Libraries Integrated with Android.",
  },
];
