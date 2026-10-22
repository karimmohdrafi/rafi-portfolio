
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./App.css";

/* ---------- COLOR THEMES ---------- */
const themes = [
  { accent: "#60A5FA", bright: "#93C5FD", blue: "#38BDF8" },
  { accent: "#9AAB52", bright: "#C4D58A", blue: "#7DAD85" },
  { accent: "#A78BFA", bright: "#C4B5FD", blue: "#67E8F9" },
  { accent: "#34D399", bright: "#86EFAC", blue: "#2DD4BF" },
  { accent: "#FB7185", bright: "#FDA4AF", blue: "#F9A8D4" },
  { accent: "#FB923C", bright: "#FDBA74", blue: "#FACC15" },
  { accent: "#22D3EE", bright: "#A5F3FC", blue: "#818CF8" },
  { accent: "#4169E1", bright: "#82A6FF", blue: "#00C2FF" },
  { accent: "#84CC16", bright: "#BEF264", blue: "#22D3EE" },
  { accent: "#EF4444", bright: "#FCA5A5", blue: "#FB7185" },
  { accent: "#8B5CF6", bright: "#C4B5FD", blue: "#38BDF8" },
  { accent: "#14B8A6", bright: "#5EEAD4", blue: "#38BDF8" },
  { accent: "#EC4899", bright: "#F9A8D4", blue: "#A78BFA" },
  { accent: "#F59E0B", bright: "#FCD34D", blue: "#FB923C" },
  { accent: "#7DD3FC", bright: "#BAE6FD", blue: "#A5B4FC" },
];

