import { Icon } from "@iconify/react";
import "./Hero.css";

const techItems = [
  { name: "GitHub", icon: "simple-icons:github", color: "#ffffff" },
  { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#68A063" },
  { name: "HTML5", icon: "simple-icons:html5", color: "#E34F26" },
  { name: "CSS3", icon: "simple-icons:css3", color: "#1572B6" },
  { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
  { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
  { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
  { name: "Java", icon: "simple-icons:openjdk", color: "#ED8B00" },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="hero-eyebrow">
          <span className="status-dot" />
          OPEN FOR OPPORTUNITIES
        </span>

        <h1>
          I'm <span>Mohammad Rafi.</span>
        </h1>

        <h2>Associate Software Engineer</h2>

        <p>
          I build modern, responsive, and engaging digital experiences
          with clean code and thoughtful design.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-primary">
            View My Work <span>↗</span>
          </a>
          <a href="#contact" className="hero-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="tech-orbit orbit-one" />
        <div className="tech-orbit orbit-two" />

        <div className="portrait-frame">
          <div className="portrait-inner">
            <img src="/images/rafi.png" alt="Mohammad Rafi" />
          </div>
          <div className="frame-highlight" />
        </div>

        {techItems.map((tech, index) => (
          <div
            className={`tech-badge tech-badge-${index + 1}`}
            key={tech.name}
            title={tech.name}
          >
            <Icon icon={tech.icon} style={{ color: tech.color }} />
            <span>{tech.name}</span>
          </div>
        ))}

        <div className="orbit-glow glow-one" />
        <div className="orbit-glow glow-two" />
        <div className="orbit-glow glow-three" />
      </div>
    </section>
  );
}