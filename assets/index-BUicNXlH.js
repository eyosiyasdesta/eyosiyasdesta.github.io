// Eyosiyas Desta - Portfolio Application
// Modern React 18 Architecture with Interactive Project Modal Window

(function () {
  const { useState, useEffect, createElement: h } = window.React;

  // Project Data
  const projectsData = [
    {
      id: "marketto",
      title: "Marketto",
      badge: "Featured Backend Project",
      kind: "E-Commerce Backend & Web Platform",
      summary: "A robust, scalable e-commerce system built with Java & Spring Boot, providing secure RESTful APIs for product management, shopping carts, and order processing.",
      problem: "Modern e-commerce backends require strict transactional integrity, secure user authorization, concurrent inventory handling, and fast database queries during peak traffic.",
      solution: "Engineered a clean layered Spring Boot architecture (Controller-Service-Repository) with Spring Security and JWT. Features transactional order placement, cart persistence, role-based access (Customer vs Admin), and indexed relational data models.",
      highlights: [
        "Spring Security with stateless JWT authentication & refresh tokens",
        "Role-Based Access Control (RBAC) protecting sensitive admin endpoints",
        "Transactional order lifecycle (Pending, Confirmed, Shipped, Cancelled)",
        "PostgreSQL database with Hibernate/JPA schema mapping & index optimization",
        "Comprehensive REST API contracts verified using Postman & Swagger"
      ],
      stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Hibernate/JPA", "REST API", "Docker", "Maven"],
      repoUrl: "https://github.com/eyosiyasdesta",
      liveUrl: null
    },
    {
      id: "shelfwise",
      title: "Shelfwise",
      badge: "Core System Project",
      kind: "Digital Library Management System",
      summary: "A structured digital library platform designed to catalog academic resources, automate borrowing lifecycles, and streamline student library operations.",
      problem: "Traditional university library operations suffer from fragmented paper checkouts, inaccurate shelf inventory, and unmonitored overdue materials.",
      solution: "Developed a centralized relational system with unified book indexing, automated borrower quotas, real-time checkout tracking, and instant overdue calculation.",
      highlights: [
        "Relational database design for titles, physical copies, and student loan records",
        "Borrowing rules engine preventing checkouts beyond account quota or with unpaid holds",
        "Fast catalog search by title, ISBN, author, and availability status",
        "Clean REST API endpoints supporting frontend integration and admin dashboards"
      ],
      stack: ["Java", "Spring Boot", "MySQL", "REST API", "Tailwind CSS", "Git"],
      repoUrl: "https://github.com/eyosiyasdesta",
      liveUrl: null
    }
  ];

  const skillsData = [
    {
      category: "Backend Development",
      items: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "RESTful APIs", "JWT Auth"]
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "Database Modeling", "SQL Query Optimization", "Hibernate / JPA"]
    },
    {
      category: "Frontend & UI",
      items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & Modern CSS", "Responsive Design"]
    },
    {
      category: "Tools & Workflow",
      items: ["Git & GitHub", "Docker Basics", "Postman", "Maven", "VS Code & IntelliJ", "Linux CLI"]
    }
  ];

  function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [imgFailed, setImgFailed] = useState(false);
    const [currentTime, setCurrentTime] = useState("");
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [contactSuccess, setContactSuccess] = useState(false);

    useEffect(() => {
      const updateTime = () => {
        try {
          const now = new Date();
          const formatted = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Africa/Addis_Ababa",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23"
          }).format(now);
          setCurrentTime(formatted);
        } catch (e) {
          setCurrentTime("12:00");
        }
      };
      updateTime();
      const interval = setInterval(updateTime, 30000);
      return () => clearInterval(interval);
    }, []);

    // Handle Escape key to close modal
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const copyEmail = () => {
      navigator.clipboard.writeText("eyosiyasdesta@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      setContactSuccess(true);
      setTimeout(() => setContactSuccess(false), 4000);
    };

    return h(
      "div",
      { className: "min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#c6f36a] selection:text-black font-sans" },

      // Header / Navbar
      h(
        "header",
        { className: "sticky top-0 z-40 backdrop-blur-md bg-[#09090b]/85 border-b border-zinc-800/80 transition-colors" },
        h(
          "div",
          { className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" },
          h(
            "a",
            { href: "#home", className: "flex items-center gap-2 group font-display text-xl font-bold tracking-tight text-white" },
            h("span", { className: "w-8 h-8 rounded-lg bg-[#c6f36a] text-black font-extrabold flex items-center justify-center text-xs tracking-wider transition-transform group-hover:scale-105" }, "ED"),
            h("span", null, "Eyosiyas", h("span", { className: "text-[#c6f36a]" }, " /"))
          ),
          h(
            "nav",
            { className: "hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-zinc-400" },
            h("a", { href: "#about", className: "hover:text-[#c6f36a] transition" }, "01 // About"),
            h("a", { href: "#projects", className: "hover:text-[#c6f36a] transition" }, "02 // Projects"),
            h("a", { href: "#skills", className: "hover:text-[#c6f36a] transition" }, "03 // Toolkit"),
            h("a", { href: "#contact", className: "hover:text-[#c6f36a] transition" }, "04 // Contact")
          ),
          h(
            "div",
            { className: "flex items-center gap-3" },
            h(
              "a",
              {
                href: "https://github.com/eyosiyasdesta",
                target: "_blank",
                rel: "noreferrer",
                className: "px-3.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:border-[#c6f36a] hover:text-[#c6f36a] text-xs font-mono transition flex items-center gap-2"
              },
              h("span", null, "GitHub ↗")
            )
          )
        )
      ),

      // Hero Section with Profile Frame
      h(
        "section",
        { id: "home", className: "relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28" },
        
        // Location & Vol badge
        h(
          "div",
          { className: "flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-zinc-500 mb-8" },
          h("span", null, "PORTFOLIO // VOL. 01"),
          h("span", { className: "flex items-center gap-2" },
            h("span", { className: "w-2 h-2 rounded-full bg-[#c6f36a] animate-pulse" }),
            `ADDIS ABABA ${currentTime} EAT`
          )
        ),

        // Main Grid: Intro & Profile Photo Card
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" },

          // Left: Typography & Bio
          h(
            "div",
            { className: "lg:col-span-7 space-y-6" },
            h(
              "div",
              { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c6f36a] text-xs font-mono tracking-wide" },
              h("span", { className: "w-1.5 h-1.5 rounded-full bg-[#c6f36a]" }),
              "Software Engineering Student @ ASTU"
            ),
            h(
              "h1",
              { className: "text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]" },
              "Engineering robust backends & ",
              h("span", { className: "text-[#c6f36a]" }, "scalable APIs"),
              "."
            ),
            h(
              "p",
              { className: "text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl" },
              "Hi, I'm ",
              h("strong", { className: "text-zinc-200" }, "Eyosiyas Desta"),
              ". Focused on the core systems beneath the user interface: clean data modeling, performant databases, and reliable RESTful services built with Java, Spring Boot, and modern tools."
            ),
            h(
              "div",
              { className: "pt-2 flex flex-wrap items-center gap-4" },
              h(
                "a",
                {
                  href: "#projects",
                  className: "px-6 py-3 rounded-xl bg-[#c6f36a] hover:bg-white text-black font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#c6f36a]/15 flex items-center gap-2"
                },
                "Explore Selected Work",
                h("span", null, "↓")
              ),
              h(
                "a",
                {
                  href: "#about",
                  className: "px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition"
                },
                "About Background"
              )
            )
          ),

          // Right: Profile Photo Showcase Card
          h(
            "div",
            { className: "lg:col-span-5 flex justify-center lg:justify-end" },
            h(
              "div",
              { className: "relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-2xl backdrop-blur-sm" },
              
              // Photo Frame
              h(
                "div",
                { className: "relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 flex items-center justify-center group" },
                !imgFailed
                  ? h("img", {
                      src: "./assets/profile.jpg",
                      alt: "Eyosiyas Desta",
                      onError: () => setImgFailed(true),
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    })
                  : h(
                      "div",
                      { className: "flex flex-col items-center justify-center p-6 text-center space-y-3" },
                      h(
                        "div",
                        { className: "w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-3xl font-display font-bold text-[#c6f36a]" },
                        "ED"
                      ),
                      h("p", { className: "font-mono text-xs text-zinc-400" }, "Photo placeholder"),
                      h(
                        "span",
                        { className: "text-[11px] text-zinc-500 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800" },
                        "Drop 'profile.jpg' into assets folder"
                      )
                    ),
                // Glowing border overlay
                h("div", { className: "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" })
              ),

              // Profile Card Info Footer
              h(
                "div",
                { className: "mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono" },
                h(
                  "div",
                  null,
                  h("div", { className: "font-semibold text-white" }, "Eyosiyas Desta"),
                  h("div", { className: "text-zinc-500" }, "Adama Science & Tech Univ.")
                ),
                h(
                  "span",
                  { className: "px-2.5 py-1 rounded bg-[#c6f36a]/10 border border-[#c6f36a]/20 text-[#c6f36a] text-[11px]" },
                  "Backend Dev"
                )
              )
            )
          )
        )
      ),

      // About Section
      h(
        "section",
        { id: "about", className: "border-t border-zinc-800/80 bg-zinc-950/50 py-24" },
        h(
          "div",
          { className: "max-w-6xl mx-auto px-6" },
          h(
            "div",
            { className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#c6f36a] mb-4" },
            h("span", null, "(01)"),
            h("span", null, "ABOUT THE DEVELOPER")
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-8" },
            "Interested in what holds software up, not just what's on the surface."
          ),
          h(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-12 gap-10 text-zinc-400 leading-relaxed text-base" },
            h(
              "div",
              { className: "md:col-span-7 space-y-4" },
              h(
                "p",
                null,
                "I am a software engineering student at Adama Science and Technology University (ASTU). I gravitate toward the structural backbone of applications: database schema design, transaction boundaries, and the clean implementation of RESTful APIs."
              ),
              h(
                "p",
                null,
                "Currently, I build applications primarily using Java and the Spring Boot ecosystem, pairing them with relational databases like PostgreSQL and MySQL. My approach is rooted in understanding how each design choice affects maintainability, concurrency, and security as a system scales."
              ),
              h(
                "blockquote",
                { className: "mt-6 border-l-2 border-[#c6f36a] pl-4 italic text-zinc-200 text-lg" },
                "“I want to understand a system deeply enough to refactor and optimize it without fear.”"
              )
            ),
            h(
              "div",
              { className: "md:col-span-5 space-y-3" },
              [
                { label: "Institution", value: "Adama Science and Technology University" },
                { label: "Degree Program", value: "B.Sc. in Software Engineering" },
                { label: "Primary Focus", value: "Backend Systems, APIs, Spring Boot" },
                { label: "Location", value: "Addis Ababa, Ethiopia" }
              ].map((fact, idx) =>
                h(
                  "div",
                  { key: idx, className: "p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40" },
                  h("div", { className: "text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1" }, fact.label),
                  h("div", { className: "text-sm font-semibold text-zinc-200" }, fact.value)
                )
              )
            )
          )
        )
      ),

      // Selected Projects Section (Interactive Cards + Modal Trigger)
      h(
        "section",
        { id: "projects", className: "border-t border-zinc-800/80 py-24" },
        h(
          "div",
          { className: "max-w-6xl mx-auto px-6" },
          h(
            "div",
            { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" },
            h(
              "div",
              null,
              h(
                "div",
                { className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#c6f36a] mb-2" },
                h("span", null, "(02)"),
                h("span", null, "SELECTED WORK")
              ),
              h(
                "h2",
                { className: "text-3xl sm:text-4xl font-bold font-display tracking-tight text-white" },
                "Engineered Case Studies"
              )
            ),
            h(
              "p",
              { className: "text-xs font-mono text-zinc-400 max-w-sm" },
              "Click on any project card below to open its dedicated architectural window and inspect problem-solution breakdowns."
            )
          ),

          // Project Cards Grid
          h(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
            projectsData.map((project, index) =>
              h(
                "div",
                {
                  key: project.id,
                  onClick: () => setSelectedProject(project),
                  className: "group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/90 hover:border-[#c6f36a]/50 p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#c6f36a]/5"
                },
                h(
                  "div",
                  null,
                  h(
                    "div",
                    { className: "flex items-center justify-between gap-2 mb-4" },
                    h(
                      "span",
                      { className: "px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#c6f36a]/10 text-[#c6f36a] border border-[#c6f36a]/20" },
                      project.badge
                    ),
                    h("span", { className: "font-mono text-xs text-zinc-500" }, `0${index + 1}`)
                  ),
                  h(
                    "h3",
                    { className: "text-2xl font-bold font-display text-white mb-2 group-hover:text-[#c6f36a] transition-colors" },
                    project.title
                  ),
                  h(
                    "p",
                    { className: "text-xs font-mono text-zinc-400 mb-3" },
                    project.kind
                  ),
                  h(
                    "p",
                    { className: "text-sm text-zinc-300 leading-relaxed mb-6" },
                    project.summary
                  )
                ),

                h(
                  "div",
                  { className: "pt-4 border-t border-zinc-800/80" },
                  h(
                    "div",
                    { className: "flex flex-wrap gap-1.5 mb-5" },
                    project.stack.slice(0, 5).map((tech, tIdx) =>
                      h(
                        "span",
                        { key: tIdx, className: "px-2.5 py-1 rounded text-xs font-mono bg-zinc-800/80 text-zinc-300" },
                        tech
                      )
                    ),
                    project.stack.length > 5 &&
                      h("span", { className: "px-2 py-1 text-xs font-mono text-zinc-500" }, `+${project.stack.length - 5} more`)
                  ),
                  h(
                    "div",
                    { className: "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c6f36a] group-hover:translate-x-1 transition-transform" },
                    "Open Project Window",
                    h("span", null, "→")
                  )
                )
              )
            )
          )
        )
      ),

      // Toolkit & Capabilities Section
      h(
        "section",
        { id: "skills", className: "border-t border-zinc-800/80 bg-zinc-950/40 py-24" },
        h(
          "div",
          { className: "max-w-6xl mx-auto px-6" },
          h(
            "div",
            { className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#c6f36a] mb-2" },
            h("span", null, "(03)"),
            h("span", null, "TECHNICAL TOOLKIT")
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-12" },
            "Technologies & Engineering Stack"
          ),
          h(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
            skillsData.map((category, idx) =>
              h(
                "div",
                { key: idx, className: "p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50" },
                h("h3", { className: "text-sm font-mono uppercase tracking-wider text-[#c6f36a] mb-4 pb-2 border-b border-zinc-800" }, category.category),
                h(
                  "ul",
                  { className: "space-y-2.5" },
                  category.items.map((item, iIdx) =>
                    h(
                      "li",
                      { key: iIdx, className: "text-sm font-medium text-zinc-300 flex items-center gap-2" },
                      h("span", { className: "w-1 h-1 rounded-full bg-zinc-500" }),
                      item
                    )
                  )
                )
              )
            )
          )
        )
      ),

      // Contact Section
      h(
        "section",
        { id: "contact", className: "border-t border-zinc-800/80 py-24" },
        h(
          "div",
          { className: "max-w-4xl mx-auto px-6 text-center" },
          h(
            "div",
            { className: "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#c6f36a] mb-3" },
            h("span", null, "(04)"),
            h("span", null, "GET IN TOUCH")
          ),
          h(
            "h2",
            { className: "text-4xl sm:text-5xl font-bold font-display text-white mb-4" },
            "Have something worth building?"
          ),
          h(
            "p",
            { className: "text-zinc-400 text-base max-w-lg mx-auto mb-10 leading-relaxed" },
            "Whether you have a backend question, an internship opportunity, or want to discuss Spring Boot architecture, my inbox is open."
          ),
          h(
            "div",
            { className: "flex flex-wrap items-center justify-center gap-4 mb-12" },
            h(
              "button",
              {
                onClick: copyEmail,
                className: "px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#c6f36a] text-white font-mono text-xs uppercase tracking-wider transition flex items-center gap-2"
              },
              copiedEmail ? "✓ Copied to clipboard!" : "Copy: contact@eyosiyasdesta.me"
            ),
            h(
              "a",
              {
                href: "https://github.com/eyosiyasdesta",
                target: "_blank",
                rel: "noreferrer",
                className: "px-6 py-3.5 rounded-xl bg-[#c6f36a] hover:bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider transition"
              },
              "Visit GitHub Profile ↗"
            )
          )
        )
      ),

      // Footer
      h(
        "footer",
        { className: "border-t border-zinc-800/80 py-8 text-xs font-mono text-zinc-500" },
        h(
          "div",
          { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4" },
          h(
            "div",
            null,
            "© ",
            new Date().getFullYear(),
            " Eyosiyas Desta • Software Engineering, ASTU • ",
            h("a", { href: "https://eyosiyasdesta.me", className: "text-zinc-400 hover:text-[#c6f36a]" }, "eyosiyasdesta.me")
          ),
          h(
            "a",
            { href: "#home", className: "text-zinc-400 hover:text-white transition" },
            "Back to top ↑"
          )
        )
      ),

      // THE INTERACTIVE PROJECT MODAL WINDOW
      selectedProject &&
        h(
          "div",
          {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in",
            onClick: () => setSelectedProject(null)
          },
          h(
            "div",
            {
              className: "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8 shadow-2xl text-left animate-modal",
              onClick: (e) => e.stopPropagation()
            },
            
            // Modal Top Header
            h(
              "div",
              { className: "flex items-start justify-between gap-4 pb-4 border-b border-zinc-800" },
              h(
                "div",
                null,
                h(
                  "div",
                  { className: "inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#c6f36a]/15 text-[#c6f36a] border border-[#c6f36a]/30 mb-2" },
                  selectedProject.kind
                ),
                h("h3", { className: "text-2xl sm:text-3xl font-bold font-display text-white" }, selectedProject.title)
              ),
              h(
                "button",
                {
                  onClick: () => setSelectedProject(null),
                  className: "p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition text-lg font-mono",
                  "aria-label": "Close modal"
                },
                "✕"
              )
            ),

            // Modal Body: Problem & Solution
            h(
              "div",
              { className: "mt-6 space-y-6 text-sm text-zinc-300 leading-relaxed" },
              h(
                "div",
                null,
                h("h4", { className: "text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1" }, "Overview"),
                h("p", { className: "text-base text-zinc-200" }, selectedProject.summary)
              ),
              h(
                "div",
                { className: "p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-3" },
                h(
                  "div",
                  null,
                  h("span", { className: "text-xs font-mono font-bold text-red-400 uppercase tracking-wide block mb-1" }, "The Engineering Problem"),
                  h("p", { className: "text-zinc-400 text-xs sm:text-sm leading-relaxed" }, selectedProject.problem)
                ),
                h(
                  "div",
                  { className: "pt-2 border-t border-zinc-800/60" },
                  h("span", { className: "text-xs font-mono font-bold text-[#c6f36a] uppercase tracking-wide block mb-1" }, "The Implemented Solution"),
                  h("p", { className: "text-zinc-300 text-xs sm:text-sm leading-relaxed" }, selectedProject.solution)
                )
              ),

              // Architectural Highlights
              selectedProject.highlights &&
                h(
                  "div",
                  null,
                  h("h4", { className: "text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2" }, "Key Features & Architecture"),
                  h(
                    "ul",
                    { className: "space-y-2" },
                    selectedProject.highlights.map((item, hIdx) =>
                      h(
                        "li",
                        { key: hIdx, className: "text-xs sm:text-sm flex items-start gap-2" },
                        h("span", { className: "text-[#c6f36a] font-bold" }, "✓"),
                        h("span", { className: "text-zinc-300" }, item)
                      )
                    )
                  )
                ),

              // Technologies Stack
              h(
                "div",
                null,
                h("h4", { className: "text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2" }, "Technologies Used"),
                h(
                  "div",
                  { className: "flex flex-wrap gap-2" },
                  selectedProject.stack.map((t, idx) =>
                    h(
                      "span",
                      { key: idx, className: "px-2.5 py-1 rounded bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-700" },
                      t
                    )
                  )
                )
              )
            ),

            // Modal Footer Links
            h(
              "div",
              { className: "mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between" },
              h(
                "a",
                {
                  href: selectedProject.repoUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "px-5 py-2.5 rounded-xl bg-[#c6f36a] hover:bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider transition flex items-center gap-2"
                },
                "GitHub Repository ↗"
              ),
              h(
                "button",
                {
                  onClick: () => setSelectedProject(null),
                  className: "px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white transition"
                },
                "Close [ESC]"
              )
            )
          )
        )
    );
  }

  // Mount Application
  const rootElement = document.getElementById("root");
  if (rootElement && window.ReactDOM) {
    const root = window.ReactDOM.createRoot(rootElement);
    root.render(h(App));
  }
})();
