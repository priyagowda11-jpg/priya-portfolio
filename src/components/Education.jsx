import { useEffect, useRef } from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const educationData = [
  {
    degree: "BE – Electrical & Electronics Engineering",
    institution: "Rajarajeswari College of Engineering",
    period: "2023 – Expected 2027",
    status: "Ongoing",
    details: "Combining core EEE with AI, IoT, and Embedded Systems projects",
    color: "from-accent to-blue-400",
    accentColor: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/5",
  },
  {
    degree: "PU – PCMB",
    institution: "Aditya PU College",
    period: "2021 – 2023",
    status: "Completed",
    details: "Physics, Chemistry, Mathematics, Biology",
    color: "from-teal to-emerald-400",
    accentColor: "text-teal",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/5",
  },
  {
    degree: "10th – State Board",
    institution: "St Anne's Primary & Higher School",
    period: "2020 – 2021",
    status: "Completed",
    details: "State Board Curriculum — Strong academic foundation",
    color: "from-purple-400 to-pink-400",
    accentColor: "text-purple-400",
    borderColor: "border-purple-400/30",
    bgColor: "bg-purple-400/5",
  },
];

export default function Education() {
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
    <section id="education" className="py-24 px-8 lg:px-16 border-t border-white/5">
      <div ref={sectionRef} className="section-animate max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// 02. education</p>
          <h2 className="section-title">Education</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-teal to-purple-400 opacity-30" />

          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative pl-14"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-5 w-10 h-10 rounded-full bg-gradient-to-br ${edu.color} p-0.5 flex items-center justify-center shadow-lg`}>
                  <div className="w-full h-full rounded-full bg-navy-light flex items-center justify-center">
                    <FaGraduationCap size={14} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className={`card border ${edu.borderColor} ${edu.bgColor} hover:scale-[1.01] transition-all duration-200`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-display font-bold text-lg leading-tight">
                        {edu.degree}
                      </h3>
                      <p className={`${edu.accentColor} font-semibold text-sm mt-0.5`}>
                        {edu.institution}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-mono ${edu.status === "Ongoing" ? "bg-teal/15 text-teal border border-teal/30" : "bg-slate-800 text-slate-400 border border-slate-700"}`}>
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-mono mb-3">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt size={10} />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