const roles = [
  "Web Developer",
  "Web Designer",
  "Frontend Developer",
  "Python Developer",
  "Java Developer",
  "Backend Developer",
  "React Developer",
  "UI/UX Designer",
  "Associate Software Engineer",
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ---------- TECHNOLOGIES ---------- */
const technologies = [
  { name: "HTML5", icon: "simple-icons:html5", color: "#E34F26" },
  { name: "CSS3", icon: "simple-icons:css3", color: "#1572B6" },
  { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
  { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
  { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
  { name: "Java", icon: "simple-icons:openjdk", color: "#F89820" },
  { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#5FA04E" },
  { name: "Express.js", icon: "simple-icons:express", color: "#FFFFFF" },
  { name: "MongoDB", icon: "simple-icons:mongodb", color: "#47A248" },
  {
    name: "Firebase",
    icon: "simple-icons:firebase",
    color: "#FFCA28",
  },
  { name: "MySQL", icon: "simple-icons:mysql", color: "#4479A1" },
  { name: "Git", icon: "simple-icons:git", color: "#F05032" },
  { name: "GitHub", icon: "simple-icons:github", color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  {
    name: "Bootstrap",
    icon: "simple-icons:bootstrap",
    color: "#7952B3",
  },
  { name: "Figma", icon: "simple-icons:figma", color: "#F24E1E" },



  {
    name: "VS Code",
    icon: "simple-icons:visualstudiocode",
    color: "#007ACC",
  },
];

const orbitSkills = [
  technologies[0],
  technologies[1],
  technologies[2],
  technologies[3],
  technologies[4],
  technologies[5],
  technologies[6],
  technologies[11],
];


/* ---------- PROJECTS ---------- */
const projects = [
  {
    number: "01",
    title: "AI Nexus",
    description:
      "An intelligent AI platform featuring Medical AI, Voice AI, Image Generation, phishing detection, speech recognition, file conversion, location tracking, and interactive utilities in one place.",
    image: `${import.meta.env.BASE_URL}project_1.png`,
    alt: "AI Nexus project preview",
    tags: ["React", "FireBase", "Router", "AI"],
    type: "ai",
    accent: "#8b5cf6",
    demo: "https://public-kohl-six.vercel.app/",
    code: "https://github.com/karimmohdrafi/public",
  },
  {
    number: "02",
    title: "Dashboard",
    description:
      "An interactive data dashboard that displays active users, request throughput, error rates, and real-time traffic through dynamic charts and animated visualizations.",
    image: `${import.meta.env.BASE_URL}project_2.png`,
    alt: "Dashboard application preview",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "dashboard",
    accent: "#38bdf8",
    demo: "https://karimmohdrafi.github.io/Dashboard/",
    code: "https://github.com/karimmohdrafi/Dashboard.git",
  },
  {
    number: "03",
    title: "Food Application",
    description:
      "A modern food application that lets users explore delicious meals, browse food options, and enjoy a smooth, user-friendly ordering experience.",
    image: `${import.meta.env.BASE_URL}project_3.png`,
    alt: "Food Application preview",
    tags: ["React", "JavaScript", "Router"],
    type: "tasks",
    accent: "#34d399",
    demo: "https://karimmohdrafi.github.io/manogna/",
    code: "https://karimmohdrafi.github.io/",
  },
  {
    number: "04",
    title: "Chess Game",
    description:
      "A sleek chess application featuring an interactive chessboard, legal move validation, and a smooth, user-friendly gameplay experience.",
    image: `${import.meta.env.BASE_URL}project_4.png`,
    alt: "Chess game preview",
    tags: ["React", "Router", "JavaScript"],
    type: "default",
    accent: "#f59e0b",
    demo: "https://karimmohdrafi.github.io/chess-game/",
    code: "https://github.com/karimmohdrafi/chess-game.git",
  },
  {
    number: "05",
    title: "Real-Time JARVIS",
    description:
      "A real-time AI voice assistant inspired by JARVIS, designed to provide interactive voice-based assistance through a modern user interface.",
    image: `${import.meta.env.BASE_URL}project_5.png`,
    alt: "Jarvis preview",
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    type: "default",
    accent: "#60a5fa",
    demo: "https://karimmohdrafi.github.io/real-time-jarvis/",
    code: "https://github.com/karimmohdrafi/real-time-jarvis.git",
  },
  {
    number: "06",
    title: "Weather Application",
    description:
      "A responsive Weather Application that provides real-time weather updates, temperature, humidity, wind speed, and current weather conditions for different locations.",
    image: `${import.meta.env.BASE_URL}project_6.png`,
    alt: "Weather application preview",
    tags: ["HMTL/CSS", "API", "JavaScript"],
    type: "default",
    accent: "#fb7185",
    demo: "https://weather-iota-lake.vercel.app/",
    code: "https://github.com/karimmohdrafi/weather.git",
  },
];


/* ---------- SECTION HEADING ---------- */
function SectionHeading({ eyebrow, title, highlight }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>
        {title} <span>{highlight}</span>
      </h2>
    </div>
  );
}


/* ---------- PROJECT CARD ---------- */
function ProjectCard({ project }) {
  const projectType = project.type || "default";

  return (
    <article
      className="project-card project-card-premium"
      style={{ "--project-accent": project.accent || "var(--accent)" }}
    >
      {/* Animated border + laptop preview */}
      <div className="project-visual">
        <div className="project-visual-top">
          <span className="project-label">
            PROJECT {project.number}
          </span>

          <span className="project-status">
            <span className="status-dot" />
            FEATURED
          </span>
        </div>

        <div className="laptop">
          <div className="laptop-screen">
            <div className="mock-browser-bar">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-address">
                {project.title.toLowerCase().replace(/\s+/g, "-")}.app
              </div>

              <span className="browser-menu">•••</span>
            </div>


            <div className={`mock-app mock-app-${projectType} project-image-preview`}>
              <img
                src={project.image}
                alt={project.alt || project.title}
                className="laptop-project-image"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

          </div>

          <div className="laptop-hinge" />
          <div className="laptop-base">
            <span />
          </div>
        </div>

        <div className="project-glow" />
      </div>

      {/* Project details */}
      <div className="project-card-content">
        <div className="project-topline">
          <span className="project-number">{project.number}</span>
          <span className="project-arrow">↗</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-demo-link"
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo <span>↗</span>
          </a>

          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Icon icon="simple-icons:github" aria-hidden="true" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}


/* ---------- CODE TYPING SHOWCASE ---------- */
const codeSnippets = [
  {
    language: "Python",
    tone: "#B9A5FF",
    lines: [
      { text: "# Hello, world!", color: "#858B98" },
      { text: "\nname", color: "#83C9FF" },
      { text: " = ", color: "#E1E4ED" },
      { text: '"Mohammad Rafi"', color: "#A8D9A0" },
      { text: "\nrole", color: "#83C9FF" },
      { text: " = ", color: "#E1E4ED" },
      { text: '"Associate Software Engineer"', color: "#A8D9A0" },
      { text: "\nskills", color: "#83C9FF" },
      { text: " = [", color: "#E1E4ED" },
      {
        text: '"Python", "Java", "JavaScript"',
        color: "#A8D9A0",
      },
      { text: "]\n\n", color: "#E1E4ED" },
      { text: "print", color: "#D8B4FE" },
      { text: "(name)", color: "#E1E4ED" },
    ],
  },

  {
    language: "Java",
    tone: "#FFBD83",
    lines: [
      { text: "class ", color: "#C4B5FD" },
      { text: "Rafi", color: "#83C9FF" },
      { text: " {\n  public static void ", color: "#C4B5FD" },
      { text: "main", color: "#FDE68A" },
      {
        text: "(String[] args) {\n    String name = ",
        color: "#E1E4ED",
      },
      { text: '"Mohammad Rafi"', color: "#A8D9A0" },
      {
        text: ";\n    System.out.println(name);\n  }\n}",
        color: "#E1E4ED",
      },
    ],
  },

  {
    language: "JavaScript",
    tone: "#F4D77A",
    lines: [
      { text: "const ", color: "#C4B5FD" },
      { text: "developer", color: "#83C9FF" },
      { text: " = {\n  name: ", color: "#E1E4ED" },
      { text: '"Mohammad Rafi"', color: "#A8D9A0" },
      { text: ",\n  role: ", color: "#E1E4ED" },
      { text: '"Software Engineer"', color: "#A8D9A0" },
      { text: ",\n  mindset: ", color: "#E1E4ED" },
      { text: '"Keep learning"', color: "#A8D9A0" },
      { text: "\n};\n\n", color: "#E1E4ED" },
      { text: "console", color: "#83C9FF" },
      { text: ".log(developer.name);", color: "#E1E4ED" },
    ],
  },

  {
    language: "HTML / CSS",
    tone: "#FF9B83",
    lines: [
      { text: '<h1 class="developer">', color: "#FF9B83" },
      { text: "Mohammad Rafi", color: "#A8D9A0" },
      { text: "</h1>\n<p>", color: "#FF9B83" },
      {
        text: "Developer · Learner · Creator",
        color: "#A8D9A0",
      },
      { text: "</p>\n\n", color: "#FF9B83" },
      { text: ".developer ", color: "#83C9FF" },
      { text: "{ color: ", color: "#E1E4ED" },
      { text: "lavender", color: "#A8D9A0" },
      { text: "; }", color: "#E1E4ED" },
    ],
  },

  // React
  {
    language: "React",
    tone: "#61DAFB",
    lines: [
      { text: "import ", color: "#C4B5FD" },
      { text: "React ", color: "#83C9FF" },
      { text: "from ", color: "#C4B5FD" },
      { text: '"react";\n\n', color: "#A8D9A0" },
      { text: "function ", color: "#C4B5FD" },
      { text: "Developer", color: "#FDE68A" },
      { text: "() {\n  return (\n    ", color: "#E1E4ED" },
      { text: "<h1>", color: "#FF9B83" },
      { text: "Mohammad Rafi", color: "#A8D9A0" },
      { text: "</h1>", color: "#FF9B83" },
      { text: "\n  );\n}\n\n", color: "#E1E4ED" },
      { text: "export default ", color: "#C4B5FD" },
      { text: "Developer;", color: "#83C9FF" },
    ],
  },

  // MongoDB
  {
    language: "MongoDB",
    tone: "#47A248",
    lines: [
      { text: "// MongoDB document", color: "#858B98" },
      { text: "\ndb.", color: "#83C9FF" },
      { text: "developers", color: "#FDE68A" },
      { text: ".insertOne({\n  ", color: "#E1E4ED" },
      { text: 'name: "Mohammad Rafi"', color: "#A8D9A0" },
      { text: ",\n  ", color: "#E1E4ED" },
      { text: 'role: "Software Engineer"', color: "#A8D9A0" },
      { text: ",\n  ", color: "#E1E4ED" },
      { text: 'learning: true', color: "#F4D77A" },
      { text: "\n});", color: "#E1E4ED" },
    ],
  },

  // MySQL
  {
    language: "MySQL",
    tone: "#4479A1",
    lines: [
      { text: "-- Developer database", color: "#858B98" },
      { text: "\nSELECT ", color: "#C4B5FD" },
      { text: "name, role\n", color: "#83C9FF" },
      { text: "FROM ", color: "#C4B5FD" },
      { text: "developers\n", color: "#83C9FF" },
      { text: "WHERE ", color: "#C4B5FD" },
      { text: "name = ", color: "#E1E4ED" },
      { text: "'Mohammad Rafi'", color: "#A8D9A0" },
      { text: ";\n\n", color: "#E1E4ED" },
      { text: "-- Keep learning!", color: "#858B98" },
    ],
  },

  // Figma Design
  {
    language: "Figma Design",
    tone: "#F24E1E",
    lines: [
      { text: "// UI Design Preview", color: "#858B98" },
      { text: "\nconst ", color: "#C4B5FD" },
      { text: "design", color: "#83C9FF" },
      { text: " = {\n  ", color: "#E1E4ED" },
      { text: 'tool: "Figma"', color: "#A8D9A0" },
      { text: ",\n  ", color: "#E1E4ED" },
      { text: 'project: "Portfolio UI"', color: "#A8D9A0" },
      { text: ",\n  ", color: "#E1E4ED" },
      { text: 'style: "Modern"', color: "#A8D9A0" },
      { text: ",\n  ", color: "#E1E4ED" },
      { text: 'layout: "Responsive"', color: "#A8D9A0" },
      { text: "\n};\n\n", color: "#E1E4ED" },
      { text: "design", color: "#83C9FF" },
      { text: ".project;", color: "#E1E4ED" },
    ],
  },
];

function CodingShowcase() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const snippet = codeSnippets[snippetIndex];
  const fullCode = snippet.lines.map((line) => line.text).join("");

  useEffect(() => {
    let timer;

    if (!isDeleting && visibleCharacters < fullCode.length) {
      timer = setTimeout(() => {
        setVisibleCharacters((count) => count + 1);
      }, 34);
    } else if (!isDeleting && visibleCharacters === fullCode.length) {
      timer = setTimeout(() => setIsDeleting(true), 1900);
    } else if (isDeleting && visibleCharacters > 0) {
      timer = setTimeout(() => {
        setVisibleCharacters((count) => count - 1);
      }, 12);
    } else {
      timer = setTimeout(() => {
        setSnippetIndex((index) => (index + 1) % codeSnippets.length);
        setIsDeleting(false);
      }, 280);
    }

    return () => clearTimeout(timer);
  }, [visibleCharacters, isDeleting, fullCode]);

  let characterPosition = 0;

  const visibleLines = snippet.lines.map((line, lineIndex) => {
    const start = characterPosition;
    characterPosition += line.text.length;

    const shownText = line.text.slice(
      0,
      Math.max(0, Math.min(line.text.length, visibleCharacters - start))
    );

    return shownText ? (
      <span
        key={`${snippet.language}-${lineIndex}`}
        style={{ color: line.color }}
      >
        {shownText}
      </span>
    ) : null;
  });

  const shownCode = fullCode.slice(0, visibleCharacters);
  const lineNumbers = Array.from(
    { length: Math.max(1, shownCode.split("\n").length) },
    (_, index) => index + 1
  );

  return (
    <div className="coding-showcase">
      <div className="code-window-bar">
        <div className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>

        <span className="code-filename">rafi.dev</span>

        <span className="code-language" style={{ color: snippet.tone }}>
          {snippet.language}
        </span>
      </div>

      <div className="code-editor">
        <div className="code-gutter" aria-hidden="true">
          {lineNumbers.map((number) => (
            <span key={number}>{number}</span>
          ))}
        </div>

        <pre className="typing-code">
          {visibleLines}
          <span className="code-typing-cursor" aria-hidden="true" />
        </pre>
      </div>

      <div className="code-status">
        <span>
          <i />
          Ready to build
        </span>
        <span>MOHAMMAD RAFI</span>
      </div>
    </div>
  );
}

/* ---------- MAIN APP ---------- */
export default function App() {
  const [theme] = useState(
    () => themes[Math.floor(Math.random() * themes.length)]
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Apply accent colors */
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--accent-bright", theme.bright);
    root.style.setProperty("--accent-blue", theme.blue);
  }, [theme]);

  /* Navbar scroll effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Hero role typing animation */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const delay = deleting ? 45 : 90;
    let timer;

    if (!deleting && typedRole === currentRole) {
      timer = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && typedRole === "") {
      timer = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      }, 350);
    } else {
      timer = setTimeout(() => {
        setTypedRole(
          deleting
            ? currentRole.slice(0, typedRole.length - 1)
            : currentRole.slice(0, typedRole.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [typedRole, deleting, roleIndex]);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            MR<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a className="nav-cta" href="#contact">
              Let's Talk <span>↗</span>
            </a>

            <a
              className="resume-button"
              href="/resume.pdf"
              download="Mohammad-Rafi-Resume.pdf"
            >
              <Icon icon="mdi:download" aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HOME: ORIGINAL PHOTO AND ROTATING SKILLS RESTORED */}
        <section className="hero-section container" id="home">
          <div className="hero-copy">
            <span className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </span>

            <p className="hero-intro">Hello, I'm</p>

            <h1 className="hero-name-heading">
              I'm <span className="hero-name">Mohammad Rafi.</span>
            </h1>

            <h2 className="hero-role">
              I'm a <span>{typedRole}</span>
              <span className="typing-cursor">|</span>
            </h2>

            <p className="hero-description">
              I build modern, responsive, and engaging digital experiences
              with clean code and thoughtful design.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <span>FIND ME ON</span>

              <a
                href="https://github.com/karimmohdrafi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Icon icon="simple-icons:github" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohdrafi0701"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon icon="simple-icons:linkedin" />
              </a>
            </div>
          </div>



          {/* HERO PHOTO - NEW CIRCULAR ORBIT DESIGN */}
          <div className="rafi-hero-visual">
            <div className="rafi-hero-stage">

              {/* Decorative orbit rings */}
              <div className="rafi-ring rafi-ring-one" />
              <div className="rafi-ring rafi-ring-two" />
              <div className="rafi-ring rafi-ring-three" />

              {/* Rotating technology badges */}
              <div className="rafi-tech-orbit">
                {orbitSkills.map(({ name, icon, color }, index) => (
                  <div
                    className={`rafi-tech-badge rafi-tech-badge-${index}`}
                    key={name}
                    title={name}
                    style={{ "--rafi-tech-color": color }}
                  >
                    <Icon icon={icon} aria-hidden="true" />
                    <small>{name}</small>
                  </div>
                ))}
              </div>

              {/* Circular portrait */}
              <div className="rafi-portrait-shell">
                <div className="rafi-portrait-aura" />

                <div className="rafi-portrait-inner">

                  <img
                    className="rafi-portrait-photo"
                    src={`${import.meta.env.BASE_URL}profile_1.jpeg`}
                    alt="Mohammad Rafi"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";

                      const placeholder =
                        event.currentTarget.nextElementSibling;

                      if (placeholder) {
                        placeholder.style.display = "flex";
                      }
                    }}
                  />


                  <div className="rafi-portrait-fallback">
                    <span>R</span>
                    <small>Add your photo</small>
                    <small>public/profile_1.jpeg</small>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </section>

        {/* HIGHLIGHTS */}
        <section className="stats-strip container" aria-label="Highlights">
          <div className="stat-item">
            <strong>15+</strong>
            <span>Technologies</span>
          </div>

          <div className="stat-item">
            <strong>10+</strong>
            <span>Project Showcases</span>
          </div>

          <div className="stat-item">
            <strong>100%</strong>
            <span>Passion for Learning</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section container about-section" id="about">
          <SectionHeading
            eyebrow="THE PERSON BEHIND THE CODE"
            title="More Than"
            highlight="Just Code."
          />

          <div className="about-modern">
            {/* CODING BOX IS HERE INSTEAD OF THE MR INITIALS BOX */}
            <div className="about-visual about-code-visual">
              <CodingShowcase />
            </div>

            <div className="about-content">
              <span className="about-kicker">
                <span className="availability-dot" />
                HELLO, NICE TO MEET YOU
              </span>

              <h3>
                I'm Mohammad Rafi,
                <span> a developer who loves making ideas real.</span>
              </h3>

              <p>
                I'm an Associate Software Engineer interested in building
                useful applications and thoughtful digital experiences. I
                enjoy exploring new technologies, solving problems, and
                creating interfaces that feel simple and intuitive.
              </p>

              <p>
                From frontend development to programming with Python and Java,
                I'm always looking for ways to learn, improve, and turn ideas
                into working projects.
              </p>

              <div className="about-focus">
                <div>
                  <Icon icon="solar:code-square-linear" />
                  <span>Clean Code</span>
                </div>

                <div>
                  <Icon icon="solar:palette-round-linear" />
                  <span>Creative UI</span>
                </div>

                <div>
                  <Icon icon="solar:rocket-linear" />
                  <span>Continuous Growth</span>
                </div>
              </div>

              <a className="text-link" href="#skills">
                Explore my toolkit <span>→</span>
              </a>
            </div>
          </div>
        </section>


        {/* EDUCATION */}
        <section className="section container" id="education">
          <SectionHeading
            eyebrow="MY BACKGROUND"
            title="Education &"
            highlight="Learning"
          />

          <div className="timeline">
            {/* UNIVERSITY EDUCATION */}
            <div className="timeline-item">
              <span className="timeline-dot" />

              <div className="timeline-card education-responsive-card">
                <div className="edu-responsive-logo">
                  <img
                    src={`${import.meta.env.BASE_URL}vignan.jpeg`}
                    alt="Vignan University"
                  />
                </div>

                <div className="edu-responsive-details">
                  <span className="edu-responsive-label">EDUCATION</span>

                  <h3 className="edu-responsive-title">
                    Vignan's Foundation for Science, Technology &amp; Research
                  </h3>

                  <p className="edu-responsive-type">
                    (Deemed to be University)
                  </p>

                  <p className="edu-responsive-degree">
                    B.Tech, Chemical Engineering
                  </p>

                  <div className="edu-responsive-info">
                    <div className="edu-responsive-info-item">
                      <span className="edu-responsive-icon">▣</span>
                      <span>2019 - 2023</span>
                    </div>

                    <div className="edu-responsive-info-item">
                      <span className="edu-responsive-icon">⌖</span>
                      <span>Guntur, Andhra Pradesh</span>
                    </div>
                  </div>
                </div>

                <div className="edu-responsive-grade">
                  <span className="edu-responsive-grade-label">GRADE</span>
                  <div className="edu-responsive-grade-value">A</div>
                </div>
              </div>
            </div>

            {/* CONTINUOUS LEARNING */}
            <div className="timeline-item">
              <span className="timeline-dot" />

              <div className="timeline-card">
                <span className="timeline-label">CONTINUOUS LEARNING</span>

                <h3>Learning Through Projects</h3>

                <p>
                  Building practical projects and improving programming and
                  software development skills.
                </p>

                <span className="timeline-date">Ongoing</span>
              </div>
            </div>
          </div>
        </section>


        {/* SKILLS */}
        <section className="section container" id="skills">
          <SectionHeading
            eyebrow="TOOLS I WORK WITH"
            title="My Technical"
            highlight="Toolkit"
          />

          <p className="section-description">
            The technologies and tools I use to design, develop, and build
            digital experiences.
          </p>

          <div className="tech-grid">
            {technologies.map(({ name, icon, color }) => (
              <article className="tech-card" key={name}>
                <span className="tech-logo" style={{ "--tech-color": color }}>
                  <Icon icon={icon} aria-hidden="true" />
                </span>

                <span className="tech-name">{name}</span>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section container" id="projects">
          <SectionHeading
            eyebrow="SOME THINGS I'VE BUILT"
            title="Featured"
            highlight="Projects"
          />

          <p className="section-description">
            A closer look at my work, the ideas behind it, and the technologies
            used to bring it to life.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>



        {/* CONTACT */}
        <section className="section container" id="contact">
          <div className="contact-panel">
            <span className="section-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's create something <span>great.</span>
            </h2>

            <p>
              Interested in working together or discussing an idea? Feel free
              to reach out.
            </p>

            <a
              className="button button-primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdrafi0701%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say Hello <span>↗</span>
            </a>

            {/* EMAIL BOX WITH COPY BUTTON */}
            <div className="contact-email-box">
              <Icon
                icon="solar:letter-linear"
                className="email-icon"
              />

              <span className="contact-email-text">
                mohdrafi0701@gmail.com
              </span>

              <button
                type="button"
                className="contact-copy-btn"
                title="Copy email address"
                aria-label="Copy email address"
                onClick={async (event) => {
                  const email = "mohdrafi0701@gmail.com";
                  const button = event.currentTarget;

                  try {
                    await navigator.clipboard.writeText(email);
                  } catch {
                    const textarea = document.createElement("textarea");
                    textarea.value = email;
                    textarea.style.position = "fixed";
                    textarea.style.opacity = "0";
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    textarea.remove();
                  }

                  button.dataset.copied = "true";
                  button.setAttribute("title", "Copied!");

                  window.setTimeout(() => {
                    button.dataset.copied = "false";
                    button.setAttribute("title", "Copy email address");
                  }, 1800);
                }}
              >
                <Icon
                  icon="solar:copy-linear"
                  width="21"
                  height="21"
                />
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="social-links-box">
              <a
                href="https://github.com/karimmohdrafi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Icon icon="simple-icons:github" width="26" height="26" />
                <span>GitHub</span>
                <span className="social-arrow">↗</span>
              </a>

              <span className="social-divider" />

              <a
                href="https://www.linkedin.com/in/mohdrafi0701/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Icon icon="simple-icons:linkedin" width="26" height="26" />
                <span>LinkedIn</span>
                <span className="social-arrow">↗</span>
              </a>

              <a
                href="https://leetcode.com/u/mohdrafiksg/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LeetCode Profile"
                title="LeetCode"
              >
                <Icon icon="simple-icons:leetcode" width="26" height="26" />
                <span>LeetCode</span>
                <span className="social-arrow">↗</span>
              </a>
            </div>


          </div>
        </section>

      </main>



      {/* MR OUTLINE MONOGRAM */}
      <div className="mr-outline-logo" aria-label="MR monogram">
        <svg
          viewBox="0 0 180 130"
          className="mr-outline-svg"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* M outline */}
          <path
            className="mr-outline-path mr-m-path"
            d="M25 112 V18 L70 68 L115 18 V112"
          />

          {/* R outline, interlocked with M */}
          <path
            className="mr-outline-path mr-r-path"
            d="M65 112 V18 H105
         C132 18 140 35 140 49
         C140 64 128 78 105 78
         H65 M105 78 L145 112"
          />
        </svg>
      </div>
      {/* FOOTER */}

      {/* FOOTER */}

      {/* COMPACT FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <a href="#home" className="logo footer-brand">
            MR<span>.</span>
          </a>

          <p className="footer-copyright">
            © {new Date().getFullYear()} Mohammad Rafi. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <span>↑</span>
          </a>
        </div>
      </footer>


    </div>
  );
}
