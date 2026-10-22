/**
 * Identity and contact details.
 *
 * PRIVACY: the home address and phone numbers that appear on the source CV are
 * deliberately NOT in this file and must not be added. Only the details below
 * were approved for publication.
 */

export const profile = {
  name: "P.M.N. Perera",
  role: "Full-Stack Developer & Data Science Undergraduate",
  tagline:
    "I build web applications with React, Next.js and NestJS — and apply machine learning and time-series forecasting to real-world problems.",
  location: "Colombo, Sri Lanka",

  /**
   * Split so the address never appears as a complete string in the page source.
   * It is reassembled in the browser by the contact components.
   */
  emailUser: "manuthiperera7",
  emailDomain: "gmail.com",

  github: "https://github.com/manuthip03",
  githubHandle: "manuthip03",
  linkedin: "https://linkedin.com/in/pmnperera",
  linkedinHandle: "pmnperera",

  about: [
    "I am an Information Technology and Management undergraduate at the University of Moratuwa and a final-year Data Science undergraduate at Coventry University. I am passionate about web development and problem solving, and I am currently seeking a software engineering internship.",
    "I build full-stack web applications with React, Next.js, NestJS and MongoDB, and apply machine learning and time-series forecasting to real-world problems. Experience as a Junior Data Analyst, CIMA studies, and a Diploma in HR from CIPM give me the business understanding to turn real problems into practical software.",
  ],

  stats: [
    { value: "2", label: "Undergraduate degrees in progress" },
    { value: "9", label: "Months as a Junior Data Analyst" },
    { value: "6", label: "Projects across web, ML and hardware" },
    { value: "1", label: "Production client MVP delivered" },
  ],
} as const;
