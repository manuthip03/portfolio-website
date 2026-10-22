import type { Project } from "./types";

/**
 * Projects, taken from the CV.
 *
 * None of these have a public demo URL or a public repository, so no card
 * renders a "Live Demo" or "Source" link. A dead link on a portfolio costs
 * more credibility than a missing one.
 */
export const projects: readonly Project[] = [
  {
    slug: "proptech-rental-management",
    title: "PropTech Rental Management Platform",
    status: "MVP Completed",
    category: "Full-Stack Web",
    description:
      "A web-based post-booking platform for the UK rental market that digitizes everything that happens after a tenancy is confirmed. Property Owners manage properties, tenants, bookings, guidebooks, service tickets, and payment status from one dashboard, while Tenants log in with only a surname and booking reference to view their stay and raise support requests. Both experiences run on a single codebase, separated by backend-enforced role-based access control.",
    role:
      "Full-Stack Developer — built the Property Management, Tenant Management, Bookings, and Overview Dashboard modules end-to-end, developed the transactional email system, and owned the Renewals module covering the full tenancy-end lifecycle (notice, graduated deposit rules, owner approval, and automated closure).",
    tech: [
      "NestJS (Node.js)",
      "MongoDB (Mongoose)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "AWS S3",
      "Nx Monorepo",
    ],
    client: "EchonLabs (Pvt) Ltd",
    repoNote: "GitLab — company private repository",
    featured: true,
  },
  {
    slug: "rice-yield-forecasting",
    title: "Seasonal Rice Yield Forecasting with Rainfall Integration",
    status: "Individual Project",
    category: "Data Science & Time Series",
    description:
      "A time-series study modelling seasonal rice yield (Yala and Maha) for the Anuradhapura District using 39 years of yield and rainfall data (1986–2024). Built and compared ARIMA, 3-Moving Average, and ARIMAX models season by season, using rainfall as an exogenous regressor to test its effect on forecast accuracy, and projected yields through 2030 to support long-term agricultural planning.",
    role:
      "Independent Researcher — owned the full pipeline: cleaned and prepared 39 years of yield and rainfall data, tested stationarity, built ARIMA, 3-Moving Average, and ARIMAX models for each season, then evaluated and forecasted yields through 2030 using MAPE and RMSE.",
    tech: [
      "Python (Jupyter Notebook)",
      "pandas",
      "NumPy",
      "statsmodels (ARIMA/SARIMAX)",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    featured: true,
  },
  {
    slug: "agrointel",
    title: "AgroIntel — Agriculture Intelligence & Machine Learning",
    status: "Agentic Decision Support System",
    category: "Machine Learning",
    description:
      "A data-driven agriculture solution that uses agricultural datasets, machine learning, predictive analytics, and time-series forecasting to support agronomic decision-making.",
    role:
      "Performed data preprocessing, exploratory data analysis, and feature preparation to identify meaningful patterns; applied predictive analytics and machine learning to derive actionable agricultural insights; and evaluated data-driven approaches on domain-specific agricultural datasets.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "ARIMA",
      "Machine Learning",
      "Time-Series Forecasting",
    ],
    featured: false,
  },
  {
    slug: "freight-customer-satisfaction",
    title: "Customer Satisfaction Analysis & Prediction in Freight Forwarding",
    status: "Data Science Research Project",
    category: "Data Science & Time Series",
    description:
      "Analyzed real freight-forwarding shipment and customer survey data to investigate the operational drivers of customer satisfaction, segment customers by behaviour, and predict dissatisfaction using statistical analysis and machine learning.",
    role:
      "Data preprocessing and validation, exploratory and statistical analysis, customer segmentation, predictive modelling, model evaluation, dashboard development, and interpretation of research findings.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Statsmodels",
      "Scikit-learn",
      "Matplotlib",
      "Streamlit",
    ],
    featured: false,
  },
  {
    slug: "job-stress-performance",
    title: "Impact of Job Stress on Employee Performance",
    status: "Statistical Analysis Project",
    category: "Statistical Analysis",
    description:
      "Analyzed survey data from 175 hotel employees to investigate the relationship between job stress factors and employee performance using statistical analysis and regression modelling.",
    role:
      "Data collection and preprocessing, exploratory and statistical analysis, correlation and regression analysis, data visualization, and interpretation of results and research findings.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "Statsmodels",
      "Matplotlib",
    ],
    featured: false,
  },
  {
    slug: "wireless-field-inspection-car",
    title: "Wireless Field Inspection Car",
    status: "University Hardware Project",
    category: "Embedded & Hardware",
    description:
      "A remote-controlled inspection vehicle built for access to hazardous terrain, developed as a microcontroller-based ICT project at the University of Moratuwa.",
    role:
      "Control Systems & Power Lead — configured the analog joystick controls and joystick-to-servo steering mapping, architected the power distribution system with dual LM2596 buck converters for stable ESP32, LoRa, and servo operation, and handled enclosure fabrication and all wiring and soldering.",
    tech: [
      "ESP32",
      "LoRa (433 MHz)",
      "L298N motor drivers",
      "Analog joysticks",
      "Servo motors",
    ],
    team: "AVMNS Crew (5-member team)",
    featured: false,
  },
] as const;
