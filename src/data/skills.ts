import type { SkillGroup } from "./types";

/** Taken verbatim from the Technical Skills section of the CV. */
export const skillGroups: readonly SkillGroup[] = [
  {
    name: "Programming",
    items: ["Python", "Java"],
  },
  {
    name: "Web Development",
    items: ["React", "Next.js", "NestJS (Node.js)", "Tailwind CSS", "Nx Monorepo"],
  },
  {
    name: "Databases & Cloud",
    items: ["MongoDB (Mongoose)", "SQL", "AWS S3"],
  },
  {
    name: "Data Science & ML",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Statsmodels",
      "SciPy",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Data Cleaning",
      "EDA",
      "Classification",
      "Regression",
      "Clustering",
      "Model Evaluation",
      "Predictive Analytics",
    ],
  },
  {
    name: "Time Series",
    items: [
      "ARIMA",
      "ARIMAX",
      "Moving Average",
      "Time-Series Analysis",
      "Forecasting",
      "Interpolation",
    ],
  },
  {
    name: "Tools",
    items: ["Git", "GitLab", "Power BI", "Jupyter Notebook"],
  },
  {
    name: "Research",
    items: [
      "Dataset Collection",
      "Literature Review",
      "Experimental Analysis",
      "Research Methodology",
    ],
  },
  {
    name: "Professional",
    items: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Critical Thinking",
      "Management",
    ],
  },
] as const;
