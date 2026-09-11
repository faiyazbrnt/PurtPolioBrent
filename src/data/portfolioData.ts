import { PortfolioConfig, Project, ExperienceItem, EducationItem, TechnicalCategory } from '../types';

export const initialPortfolioConfig: PortfolioConfig = {
  developerName: 'Brent Liam Emmanuel L. Go',
  developerRole: 'Fullstack Developer & QA Engineer',
  availability: 'Available for IT Internship & Full-Time Opportunities',
  location: 'Grand Monaco La Potenza, Block 16 Lot 4, Pasig City',
  phone: '0915-475-5930',
  timezone: 'UTC+8 / Manila, Philippines',
  email: 'brentliamemmanuelgo@gmail.com',
  github: 'https://github.com/brentliamemmanuel',
  resumeUrl: '#resume',
  editorialHeadline: 'To Build Your System Efficiently',
  editorialSubhead: 'Fullstack Development, Quality Assurance, and Front-end systems engineering.',
  manifestoStatement: 'Dedicated, exceptionally versatile, and passionate about building and testing high-impact digital experiences.',
  manifestoParagraph: 'Dedicated and hardworking developer with exceptional versatility and adaptability, exposed and capable of interacting with a wide variety of personalities. Experienced in engineering fullstack web applications (React, NextJS, Node.js), automating workflows with Python (FastAPI, Pandas), executing rigorous Quality Assurance testing, and utilizing AI-powered coding and automated testing workflows.',
  objective: 'To secure an IT internship where I can leverage my skills to support company operations while further developing my professional expertise and problem solving abilities.',
  qualifications: [
    'Dedicated and hard working individual',
    'Exceptionally versatile and adaptability',
    'Exposed and can interact with wide variety of personality'
  ],
  personalData: {
    dateOfBirth: 'November 02, 2004',
    citizenship: 'Filipino',
    sex: 'Male',
    civilStatus: 'Single'
  },
  references: 'Available Upon Request'
};

export const portfolioProjects: Project[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'Chronos Time and Payroll System',
    category: 'Enterprise Time Management & Payroll System',
    role: 'Quality Assurance / QA',
    year: '2025',
    client: 'MGen Internal Systems',
    summary: 'A Time management and payroll system that is currently live on Mgens Internal system using MS Teams.',
    fullDescription: 'Comprehensive Quality Assurance and system test engineering for Chronos Time and Payroll System, currently live across MGen internal operations and integrated with Microsoft Teams. Executed extensive functional verification, automated test validation, payroll computation audits, calendar tracking synchronization, and Department of Labor and Employment (DOLE) statutory labor compliance.',
    architectureHighlights: [
      'Time Management: Comprehensive punch-in/out verification, break deduction audits, overtime authorization, and undertime tracking',
      'Payroll Sytem: Automated gross-to-net computation audit, statutory deductions (SSS, PhilHealth, Pag-IBIG), and tax withholding verification',
      'Calendar Tracker: Leave balance tracking, automated holiday roster scheduling, and cross-team shift coordination',
      'DOLE: Full Philippine Department of Labor and Employment statutory compliance, night shift differential, and holiday wage rates'
    ],
    techStack: ['Quality Assurance', 'MS Teams Integration', 'Time Management', 'Payroll Sytem', 'Calendar Tracker', 'DOLE Compliance', 'Test Automation'],
    layoutType: 'generative',
    accentColor: '#FB8B24',
    metrics: [
      { label: 'Status', value: 'Live on MGen' },
      { label: 'Integration', value: 'MS Teams' },
      { label: 'Compliance', value: 'DOLE Certified' }
    ],
    githubUrl: 'https://github.com/brentliamemmanuel/chronos-system',
    liveUrl: '#',
    status: 'Live on MGen (MS Teams)'
  },
  {
    id: 'project-02',
    number: '02',
    title: 'OneOps System',
    category: 'TASS Management System',
    role: 'Fullstack Developer',
    year: '2025',
    client: 'Microgenesis Business Systems (TASS Department)',
    summary: 'TASS Management system, this is for the TASS Department in Microgenesis Business System to use and it consist of RFQ, BRF, RMA Modals.',
    fullDescription: 'OneOps System is an enterprise operational management platform engineered for the Technical Assistance & Support Services (TASS) Department at Microgenesis Business Systems. Built to streamline cross-departmental operations, procurement verification, and service billing, OneOps integrates core operational workflows including Request for Quotation (RFQ) processing, Billing Request Form (BRF) generation and approvals, and Return Merchandise Authorization (RMA) hardware lifecycle handling.',
    architectureHighlights: [
      'RFQ (Request for Quotation): Multi-vendor quote aggregation, itemized bill-of-materials specification, margin calculators, and automated supplier proposal tracking.',
      'BRF (Billing Request Form): Milestone billing authorization, service delivery sign-off audits, client invoice triggering, and accounting reconciliation workflows.',
      'RMA (Return Merchandise Authorization): Defective hardware tracking, serial number warranty verification, vendor replacement workflows, and customer dispatch auditing.',
      'Departmental Modals & Workflows: Fast-loading, validation-enforced contextual modal interfaces engineered for TASS engineers, procurement managers, and operations staff.'
    ],
    techStack: ['Fullstack Development', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'RFQ Engine', 'BRF Workflow', 'RMA Tracker'],
    layoutType: 'editorial',
    accentColor: '#5F0F40',
    metrics: [
      { label: 'Target Dept', value: 'MGen TASS' },
      { label: 'Core Modals', value: 'RFQ • BRF • RMA' },
      { label: 'Operational Impact', value: '100% Digital' }
    ],
    githubUrl: '#',
    liveUrl: '#',
    status: 'Live on TASS (Microgenesis)'
  }
];

