// Eyosiyas Desta - Portfolio
// Editorial Aesthetic + Slow-Motion Motion Engine + Interactive Project Modal

(function () {
  const { useState, useEffect, createElement: h, Fragment } = window.React;

  // Project Specifications
  const projects = [
    {
      id: "marketto",
      number: "01",
      title: "Marketto",
      badge: "Featured Backend Architecture",
      kind: "E-Commerce Backend & Web Platform",
      summary: "A robust, high-concurrency e-commerce backend platform built with Java and Spring Boot, designed for strict transactional consistency and performant database operations.",
      problem: "E-commerce backends must guarantee transactional integrity during concurrent inventory checkouts, prevent race conditions, and enforce hardened token-based authentication without creating query bottlenecks.",
      solution: "Implemented a modular layered architecture (Controller, Service, Repository) with Spring Security and stateless JWT. Designed transactional order workflows, basket persistence, role-based access control (Admin / Customer), and indexed PostgreSQL schemas.",
      architecture: [
        "Spring Security 6 with stateless JWT authentication & refresh token rotation",
        "Role-Based Access Control (RBAC) securing private catalog & transaction routes",
        "Pessimistic & optimistic locking patterns on inventory stock during checkout",
        "PostgreSQL database mapped via Spring Data JPA with composite indexing",
        "Comprehensive REST API contracts verified using Postman & Swagger documentation"
      ],
      stack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "Hibernate / JPA", "RESTful API", "Docker", "Maven"],
      repoUrl: "https://github.com/eyosiyasdesta",
      liveUrl: null
    },
    {
      id: "shelfwise",
      number: "02",
      title: "Shelfwise",
      badge: "Core System Case Study",
      kind: "Digital Library Management System",
      summary: "A centralized digital library system for cataloging university resources, automating student circulation, and monitoring inventory turnover in real-time.",
      problem: "Paper checkout logs and fragmented tracking create inventory discrepancies, uncollected overdue materials, and inefficient book lookup across library departments.",
      solution: "Engineered a unified relational database with automated borrowing rule engines, dynamic overdue fine calculations, and instant multi-criteria catalog search.",
      architecture: [
        "Relational database modeling for titles, physical copy barcodes, and student loans",
        "Borrowing policy enforcement (loan quotas, reservation holds, account suspension)",
        "Search indexing by ISBN, author, classification, and availability state",
        "RESTful endpoints supporting both staff management portals and student search"
      ],
      stack: ["Java", "Spring Boot", "MySQL", "Hibernate", "REST API", "Tailwind CSS", "Git"],
      repoUrl: "https://github.com/eyosiyasdesta",
      liveUrl: null
    }
  ];

  const toolkit = [
    {
      title: "Backend Development",
      items: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "REST APIs", "JWT Auth"]
    },
    {
      title: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "Database Modeling", "SQL Query Optimization", "Hibernate / JPA"]
    },
    {
      title: "Frontend Engineering",
      items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & Modern CSS", "Responsive UI"]
    },
    {
      title: "Tools & DevOps",
      items: ["Git & GitHub", "Docker", "Postman", "Maven", "VS Code & IntelliJ", "Linux CLI"]
    }
  ];

  const navLinks = [
    { id: "home", num: "01", label: "HOME" },
    { id: "about", num: "02", label: "ABOUT" },
    { id: "projects", num: "03", label: "PROJECTS" },
    { id: "expertise", num: "04", label: "TOOLKIT" },
    { id: "contact", num: "05", label: "CONTACT" }
  ];

  function App() {
    const [activeSection, setActiveSection] = useState("home");
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentTime, setCurrentTime] = useState("");
    const [imgError, setImgError] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Addis Ababa Local Clock
    useEffect(() => {
      const updateClock = () => {
        try {
          const now = new Date();
          const str = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Africa/Addis_Ababa",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23"
          }).format(now);
          setCurrentTime(str);
        } catch (e) {
          setCurrentTime("14:00");
        }
      };
      updateClock();
      const timer = setInterval(updateClock, 30000);
      return () => clearInterval(timer);
    }, []);

    // Cinematic Slow-Motion Intersection Observer
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );

      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, [selectedProject]);

    // Active Section Spy
    useEffect(() => {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );

      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) sectionObserver.observe(el);
      });

      return () => sectionObserver.disconnect();
    }, []);

    // Escape Key Listener to Close Modal
    useEffect(() => {
      const onKeyDown = (e) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const copyEmail = () => {
      navigator.clipboard.writeText("contact@eyosiyasdesta.me");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    };

    return h(
      "div",
      { className: "min-h-screen bg-[#090909] text-[#f0f0eb] font-body selection:bg-[#c6f36a] selection:text-[#090909]" },

      // Navigation Bar (Original High-End Editorial Style)
      h(
        "header",
        { className: "fixed inset-x-0 top-0 z-50 border-b border-[#f0f0eb]/10 bg-[#090909]/90 backdrop-blur-md transition-colors duration-500" },
        h(
          "div",
          { className: "mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10" },
          
          // Brand Logo
          h(
            "a",
            { href: "#home", className: "font-display text-2xl font-bold leading-none tracking-[-0.04em] flex items-center group" },
            "ED",
            h("span", { className: "text-[#c6f36a] transition-transform duration-300 group-hover:translate-x-0.5" }, "/")
          ),

          // Desktop Links (Clean Numbers + Label + Lime Dot Indicator)
          h(
            "nav",
            { className: "hidden md:block", "aria-label": "Primary Navigation" },
            h(
              "ul",
              { className: "flex items-center gap-8 lg:gap-10" },
              navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return h(
                  "li",
                  { key: link.id },
                  h(
                    "a",
                    {
                      href: `#${link.id}`,
                      className: `group flex items-center gap-2.5 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                        isActive ? "text-[#f0f0eb]" : "text-[#8c8c86] hover:text-[#f0f0eb]"
                      }`
                    },
                    h("span", { className: "text-[10px] text-[#8c8c86]" }, link.num),
                    link.label,
                    h("span", {
                      className: `h-1.5 w-1.5 bg-[#c6f36a] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`
                    })
                  )
                );
              })
            )
          ),

          // GitHub Profile Button + Mobile Toggle
          h(
            "div",
            { className: "flex items-center gap-4" },
            h(
              "a",
              {
                href: "https://github.com/eyosiyasdesta",
                target: "_blank",
                rel: "noreferrer",
                className: "hidden sm:inline-flex items-center border border-[#f0f0eb]/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#f0f0eb] transition-colors duration-300 hover:border-[#c6f36a] hover:text-[#c6f36a]"
              },
              "GitHub ↗"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                className: "border border-[#f0f0eb]/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] md:hidden hover:border-[#c6f36a] hover:text-[#c6f36a]"
              },
              mobileMenuOpen ? "CLOSE" : "MENU"
            )
          )
        ),

        // Mobile Menu Dropdown
        mobileMenuOpen &&
          h(
            "div",
            { className: "border-b border-[#f0f0eb]/10 bg-[#090909] px-6 py-8 md:hidden" },
            h(
              "ul",
              { className: "space-y-4" },
              navLinks.map((link) =>
                h(
                  "li",
                  { key: link.id },
                  h(
                    "a",
                    {
                      href: `#${link.id}`,
                      onClick: () => setMobileMenuOpen(false),
                      className: "flex items-center justify-between font-display text-2xl font-bold uppercase text-[#f0f0eb] hover:text-[#c6f36a]"
                    },
                    link.label,
                    h("span", { className: "font-mono text-xs text-[#8c8c86]" }, link.num)
                  )
                )
              )
            )
          )
      ),

      // HERO SECTION (With Subtle Slow-Motion Cinematic Entry + Profile Photo Spot)
      h(
        "section",
        { id: "home", className: "relative flex min-h-screen flex-col pt-24 md:pt-32" },
        h(
          "div",
          { className: "relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 md:px-10" },

          // Header meta row
          h(
            "div",
            { className: "reveal is-visible flex flex-wrap justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86]" },
            h("span", null, "Portfolio, Vol. 01"),
            h("span", { className: "flex items-center gap-2" },
              h("span", { className: "h-2 w-2 bg-[#c6f36a] animate-pulse" }),
              `Addis Ababa ${currentTime} EAT`
            )
          ),

          // Main Hero Grid: Headline & Profile Frame
          h(
            "div",
            { className: "mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end" },
            
            // Large Display Name
            h(
              "div",
              { className: "lg:col-span-8 animate-hero-rise" },
              h(
                "h1",
                { className: "font-display font-bold uppercase text-[clamp(3.5rem,12vw,13rem)] leading-[0.84] tracking-[-0.05em]" },
                h("span", { className: "block text-[#f0f0eb]" }, "Eyosiyas"),
                h("span", { className: "flex items-baseline justify-between text-[#f0f0eb]" },
                  "Desta",
                  h("span", { className: "mb-2 h-4 w-4 md:h-8 md:w-8 bg-[#c6f36a] inline-block" })
                )
              )
            ),

            // Profile Picture Showcase Card
            h(
              "div",
              { className: "lg:col-span-4 reveal delay-1" },
              h(
                "div",
                { className: "relative w-full max-w-sm ml-auto border border-[#f0f0eb]/15 bg-[#141414] p-4 group transition-colors duration-500 hover:border-[#c6f36a]/50" },
                h(
                  "div",
                  { className: "relative aspect-[4/5] w-full overflow-hidden bg-[#090909] border border-[#f0f0eb]/10 flex items-center justify-center" },
                  !imgError
                    ? h("img", {
                        src: "./assets/profile.jpg",
                        alt: "Eyosiyas Desta",
                        onError: () => setImgError(true),
                        className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      })
                    : h(
                        "div",
                        { className: "flex flex-col items-center justify-center p-6 text-center space-y-3" },
                        h("div", { className: "w-20 h-20 bg-[#141414] border border-[#f0f0eb]/20 flex items-center justify-center text-3xl font-display font-bold text-[#c6f36a]" }, "ED"),
                        h("p", { className: "font-mono text-xs uppercase tracking-wider text-[#8c8c86]" }, "Profile Photo"),
                        h("span", { className: "text-[11px] font-mono text-[#8c8c86] bg-[#090909] px-3 py-1 border border-[#f0f0eb]/10" }, "Drop 'profile.jpg' into assets")
                      )
                ),
                h(
                  "div",
                  { className: "mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]" },
                  h("span", { className: "text-[#f0f0eb]" }, "Eyosiyas Desta"),
                  h("span", { className: "text-[#c6f36a]" }, "ASTU // SE")
                )
              )
            )
          ),

          // Subtitle & Introduction
          h(
            "div",
            { className: "mt-12 grid grid-cols-1 gap-10 border-t border-[#f0f0eb]/15 py-10 md:mt-16 md:grid-cols-12" },
            h(
              "p",
              { className: "reveal font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-[#f0f0eb] md:col-span-7" },
              "Engineering the architecture behind meaningful, high-performance systems."
            ),
            h(
              "div",
              { className: "reveal delay-2 flex flex-col gap-6 md:col-span-4 md:col-start-9" },
              h(
                "p",
                { className: "leading-[1.65] text-[#8c8c86] text-base" },
                "Software engineering student at Adama Science and Technology University. Specialized in backend systems, Java & Spring Boot, relational database design, and structured RESTful APIs."
              ),
              h(
                "div",
                { className: "inline-flex w-fit items-center gap-3 border border-[#f0f0eb]/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#f0f0eb]" },
                h("span", { className: "relative flex h-2 w-2" },
                  h("span", { className: "absolute inset-0 animate-ping bg-[#c6f36a] opacity-70" }),
                  h("span", { className: "relative h-2 w-2 bg-[#c6f36a]" })
                ),
                "Open to internships & engineering projects"
              ),
              h(
                "div",
                { className: "flex flex-wrap gap-3 pt-2" },
                h(
                  "a",
                  {
                    href: "#projects",
                    className: "group inline-flex items-center gap-2 bg-[#c6f36a] px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-[#090909] font-semibold transition-colors duration-300 hover:bg-[#f0f0eb]"
                  },
                  "View Projects",
                  h("span", { className: "transition-transform duration-300 group-hover:translate-y-0.5" }, "↓")
                ),
                h(
                  "a",
                  {
                    href: "#about",
                    className: "inline-flex items-center border border-[#f0f0eb]/25 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-[#f0f0eb] transition-colors duration-300 hover:border-[#f0f0eb] hover:bg-[#141414]"
                  },
                  "Read Story"
                )
              )
            )
          ),

          // Metadata Grid Row
          h(
            "dl",
            { className: "reveal delay-3 grid grid-cols-2 border-y border-[#f0f0eb]/15 md:grid-cols-4" },
            [
              { label: "Role", value: "Software Engineering Student" },
              { label: "Focus", value: "Backend & Systems Architecture" },
              { label: "Institution", value: "ASTU (Adama, Ethiopia)" },
              { label: "Core Stack", value: "Java // Spring Boot // PostgreSQL" }
            ].map((item, idx) =>
              h(
                "div",
                {
                  key: idx,
                  className: `py-5 pr-4 md:px-6 md:py-6 ${idx % 2 === 1 ? "border-l border-[#f0f0eb]/15 pl-4" : ""} ${
                    idx > 1 ? "border-t border-[#f0f0eb]/15 md:border-t-0" : ""
                  } ${idx > 0 ? "md:border-l md:border-[#f0f0eb]/15" : ""}`
                },
                h("dt", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86]" }, item.label),
                h("dd", { className: "mt-2 text-base text-[#f0f0eb] font-medium" }, item.value)
              )
            )
          )
        )
      ),

      // ABOUT SECTION
      h(
        "section",
        { id: "about", className: "scroll-mt-20 border-t border-[#f0f0eb]/10 bg-[#141414]" },
        h(
          "div",
          { className: "mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36" },
          h(
            "div",
            { className: "flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em]" },
            h("span", { className: "text-[#c6f36a]" }, "(01)"),
            h("span", { className: "text-[#8c8c86]" }, "About Background"),
            h("span", { className: "h-px flex-1 bg-[#f0f0eb]/15" })
          ),
          h(
            "p",
            { className: "reveal mt-16 font-display text-[clamp(2.25rem,5.6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#f0f0eb]" },
            "Most software is judged by its surface. I am more interested in what holds it up."
          ),
          h(
            "div",
            { className: "mt-20 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10" },
            h(
              "dl",
              { className: "reveal grid grid-cols-1 gap-6 self-start md:sticky md:top-28 md:col-span-4" },
              [
                { label: "University", value: "Adama Science and Technology University" },
                { label: "Program", value: "B.Sc. in Software Engineering" },
                { label: "Specialization", value: "Backend Engineering, APIs, Spring Boot" },
                { label: "Base", value: "Addis Ababa, Ethiopia" }
              ].map((f, i) =>
                h(
                  "div",
                  { key: i, className: "border-t border-[#f0f0eb]/15 pt-4" },
                  h("dt", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86]" }, f.label),
                  h("dd", { className: "mt-2 text-base text-[#f0f0eb]" }, f.value)
                )
              )
            ),
            h(
              "div",
              { className: "space-y-6 text-lg leading-[1.7] text-[#8c8c86] md:col-span-7 md:col-start-6" },
              h(
                "p",
                { className: "reveal text-xl text-[#f0f0eb]" },
                "I am a software engineering student interested in how systems operate beneath the interface: how data models are normalized, how services interact via APIs, and how early architectural choices dictate whether an application survives scale."
              ),
              h(
                "p",
                { className: "reveal" },
                "My primary focus is backend engineering with Java and the Spring Boot framework. I enjoy relational database design, transaction safety, and the discipline of clean API contracts. Most of what I build begins with an engineering question: how will this perform under real concurrent demand?"
              ),
              h(
                "blockquote",
                { className: "reveal mt-12 border-l-2 border-[#c6f36a] pl-6 font-display text-2xl sm:text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[#f0f0eb]" },
                "“I want to understand a system deeply enough to refactor, debug, and scale it without fear.”"
              )
            )
          )
        )
      ),

      // SELECTED PROJECTS SECTION (Click to Open Interactive Window)
      h(
        "section",
        { id: "projects", className: "scroll-mt-20 border-t border-[#f0f0eb]/10 bg-[#090909]" },
        h(
          "div",
          { className: "mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36" },
          h(
            "div",
            { className: "flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em]" },
            h("span", { className: "text-[#c6f36a]" }, "(02)"),
            h("span", { className: "text-[#8c8c86]" }, "Selected Projects"),
            h("span", { className: "h-px flex-1 bg-[#f0f0eb]/15" })
          ),
          h(
            "div",
            { className: "mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" },
            h(
              "h2",
              { className: "reveal font-display text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em] text-[#f0f0eb] md:col-span-8" },
              "Selected Work"
            ),
            h(
              "p",
              { className: "reveal delay-1 leading-[1.65] text-[#8c8c86] md:col-span-4 md:col-start-9" },
              "Each project is an architectural study in data integrity and scalable design. Click any case study to launch its dedicated specification window."
            )
          ),

          // Clickable Project Cards
          h(
            "div",
            { className: "mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8" },
            projects.map((proj) =>
              h(
                "article",
                {
                  key: proj.id,
                  onClick: () => setSelectedProject(proj),
                  className: "reveal group cursor-pointer border border-[#f0f0eb]/15 bg-[#141414] p-8 md:p-10 transition-all duration-500 hover:border-[#c6f36a] hover:bg-[#141414]/90 flex flex-col justify-between"
                },
                h(
                  "div",
                  null,
                  h(
                    "div",
                    { className: "flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] mb-6" },
                    h("span", { className: "text-[#c6f36a]" }, `Case Study ${proj.number}`),
                    h("span", { className: "text-[#8c8c86]" }, proj.kind)
                  ),
                  h(
                    "h3",
                    { className: "font-display text-4xl sm:text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] text-[#f0f0eb] mb-4 group-hover:text-[#c6f36a] transition-colors duration-300" },
                    proj.title
                  ),
                  h(
                    "p",
                    { className: "text-lg text-[#f0f0eb] leading-[1.6] mb-6 font-medium" },
                    proj.summary
                  ),
                  h(
                    "div",
                    { className: "space-y-4 border-t border-[#f0f0eb]/15 pt-6 text-sm text-[#8c8c86]" },
                    h(
                      "div",
                      null,
                      h("span", { className: "block font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86] mb-1" }, "Core Challenge"),
                      h("p", { className: "leading-[1.6]" }, proj.problem)
                    )
                  )
                ),

                // Card Footer
                h(
                  "div",
                  { className: "mt-10 pt-6 border-t border-[#f0f0eb]/15 flex flex-wrap items-center justify-between gap-4" },
                  h(
                    "ul",
                    { className: "flex flex-wrap gap-2" },
                    proj.stack.slice(0, 4).map((tech, tIdx) =>
                      h("li", { key: tIdx, className: "border border-[#f0f0eb]/20 px-2.5 py-1 font-mono text-[11px] uppercase text-[#f0f0eb]" }, tech)
                    )
                  ),
                  h(
                    "div",
                    { className: "inline-flex items-center gap-2 border-b border-[#f0f0eb] pb-1 font-mono text-[12px] uppercase tracking-[0.12em] text-[#f0f0eb] group-hover:border-[#c6f36a] group-hover:text-[#c6f36a] transition-colors" },
                    "Open Window",
                    h("span", null, "↗")
                  )
                )
              )
            )
          )
        )
      ),

      // TOOLKIT / EXPERTISE SECTION
      h(
        "section",
        { id: "expertise", className: "scroll-mt-20 border-t border-[#f0f0eb]/10 bg-[#141414]" },
        h(
          "div",
          { className: "mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36" },
          h(
            "div",
            { className: "flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em]" },
            h("span", { className: "text-[#c6f36a]" }, "(03)"),
            h("span", { className: "text-[#8c8c86]" }, "Technical Toolkit"),
            h("span", { className: "h-px flex-1 bg-[#f0f0eb]/15" })
          ),
          h(
            "div",
            { className: "mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" },
            h(
              "h2",
              { className: "reveal font-display text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em] text-[#f0f0eb] md:col-span-8" },
              "Toolkit"
            ),
            h(
              "p",
              { className: "reveal delay-1 leading-[1.65] text-[#8c8c86] md:col-span-4 md:col-start-9" },
              "Languages, frameworks, and architecture patterns I build with daily. Honed through projects, coursework, and systems exploration."
            )
          ),
          h(
            "div",
            { className: "mt-20" },
            toolkit.map((item, idx) =>
              h(
                "div",
                { key: idx, className: "reveal grid grid-cols-1 gap-6 border-t border-[#f0f0eb]/15 py-10 md:grid-cols-12 md:py-14" },
                h(
                  "div",
                  { className: "flex items-start gap-4 md:col-span-4" },
                  h("span", { className: "pt-1 font-mono text-[11px] text-[#8c8c86]" }, `0${idx + 1}`),
                  h("h3", { className: "font-display text-2xl font-bold uppercase tracking-[-0.02em] text-[#f0f0eb]" }, item.title)
                ),
                h(
                  "ul",
                  { className: "flex flex-wrap gap-x-8 gap-y-2 md:col-span-8" },
                  item.items.map((tech, tIdx) =>
                    h(
                      "li",
                      { key: tIdx, className: "cursor-default font-display text-3xl font-bold uppercase tracking-[-0.03em] text-[#8c8c86] transition-colors duration-300 hover:text-[#c6f36a] md:text-5xl" },
                      tech
                    )
                  )
                )
              )
            ),
            h("div", { className: "border-t border-[#f0f0eb]/15" })
          )
        )
      ),

      // CONTACT SECTION
      h(
        "section",
        { id: "contact", className: "scroll-mt-20 border-t border-[#f0f0eb]/10 bg-[#090909]" },
        h(
          "div",
          { className: "mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36" },
          h(
            "div",
            { className: "flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em]" },
            h("span", { className: "text-[#c6f36a]" }, "(04)"),
            h("span", { className: "text-[#8c8c86]" }, "Contact"),
            h("span", { className: "h-px flex-1 bg-[#f0f0eb]/15" })
          ),
          h(
            "h2",
            { className: "reveal mt-16 font-display text-[clamp(3.25rem,10.5vw,11.5rem)] font-bold uppercase leading-[0.84] tracking-[-0.05em] text-[#f0f0eb]" },
            "Have something",
            h("br", null),
            h("span", { className: "text-[#8c8c86]" }, "worth building?")
          ),
          h(
            "p",
            { className: "reveal delay-1 mt-10 max-w-xl text-lg leading-[1.65] text-[#8c8c86]" },
            "Whether you need a backend service designed, database optimization, or have an engineering internship opportunity, I am always open to conversation."
          ),
          h(
            "ul",
            { className: "mt-16 border-t border-[#f0f0eb]/15" },
            [
              { label: "Email", value: "contact@eyosiyasdesta.me", isEmail: true },
              { label: "GitHub", value: "github.com/eyosiyasdesta", href: "https://github.com/eyosiyasdesta" },
              { label: "Institution", value: "Adama Science and Technology University", href: null }
            ].map((contact, cIdx) =>
              h(
                "li",
                { key: cIdx, className: "reveal border-b border-[#f0f0eb]/15" },
                contact.isEmail
                  ? h(
                      "button",
                      {
                        onClick: copyEmail,
                        className: "group w-full flex items-center justify-between gap-6 py-8 text-left transition-colors"
                      },
                      h("span", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86]" }, contact.label),
                      h(
                        "span",
                        { className: "flex items-center gap-4 font-display text-xl sm:text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] text-[#f0f0eb] group-hover:text-[#c6f36a] transition-colors" },
                        copiedEmail ? "✓ Copied to clipboard!" : contact.value
                      )
                    )
                  : contact.href
                  ? h(
                      "a",
                      {
                        href: contact.href,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group flex items-center justify-between gap-6 py-8"
                      },
                      h("span", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86]" }, contact.label),
                      h(
                        "span",
                        { className: "flex items-center gap-4 font-display text-xl sm:text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] text-[#f0f0eb] group-hover:text-[#c6f36a] transition-colors" },
                        contact.value,
                        h("span", { className: "text-2xl sm:text-4xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" }, "↗")
                      )
                    )
                  : h(
                      "div",
                      { className: "flex items-center justify-between gap-6 py-8" },
                      h("span", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86]" }, contact.label),
                      h("span", { className: "font-mono text-[12px] uppercase tracking-[0.12em] text-[#8c8c86]" }, contact.value)
                    )
              )
            )
          )
        )
      ),

      // FOOTER
      h(
        "footer",
        { className: "border-t border-[#f0f0eb]/10 bg-[#090909] py-10" },
        h(
          "div",
          { className: "mx-auto flex max-w-[1440px] flex-col gap-6 px-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86] md:flex-row md:items-center md:justify-between md:px-10" },
          h("span", { className: "font-display text-lg font-bold text-[#f0f0eb] normal-case tracking-[-0.02em]" }, "Eyosiyas Desta"),
          h("span", null, "Software Engineering, ASTU // 2026"),
          h(
            "a",
            { href: "#home", className: "group inline-flex items-center gap-2 text-[#f0f0eb] hover:text-[#c6f36a] transition-colors" },
            "Back to top",
            h("span", { className: "inline-block transition-transform duration-300 group-hover:-translate-y-1" }, "↑")
          )
        )
      ),

      // THE INTERACTIVE CASE STUDY WINDOW (MODAL)
      selectedProject &&
        h(
          "div",
          {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090909]/85 backdrop-blur-md animate-modal-entry",
            onClick: () => setSelectedProject(null)
          },
          h(
            "div",
            {
              className: "relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#f0f0eb]/25 bg-[#141414] p-6 sm:p-10 shadow-2xl text-left",
              onClick: (e) => e.stopPropagation()
            },
            
            // Modal Header
            h(
              "div",
              { className: "flex items-start justify-between gap-4 border-b border-[#f0f0eb]/15 pb-6" },
              h(
                "div",
                null,
                h(
                  "div",
                  { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#c6f36a] mb-2" },
                  `${selectedProject.badge} // CASE STUDY ${selectedProject.number}`
                ),
                h("h3", { className: "font-display text-4xl sm:text-5xl font-bold uppercase tracking-[-0.04em] text-[#f0f0eb]" }, selectedProject.title),
                h("p", { className: "font-mono text-xs uppercase tracking-wider text-[#8c8c86] mt-1" }, selectedProject.kind)
              ),
              h(
                "button",
                {
                  onClick: () => setSelectedProject(null),
                  className: "border border-[#f0f0eb]/20 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[#f0f0eb] hover:border-[#c6f36a] hover:text-[#c6f36a] transition-colors"
                },
                "CLOSE [ESC]"
              )
            ),

            // Modal Body
            h(
              "div",
              { className: "mt-8 space-y-8 text-[#f0f0eb]" },
              
              // Overview
              h(
                "div",
                null,
                h("h4", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86] mb-2" }, "Summary Overview"),
                h("p", { className: "text-lg leading-[1.65] text-[#f0f0eb]" }, selectedProject.summary)
              ),

              // Problem & Solution Split
              h(
                "div",
                { className: "grid grid-cols-1 md:grid-cols-2 gap-6 border border-[#f0f0eb]/15 bg-[#090909] p-6" },
                h(
                  "div",
                  null,
                  h("span", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86] block mb-2" }, "The Engineering Problem"),
                  h("p", { className: "text-sm text-[#8c8c86] leading-[1.65]" }, selectedProject.problem)
                ),
                h(
                  "div",
                  null,
                  h("span", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#c6f36a] block mb-2" }, "The Implemented Solution"),
                  h("p", { className: "text-sm text-[#f0f0eb] leading-[1.65]" }, selectedProject.solution)
                )
              ),

              // Architectural Highlights
              h(
                "div",
                null,
                h("h4", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86] mb-4" }, "Architectural & Technical Highlights"),
                h(
                  "ul",
                  { className: "space-y-3" },
                  selectedProject.architecture.map((item, idx) =>
                    h(
                      "li",
                      { key: idx, className: "flex items-start gap-3 text-sm leading-relaxed" },
                      h("span", { className: "text-[#c6f36a] font-mono" }, "—"),
                      h("span", { className: "text-[#f0f0eb]" }, item)
                    )
                  )
                )
              ),

              // Stack Badges
              h(
                "div",
                null,
                h("h4", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-[#8c8c86] mb-3" }, "Technologies Applied"),
                h(
                  "div",
                  { className: "flex flex-wrap gap-2" },
                  selectedProject.stack.map((t, idx) =>
                    h("span", { key: idx, className: "border border-[#f0f0eb]/20 px-3 py-1 font-mono text-[11px] uppercase text-[#f0f0eb]" }, t)
                  )
                )
              )
            ),

            // Modal Footer
            h(
              "div",
              { className: "mt-10 border-t border-[#f0f0eb]/15 pt-6 flex flex-wrap items-center justify-between gap-4" },
              h(
                "a",
                {
                  href: selectedProject.repoUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-2 bg-[#c6f36a] px-6 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[#090909] font-bold transition-colors hover:bg-[#f0f0eb]"
                },
                "View GitHub Repository ↗"
              ),
              h(
                "button",
                {
                  onClick: () => setSelectedProject(null),
                  className: "font-mono text-xs uppercase tracking-wider text-[#8c8c86] hover:text-[#f0f0eb] transition-colors"
                },
                "Dismiss Window [ESC]"
              )
            )
          )
        )
    );
  }

  // Mount Application
  const root = document.getElementById("root");
  if (root && window.ReactDOM) {
    window.ReactDOM.createRoot(root).render(h(App));
  }
})();
