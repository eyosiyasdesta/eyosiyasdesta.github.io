export const portfolioData = {
  personal: {
    name: "Eyosiyas Desta",
    initials: "ED",
    role: "Software Engineering Student & Backend Developer",
    institution: "Adama Science & Technology University (ASTU)",
    location: "Adama, Ethiopia",
    availability: "Open to remote, hybrid & international roles",
    email: "eyosiyasdesta@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    heroHeadline: "I build dependable software from the inside out.",
    heroSubhead:
      "Specialized in backend architectures, Java & Spring Boot, Node.js & Express, high-throughput relational databases, and modern full-stack systems.",
    coreStack: [
      "Java",
      "Spring Boot",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Docker",
    ],
  },
  navigation: [
    { number: "01", label: "Home", href: "#home" },
    { number: "02", label: "About", href: "#about" },
    { number: "03", label: "Projects", href: "#projects" },
    { number: "04", label: "Toolkit", href: "#toolkit" },
    { number: "05", label: "Contact", href: "#contact" },
  ],
  about: {
    headline:
      "Most software is judged by its surface. I am more interested in what holds it up.",
    paragraphs: [
      "I love engineering the unseen backbone that digital products depend on: reliable data structures, resilient APIs, clean business rules, and low-latency services.",
      "Whether modeling transactional schemas in PostgreSQL, building Spring Boot microservices, or architecting rapid REST APIs in Node.js, I focus on clean abstraction, maintainability, and measurable performance.",
    ],
    details: [
      { label: "University", value: "Adama Science & Technology University" },
      {
        label: "Degree & Focus",
        value: "Software Engineering (Backend & Distributed Systems)",
      },
      {
        label: "Location",
        value: "Adama, Ethiopia (UTC+3, open to all timezones)",
      },
      {
        label: "Core Principles",
        value: "Clean Code, ACID Compliance, RESTful Design, Observability",
      },
    ],
  },
  projects: [
    {
      id: "shopwave",
      number: "01",
      title: "Marketto",
      tagline:
        "High-concurrency e-commerce engine with inventory locking & transactional safety.",
      category: "Full-Stack & Backend",
      tags: [
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "React",
        "Docker",
        "REST API",
      ],
      overview:
        "Marketto is an end-to-end e-commerce platform architected to solve race conditions during high-volume sales. It combines robust inventory synchronization with a reactive customer storefront.",
      architecture: [
        "Transactional inventory reservation with optimistic locking to prevent double-selling.",
        "Role-based access control (RBAC) with stateless JWT authentication and refresh tokens.",
        "Normalized relational database schema with indexed foreign keys for sub-25ms checkout execution.",
        "Responsive, modern React front-end with live cart updates and payment simulation.",
      ],
      backendDetails:
        "Spring Boot 3, Spring Data JPA, Hibernate, PostgreSQL, JWT, Liquibase migrations.",
      frontendDetails:
        "React 19, Tailwind CSS, Vite, Zustand state management.",
      github: "https://github.com/eyosiyasdesta/marketto/",
      liveUrl: "https://marketto-three.vercel.app/",
    },
    {
      id: "apple-clone",
      number: "02",
      title: "Apple Page Clone",
      tagline: "Pixel-focused recreation of Apple's product page in React.",
      category: "Frontend & UI",
      tags: ["React", "JavaScript", "CSS", "Responsive Design"],
      overview:
        "A React clone of an Apple product page, built to practice component structure, layout and responsive design.",
      architecture: [
        "Page split into reusable React components (navbar, hero, product sections, footer).",
        "Responsive layout that adapts across mobile, tablet and desktop.",
        "Data-driven sections rendered from arrays instead of copy-pasted markup.",
      ],
      backendDetails: "None (frontend-only project).",
      frontendDetails: "React, JavaScript, CSS.",
      github: "https://github.com/eyosiyasdesta/Apple-page-clone-react",
      liveUrl: "#contact",
    },
    {
      id: "digital-library",
      number: "03",
      title: "Digital Library Management System",
      tagline:
        "Enterprise-grade library governance platform with fine-grained RBAC and audit trails.",
      category: "Enterprise Backend",
      tags: [
        "Spring Boot",
        "JPA / Hibernate",
        "PostgreSQL",
        "Security",
        "REST",
      ],
      overview:
        "A multi-tenant library platform providing automated lending limits, fine calculations, barcode scanning integration, and member lifecycle management.",
      architecture: [
        "Hierarchical permissions matrix separating Students, Faculty, Librarians, and System Administrators.",
        "Automated overdue penalty scheduler executing nightly background batch jobs.",
        "Full-text search queries using PostgreSQL TsVector for instantaneous catalog discovery.",
        "Comprehensive audit logging recording every loan, return, and catalog modification.",
      ],
      backendDetails:
        "Java 21, Spring Boot, Spring Security, Spring Batch, PostgreSQL, Docker.",
      frontendDetails:
        "Thymeleaf admin views and companion RESTful endpoints for mobile clients.",
      github: "https://github.com",
      liveUrl: "#contact",
    },
    {
      id: "reservation-system",
      number: "04",
      title: "Online Reservation System",
      tagline:
        "Real-time reservation system ensuring ACID consistency and deadlock-free slot allocation.",
      category: "Systems & Desktop",
      tags: ["Java", "Java Swing", "JDBC", "PostgreSQL", "Concurrency"],
      overview:
        "A robust desktop reservation application designed to handle high-frequency bookings across multi-theater / conference facilities without conflicting seat reservations.",
      architecture: [
        "Pessimistic row-level locking during seat selection to eliminate double-booking in concurrent sessions.",
        "Direct JDBC implementation with explicit transaction boundaries (commit/rollback) for high throughput.",
        "Custom event-driven UI built on Java Swing with dynamic seat availability heatmaps.",
        "Relational database indexing on slot timestamps and booking statuses.",
      ],
      backendDetails:
        "Pure Java SE, JDBC API, PostgreSQL database server, HikariCP.",
      frontendDetails:
        "Java Swing with FlatLaf dark theme UI, responsive canvas rendering.",
      github: "https://github.com",
      liveUrl: "#contact",
    },
    {
      id: "atm-and-exam-system",
      number: "05",
      title: "ATM Engine & Online Examination Suite",
      tagline:
        "Two mission-critical Java applications demonstrating clean OOP design and fail-safe state machines.",
      category: "Object-Oriented Architecture",
      tags: ["Java", "OOP Design Patterns", "State Pattern", "Security"],
      overview:
        "A dual-project suite demonstrating foundational software engineering: an ATM transactional state machine with cash drawer management, and a timed online test engine with anti-tamper mechanisms.",
      architecture: [
        "State Pattern implementation handling ATM card insertion, PIN verification, cash dispensing, and card ejection.",
        "Command Pattern for undoable exam answers and secure state serialization.",
        "Defensive exception handling ensuring transaction rollback on unexpected power/connection failure.",
        "Comprehensive JUnit test coverage validating boundary conditions and state transition invariants.",
      ],
      backendDetails:
        "Core Java, OOP (SOLID principles), Design Patterns (State, Factory, Singleton), JUnit 5.",
      frontendDetails:
        "Console and lightweight GUI interfaces with clean prompts.",
      github: "https://github.com",
      liveUrl: "#contact",
    },
  ],
  toolkit: [
    {
      category: "Backend & Systems",
      icon: "Server",
      skills: [
        "Java",
        "Spring Boot",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Microservices",
        "JWT / OAuth2",
      ],
    },
    {
      category: "Databases & Storage",
      icon: "Database",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Spring Data JPA",
        "Hibernate",
        "JDBC",
        "Query Optimization",
        "ACID Transactions",
      ],
    },
    {
      category: "Frontend & UI",
      icon: "Layout",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Vite",
        "Responsive Design",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "Cpu",
      skills: [
        "Docker",
        "Git",
        "GitHub",
        "Postman",
        "Linux / Bash",
        "Maven",
        "npm / yarn",
      ],
    },
  ],
};