export const technicalStackCategories: TechnicalCategory[] = [
  {
    category: 'Web Development',
    code: 'WEB-01',
    description: 'Component architecture, reactive paradigms, and modern fullstack frameworks.',
    skills: [
      { name: 'React', depth: 'Expert', focus: 'Component hierarchies, hooks, state management' },
      { name: 'Node.js', depth: 'Expert', focus: 'Backend runtimes, REST APIs, asynchronous processing' },
      { name: 'NextJS', depth: 'Advanced', focus: 'Server-side rendering, API routes, scalable architecture' },
      { name: 'TypeScript & JavaScript', depth: 'Expert', focus: 'Type safety, clean code patterns, ESNext' },
      { name: 'Tailwind CSS', depth: 'Expert', focus: 'Responsive layouts, token systems, UI styling' }
    ]
  },
  {
    category: 'Python & Automation',
    code: 'PY-02',
    description: 'High-performance API services, data handling, and automated scripting.',
    skills: [
      { name: 'FastAPI', depth: 'Expert', focus: 'High-speed asynchronous REST APIs, Swagger/OpenAPI' },
      { name: 'Pandas', depth: 'Advanced', focus: 'Data processing, manipulation, tabular analytics' },
      { name: 'API Integration', depth: 'Expert', focus: 'Third-party REST integration, webhooks, payload parsing' },
      { name: 'Automation Scripting', depth: 'Expert', focus: 'Batch jobs, automated workflows, data extractors' }
    ]
  },
  {
    category: 'AI-Powered Coding & Tools',
    code: 'AI-03',
    description: 'AI-assisted development, automated testing, and software workflow tooling.',
    skills: [
      { name: 'AI Powered Coding', depth: 'Expert', focus: 'Cursor, Codex, Claude Code' },
      { name: 'AI Debugging & Automated Testing', depth: 'Expert', focus: 'Automated QA testing, regression analysis, bug triage' },
      { name: 'Git & GitHub', depth: 'Advanced', focus: 'Version control, collaborative workflows, CI/CD' },
      { name: 'VS Code', depth: 'Expert', focus: 'Development workflows, extensions, workspace debugging' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Fullstack Developer',
    company: 'Microgenesis Business Systems (TASS Department)',
    period: '2025 — Present',
    location: 'Pasig City, Philippines',
    description: 'Engineered the OneOps TASS Management System for the Technical Assistance & Support Services (TASS) Department, streamlining operations across quotation, billing, and hardware maintenance.',
    achievements: [
      'Engineered core operational modal systems: RFQ (Request for Quotation), BRF (Billing Request Form), and RMA (Return Merchandise Authorization).',
      'Implemented automated multi-vendor quotation aggregation and itemized hardware margin calculators.',
      'Developed RMA tracking workflows for defective hardware diagnosis, serial number verification, and vendor warranty fulfillment.',
      'Constructed responsive, validation-enforced interfaces for TASS engineers, procurement leads, and operations managers.'
    ],
    technologies: ['React', 'NextJS', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Git/GitHub']
  },
  {
    id: 'exp-2',
    role: 'Quality Assurance / QA Engineer',
    company: 'MGen Internal Systems (Chronos Time & Payroll System)',
    period: '2024 — 2025',
    location: 'Philippines (MS Teams Integration)',
    description: 'Performed extensive quality assurance, automated test authoring, and regression verification for the Chronos Time and Payroll System deployed internally across MGen and integrated into Microsoft Teams.',
    achievements: [
      'Executed full test verification on Time Management modules (punch-in/out, automated break deductions, and overtime authorizations).',
      'Audited Payroll System computations for gross-to-net salary calculations, tax withholdings, and statutory Philippine labor deductions (SSS, PhilHealth, Pag-IBIG).',
      'Validated Calendar Tracker functionality for employee leave balances, holiday rosters, and shift schedules.',
      'Maintained 100% compliance with Department of Labor and Employment (DOLE) labor standards and wage rules.'
    ],
    technologies: ['Quality Assurance', 'Automated Testing', 'MS Teams Integration', 'DOLE Compliance', 'Regression Testing']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Tertiary: Institute of Computer Studies in Information Technology',
    institution: 'Rizal Technological University (RTU)',
    period: '2022 — Present',
    location: 'Mandaluyong / Pasig, Philippines',
    details: 'Bachelor of Science in Information Technology (BSIT). Specialized in Software Development, Database Management, and Systems Analysis.'
  },
  {
    id: 'edu-2',
    degree: 'Secondary: IT in Mobile App and Web Development',
    institution: 'STI College Sta. Mesa',
    period: '2020 — 2022',
    location: 'Sta. Mesa, Manila, Philippines',
    details: 'Senior High School TVL Track: Information & Communications Technology focusing on mobile application development and web programming.'
  },
  {
    id: 'edu-3',
    degree: 'Secondary Education',
    institution: 'Good Shepherd Christian School',
    period: '2016 — 2020',
    location: 'Pasig City, Philippines',
    details: 'Junior High School education with foundational studies in mathematics, science, and computer literacy.'
  }
];
