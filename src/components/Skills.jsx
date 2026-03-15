import { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "Python", level: 88 },
  { name: "Machine Learning", level: 78 },
  { name: "Artificial Intelligence", level: 75 },
  { name: "IoT & ESP32", level: 82 },
  { name: "Embedded Systems", level: 80 },
  { name: "Arduino", level: 78 },
  { name: "Flask", level: 72 },
  { name: "Data Structures", level: 75 },
  { name: "React", level: 65 },
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 68 },
  { name: "Git & GitHub", level: 80 },
];

const softSkills = [
  { name: "Problem Solving", level: 92 },
  { name: "Analytical Thinking", level: 88 },
  { name: "Technical Research", level: 85 },
  { name: "Project Development", level: 82 },
];

const allTechTags = [
  "Python", "Flask", "Scikit-learn", "Pandas", "TensorFlow",
  "ESP32", "Arduino", "MQTT", "SQLite", "React",
  "HTML", "CSS", "JavaScript", "Git", "GitHub",
];

function SkillBar({ name, level, animated }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-accent font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-teal transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            setAnimated(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section id="skills" className="py-24 px-8 lg:px-16 border-t border-white/5">
      <div ref={sectionRef} className="section-animate max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// 03. skills</p>
          <h2 className="section-title">Skills</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Technical */}
          <div className="card">
            <h3 className="text-white font-display font-bold text-base mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Technical Skills
            </h3>
            {technicalSkills.map((s) => (
              <SkillBar key={s.name} {...s} animated={animated} />
            ))}
          </div>

          {/* Soft skills */}
          <div>
            <div className="card mb-6">
              <h3 className="text-white font-display font-bold text-base mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal rounded-full"></span>
                Soft Skills
              </h3>
              {softSkills.map((s) => (
                <SkillBar key={s.name} {...s} animated={animated} />
              ))}
            </div>

            {/* Tech tags cloud */}
            <div className="card">
              <h3 className="text-white font-display font-bold text-sm mb-4 font-mono text-slate-400">
                // Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTechTags.map((tag) => (
                  <span
                    key={tag}
                    className="tag hover:bg-accent/20 cursor-default transition-colors text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
