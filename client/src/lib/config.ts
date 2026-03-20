import { LucideIcon, Code2, Database, Cloud, Layout, Server, Terminal, LineChart, Globe, Cpu, Shield } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  metrics?: { label: string; value: string }[];
  techStack: string[];
  features: string[];
}

export const CONFIG = {
  personal: {
    name: "Manmehakpreet Singh",
    title: "Full-Stack Software Developer",
    location: "Brampton, ON",
    bio: "Full-stack software developer with 2.5+ years of experience building enterprise-grade applications across Angular, .NET Core, SQL Server, and Microsoft Azure. Proven track record in designing secure API integrations, hardening data pipelines, and automating business-critical financial workflows.",
    socials: {
      github: "https://github.com/manmehakpreet",
      linkedin: "https://linkedin.com/in/manmehakpreetsingh",
    }
  },
  skills: {
    languages: ["C#", "TypeScript", "JavaScript", "SQL / T-SQL", "Java", "C", "C++", "PL/SQL", "PowerShell"],
    frontend: ["Angular", "React", "HTML5", "CSS3", "AG-Grid", "ng-bootstrap"],
    backend: ["ASP.NET Core", ".NET Core", "REST API Development", "Entity Framework Core", "Azure Functions"],
    database: ["SQL Server", "MySQL", "SQLite", "MongoDB", "Stored Procedures", "Query Optimization", "Schema Design"],
    cloud: ["Microsoft Azure", "Azure Functions", "Azurite", "CI/CD Pipelines", "Git / GitHub"],
    tools: ["Postman", "GemBox", "Figma", "Active Directory", "OAuth", "FreshBooks API", "QuickBooks Online", "FactSet API"],
  },
  experience: [
    {
      role: "Software Developer",
      company: "TMH Solutions",
      period: "April 2023 - Present",
      description: "Developing and maintaining full-stack enterprise applications using Angular and ASP.NET Core, delivering features across invoicing, project management, and financial reporting systems.",
      achievements: [
        "Developed full-stack enterprise applications using Angular (TypeScript) and ASP.NET Core (C#), delivering features across invoicing, project management, and financial reporting systems serving multiple business units.",
        "Designed and implemented secure RESTful APIs with authentication, authorization, and input validation patterns, protecting sensitive financial and client data across 3 third-party integrations (FreshBooks, QuickBooks Online, FactSet).",
        "Built and optimized T-SQL stored procedures for financial data pipelines, incorporating parameterized queries and province-based conditional logic to prevent SQL injection and enforce data integrity.",
        "Automated Excel-based board reporting by replacing manual report assembly with template-driven code pipelines using GemBox, reducing report preparation time from hours to minutes.",
        "Refactored batch processing logic to consolidate entity operations before a single SaveChangesAsync call, reducing database write operations by approximately 30% per batch cycle.",
        "Architected a 3-layer PDF generation pipeline separating document creation, backend transport, and frontend delivery, improving maintainability and enabling independent scaling.",
        "Managed Azure cloud resources, CI/CD pipelines, and deployment workflows, supporting reliable and maintainable release cycles."
      ]
    },
    {
      role: "Contract Software Developer",
      company: "Mivance",
      period: "December 2023 - Present",
      description: "Delivering full-stack features in .NET Core and Angular under contract engagements, taking ownership of end-to-end implementation from API design through frontend integration.",
      achievements: [
        "Delivered full-stack features in .NET Core and Angular, taking ownership of end-to-end implementation from API design through frontend integration while adhering to client-defined coding standards and release processes.",
        "Enforced secure data access using Entity Framework Core with parameterized queries, role-scoped data filtering, and least-privilege patterns to prevent unauthorized data exposure across multi-tenant environments.",
        "Contributed to API integration projects implementing OAuth-based credential flows, structured exception logging, and fault-tolerant retry logic to ensure consistent data exchange with external business systems."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Seneca Polytechnic",
      period: "January 2025 - Present",
      status: "In Progress",
      coursework: [
        "Discrete Mathematics",
        "Computer Architecture & Hardware",
        "User Interface Design",
        "Calculus, Data Structures, OOP, Database Systems"
      ]
    },
    {
      degree: "Computer Programming",
      institution: "Seneca Polytechnic",
      period: "Graduated April 2022",
      status: "High Honours",
      coursework: []
    }
  ],
  projects: [
    {
      id: "contractor-invoicing",
      title: "Contractor Invoicing & Billing Automation",
      shortDescription: "End-to-end invoicing platform handling time-entry approval, billing status transitions, batch processing, and retainer-based invoice logic.",
      fullDescription: "A full-stack enterprise platform that replaced manual invoice preparation with automated workflows. Handles contractor time-entry approval, billing status transitions, batch processing, and retainer-based invoice logic across frontend and backend layers, improving consistency across finance operations.",
      tags: ["Angular", "ASP.NET Core", "C#", "SQL Server", "Azure"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
      techStack: ["Angular", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "Azure"],
      features: [
        "Time-entry approval workflows",
        "Billing status transitions & batch processing",
        "Retainer-based invoice logic",
        "SQL-backed reporting for billing teams"
      ],
      metrics: [
        { label: "Manual Steps Eliminated", value: "100%" },
        { label: "Processing Errors", value: "Reduced" },
        { label: "Finance Operations", value: "Streamlined" }
      ]
    },
    {
      id: "board-reporting",
      title: "Board Reporting Automation Engine",
      shortDescription: "Automated template-driven reporting pipeline replacing manual Excel-based board report assembly.",
      fullDescription: "Replaced manual Excel-based board reporting with automated, template-driven code pipelines using GemBox. Built reusable reporting logic that populated financial and operational datasets into structured, export-ready leadership outputs with repeatable and auditable execution.",
      tags: ["C#", "SQL Server", "GemBox", "Excel Automation", "Azure"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      techStack: ["C#", ".NET Core", "SQL Server", "GemBox", "Azure"],
      features: [
        "Template-driven Excel generation",
        "Financial & operational dataset population",
        "Repeatable & auditable execution",
        "Export-ready leadership outputs"
      ],
      metrics: [
        { label: "Report Prep Time", value: "Hours to Minutes" },
        { label: "Copy-Paste Errors", value: "Eliminated" },
        { label: "Execution", value: "Auditable" }
      ]
    },
    {
      id: "freshbooks-sync",
      title: "FreshBooks Data Sync & Invoice Integration",
      shortDescription: "Automated data synchronization pipeline integrating FreshBooks with billing and invoicing processes.",
      fullDescription: "Built FreshBooks-integrated workflows for syncing clients, projects, and time-entry data into billing and invoicing processes, converting a previously manual multi-step process into a single automated pipeline. Implemented billing-period-aware automation for invoice generation using structured templates.",
      tags: ["C#", ".NET", "FreshBooks API", "Azure Functions"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      techStack: ["C#", ".NET Core", "FreshBooks API", "Azure Functions", "Excel Templates"],
      features: [
        "Client, project & time-entry sync",
        "Billing-period-aware automation",
        "Structured template-based invoicing",
        "Month-end alignment logic"
      ],
      metrics: [
        { label: "Manual Steps", value: "Fully Automated" },
        { label: "Data Sources", value: "3 Integrated" },
        { label: "Billing Alignment", value: "Month-End" }
      ]
    },
    {
      id: "test-env-replication",
      title: "Test Environment Replication Utility",
      shortDescription: "Secure API-based utility for cloning critical FreshBooks data between environments for integration testing.",
      fullDescription: "Designed a secure API-based utility for cloning critical FreshBooks data (projects, clients, time-tracking) between environments, enabling reliable integration testing without production exposure. Structured around OAuth credential management and entity-level replication.",
      tags: ["C#", ".NET", "OAuth", "FreshBooks API", "Azure Functions"],
      image: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=2070&auto=format&fit=crop",
      techStack: ["C#", ".NET Core", "OAuth", "FreshBooks API", "Azure Functions"],
      features: [
        "Secure OAuth credential management",
        "Entity-level data replication",
        "Production-safe testing workflows",
        "Cross-environment data cloning"
      ],
      metrics: [
        { label: "Production Exposure", value: "Zero" },
        { label: "Test Reliability", value: "Improved" },
        { label: "Auth Flow", value: "OAuth Secured" }
      ]
    },
    {
      id: "pdf-generation",
      title: "Distributed PDF Generation & Delivery",
      shortDescription: "Multi-service PDF workflow spanning document generation, backend transport, and frontend delivery.",
      fullDescription: "Built a multi-service PDF workflow spanning 3 layers — document generation, backend transport, and frontend delivery — supporting reliable creation and export of business documents inside enterprise application flows. Improved separation of concerns making the pipeline easier to maintain, extend, and audit.",
      tags: [".NET", "C#", "Angular", "Backend Services"],
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2070&auto=format&fit=crop",
      techStack: [".NET Core", "C#", "Angular", "TypeScript", "Azure"],
      features: [
        "3-layer architecture (generation, transport, delivery)",
        "Independent scaling per stage",
        "Enterprise document export",
        "Maintainable & auditable pipeline"
      ],
      metrics: [
        { label: "Architecture Layers", value: "3" },
        { label: "Maintainability", value: "Improved" },
        { label: "Scaling", value: "Independent" }
      ]
    }
  ] as Project[],
  services: [
    { title: "Full-Stack Development", icon: Code2, desc: "End-to-end application development with Angular frontends and .NET Core backends." },
    { title: "API Design & Integration", icon: Server, desc: "Secure RESTful APIs with authentication, authorization, and third-party integrations." },
    { title: "Database Engineering", icon: Database, desc: "SQL Server stored procedures, query optimization, and schema design for data pipelines." },
    { title: "Cloud & DevOps", icon: Cloud, desc: "Azure cloud resources, CI/CD pipelines, and deployment workflow management." },
    { title: "Workflow Automation", icon: Terminal, desc: "Automating manual business processes like invoicing, reporting, and data synchronization." },
    { title: "Secure Application Design", icon: Shield, desc: "Input validation, parameterized queries, role-based access control, and OAuth integrations." },
  ]
};
