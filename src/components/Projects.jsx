import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaRobot, FaLock, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "AI Fraud Detection System",
    description:
      "An intelligent fraud detection system powered by machine learning algorithms. Analyzes transaction patterns to identify anomalies and flag suspicious activities in real-time.",
    techs: ["Python", "Pandas", "Scikit-learn", "Flask"],
    github: "https://github.com/priyagowda11-jpg/ai-fraud-detection",
    icon: FaRobot,
    gradient: "from-accent to-blue-500",
    glowColor: "rgba(59,130,246,0.25)",
    borderColor: "rgba(59,130,246,0.2)",
    accentColor: "#3B82F6",
    featured: true,
  },
  {
    number: "02",
    title: "Secure Voting System Prototype",
    description:
      "Hardware-software integrated secure voting prototype using ESP32 with QR code verification. Ensures voter authentication and tamper-proof data storage with Flask & SQLite.",
    techs: ["ESP32", "Python", "Flask", "SQLite", "QR Verification"],
    github: null,
    icon: FaShieldAlt,
    gradient: "from-teal to-emerald-500",
    glowColor: "rgba(20,184,166,0.25)",
    borderColor: "rgba(20,184,166,0.2)",
    accentColor: "#14B8A6",
    featured: true,
    confidential: true,
  },
];

// ── 3D Tilt + shimmer card ──────────────────────────────────────────
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const shimmerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const shimmer = shimmerRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // 3D rotation
    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    card.style.boxShadow = `0 25px 50px ${project.glowColor}, 0 0 0 1px ${project.borderColor}`;

    // Shimmer follows cursor
    if (shimmer) {
      shimmer.style.background = `radial-gradient(200px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const shimmer = shimmerRef.current;
    if (card) {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.boxShadow = `0 4px 20px transparent, 0 0 0 1px ${project.borderColor}`;
    }
    if (shimmer) shimmer.style.background = "none";
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col rounded-xl overflow-hidden cursor-default"
      style={{
        background: "#162032",
        border: `1px solid ${project.borderColor}`,
        transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
        willChange: "transform",
        padding: "1.5rem",
      }}
    >
      {/* Shimmer layer */}
      <div
        ref={shimmerRef}
        className="absolute inset-0 pointer-events-none rounded-xl z-10"
        style={{ transition: "background 0.05s" }}
      />

      {/* Animated top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: isHovered
            ? `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`
            : "transparent",
          transition: "background 0.3s ease",
        }}
      />

      {/* Card content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
            style={{ boxShadow: isHovered ? `0 8px 24px ${project.glowColor}` : "none", transition: "box-shadow 0.3s" }}
          >
            <Icon size={18} className="text-white" />
          </div>
          <span className="font-mono text-slate-700 text-xs">{project.number}</span>
        </div>

        <h3 className="text-white font-display font-bold text-lg mb-2">{project.title}</h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full font-mono border"
              style={{
                background: `${project.accentColor}12`,
                color: project.accentColor,
                borderColor: `${project.accentColor}30`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors font-mono group"
            >
              <FaGithub size={14} />
              <span className="group-hover:underline">View Code</span>
              <FaExternalLinkAlt size={10} />
            </a>
          ) : (
            <div className="flex items-center gap-2 text-slate-600 text-xs font-mono">
              <FaLock size={11} />
              <span>Code Restricted</span>
            </div>
          )}
          {project.confidential && (
            <span className="text-xs text-amber-500/70 font-mono bg-amber-500/5 border border-amber-500/20 px-2 py-1 rounded-full">
              Confidential
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section id="projects" className="py-24 px-8 lg:px-16 border-t border-white/5">
      <div ref={sectionRef} className="section-animate max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// 05. projects</p>
          <h2 className="section-title">Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        {/* Note */}
        <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 flex items-start gap-3">
          <FaInfoCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
          <p className="text-slate-400 text-sm">
            <span className="text-teal font-semibold">Note:</span> Additional confidential projects are available upon request. Please reach out via the contact section for more details.
          </p>
        </div>
      </div>
    </section>
  );
}
