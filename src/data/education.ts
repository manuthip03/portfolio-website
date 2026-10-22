import type { EducationEntry, LeadershipEntry } from "./types";

export const education: readonly EducationEntry[] = [
  {
    institution: "University of Moratuwa, Sri Lanka",
    qualification: "BSc. (Hons) Information Technology and Management",
    status: "Reading",
  },
  {
    institution: "Coventry University, UK",
    qualification: "BSc. (Hons) Data Science",
    status: "Final Year — Final Semester",
  },
  {
    institution: "CIMA — Chartered Institute of Management Accountants",
    qualification: "Chartered Management Accountancy",
    status: "Reading",
  },
  {
    institution:
      "CIPM — Chartered Institute of Personnel Management, Sri Lanka",
    qualification: "DPHRM — Diploma in Professional Human Resource Management",
    status: "Completed",
  },
  {
    institution: "Visakha Vidyalaya, Colombo 05",
    qualification: "GCE Advanced Level & Ordinary Level",
    detail: "Secondary education",
    results: [
      "A/L 2022 — Accounting A, Economics A, ICT A, General English A",
      "O/L 2019 — 9 A passes",
    ],
  },
] as const;

export const leadership: readonly LeadershipEntry[] = [
  {
    role: "Treasurer",
    organisation: "Zero Plastic Club, NIBM",
    year: "2024",
  },
  {
    role: "Finance & Fund-Raising Director",
    organisation: "Zero Plastic Club, NIBM",
    year: "2023",
  },
] as const;
