import { useEffect, useRef } from "react";
import { FaLightbulb, FaMicrochip, FaHeartbeat, FaShieldAlt } from "react-icons/fa";

const interests = [
  { icon: FaHeartbeat, label: "Smart Real World Innovation", color: "text-rose-400" },
  { icon: FaLightbulb, label: "AI-Powered Systems", color: "text-accent" },
  { icon: FaMicrochip, label: "Embedded Technologies", color: "text-teal" },
  { icon: FaShieldAlt, label: "Secure Systems Design", color: "text-purple-400" },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section id="about" className="py-24 px-8 lg:px-16 border-t border-white/5">
      <div ref={sectionRef} className="section-animate max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// 01. about</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Text */}
          <div>
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              I am an{" "}
              <span className="text-white font-semibold">
                Electrical and Electronics Engineering undergraduate
              </span>{" "}
              passionate about developing intelligent real-world systems by combining{" "}
              <span className="text-accent font-semibold">Artificial Intelligence</span>,{" "}
              <span className="text-teal font-semibold">IoT</span>, and{" "}
              <span className="text-accent font-semibold">Embedded Technologies</span>.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              My interests include smart RealWorld innovation, AI-powered systems, and secure embedded technologies. I thrive at the intersection of hardware and software — turning ideas into working prototypes that solve real problems.
            </p>

            <div className="bg-navy-card border border-white/5 rounded-xl p-4 font-mono text-sm">
              <p className="text-slate-500 mb-1">// current status</p>
              <p>
                <span className="text-accent">const</span>{" "}
                <span className="text-white">priya</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-teal">{"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-slate-400">role</span>:{" "}
                <span className="text-orange-300">"EEE Student + Dev"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">learning</span>:{" "}
                <span className="text-orange-300">"ML & IoT Systems"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">openTo</span>:{" "}
                <span className="text-orange-300">"Internships & Projects"</span>
              </p>
              <p>
                <span className="text-teal">{"}"}</span>
              </p>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-mono text-slate-400">
              Areas of Interest
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {interests.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="card flex items-center gap-4 hover:scale-[1.01] transition-transform"
                >
                  <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${color} flex-shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
