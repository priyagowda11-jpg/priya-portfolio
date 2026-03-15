import { useEffect, useRef } from "react";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from "react-icons/fa";

const achievements = [
  "Built a fully functional website from scratch",
  "Developed a feature-rich Instagram Clone",
  "Strengthened backend development and AI integration skills",
  "Used Git & GitHub for version control and collaboration",
];

export default function Internship() {
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
    <section id="internship" className="py-24 px-8 lg:px-16 border-t border-white/5">
      <div ref={sectionRef} className="section-animate max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// 04. experience</p>
          <h2 className="section-title">Internship</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full" />
        </div>

        <div className="card border-accent/20 bg-accent/3 hover:border-accent/40 transition-all duration-300">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-teal flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
                <FaBriefcase size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-xl">
                  Full Stack Web Development Intern
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <FaBuilding size={12} className="text-accent" />
                  <span className="text-accent font-semibold text-sm">Pantech AI</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="bg-teal/15 text-teal text-xs px-3 py-1 rounded-full font-mono border border-teal/30">
                Completed
              </span>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono">
                <FaCalendarAlt size={10} />
                <span>3 Months</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 mb-6" />

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Completed a{" "}
            <span className="text-accent font-semibold">3-month intensive</span> Full Stack Web
            Development Internship at{" "}
            <span className="text-white font-semibold">Pantech AI</span>, working on responsive web
            applications, backend integration with{" "}
            <span className="text-teal font-semibold">Python and Flask</span>, and collaborative
            project development.
          </p>

          {/* Tech used */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "Flask", "HTML/CSS", "JavaScript", "Git", "GitHub", "React"].map((tech) => (
              <span key={tech} className="tag text-xs">{tech}</span>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-4">
              Key Achievements
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/3 rounded-lg p-3 border border-white/5">
                  <FaCheckCircle size={14} className="text-teal mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
