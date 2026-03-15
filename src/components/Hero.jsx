import { useState, useEffect, useRef, useCallback } from "react";
import { FaDownload, FaArrowRight, FaMapMarkerAlt, FaBolt } from "react-icons/fa";

const TYPING_TEXTS = [
  "EEE Student",
  "AI & IoT Systems Developer",
  "Python Developer",
  "Building Smart Real World Solutions",
];

const RESUME_PATH = "/assets/resume/Priya_G_Resume.pdf";
const PHOTO_PATH  = "/assets/profile/profile.jpg";

// ── Typing hook ────────────────────────────────────────────────────
function useTypingEffect(texts) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const cur = texts[idx];
    let t;
    if (paused) {
      t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
    } else if (!deleting && display.length < cur.length) {
      t = setTimeout(() => setDisplay(cur.slice(0, display.length + 1)), 80);
    } else if (!deleting && display.length === cur.length) {
      setPaused(true);
    } else if (deleting && display.length > 0) {
      t = setTimeout(() => setDisplay(cur.slice(0, display.length - 1)), 45);
    } else {
      setDeleting(false);
      setIdx(p => (p + 1) % texts.length);
    }
    return () => clearTimeout(t);
  }, [display, deleting, paused, idx, texts]);

  return display;
}

// ── Global mouse spotlight ─────────────────────────────────────────
function MouseFollower() {
  const ref = useRef(null);
  const pos = useRef({ x: -999, y: -999 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove, { passive: true });
    const animate = () => {
      if (ref.current)
        ref.current.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`;
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(20,184,166,0.03) 40%, transparent 70%)",
        transition: "transform 0.1s ease-out", willChange: "transform",
      }}
    />
  );
}

export default function Hero({ scrollToSection }) {
  const typedText = useTypingEffect(TYPING_TEXTS);
  const [imgError, setImgError] = useState(false);

  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 55,       // only left half — don't cover photo
    y: Math.random() * 100,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <MouseFollower />

      {/*
        LAYOUT — matches Image 1 (Alex Smith reference):
        ┌──────────────────────┬──────────────────────────────┐
        │   TEXT content        │   FULL-HEIGHT PHOTO          │
        │   (left ~50%)         │   (right ~50%, abs pos)      │
        └──────────────────────┴──────────────────────────────┘
        The photo is position:absolute, right-0, top-0, h-full
        A gradient on the left edge of the photo fades into the bg
        so text stays readable.
      */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        {/* ── Grid background (only on left side) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to right, black 0%, black 40%, transparent 65%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 40%, transparent 65%)",
          }}
        />

        {/* ── Particles (left side only) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-accent/30"
              style={{
                width: p.size, height: p.size,
                left: `${p.x}%`, top: `${p.y}%`,
                animation: `heroFloat ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* ── FULL-HEIGHT PHOTO — right side, absolute ── */}
        <div
          className="absolute top-0 right-0 h-full hidden lg:block"
          style={{ width: "50%" }}
        >
          {/* Left-edge gradient fade so text on left stays readable */}
          <div
            className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0F172A 0%, rgba(15,23,42,0.85) 40%, transparent 100%)",
            }}
          />
          {/* Bottom gradient fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #0F172A 0%, transparent 100%)",
            }}
          />

          {/* The actual photo */}
          {!imgError ? (
            <img
              src={PHOTO_PATH}
              alt="Priya G"
              className="w-full h-full object-cover object-center"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback when no photo added yet */
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(59,130,246,0.12), rgba(20,184,166,0.07), #0F172A)",
              }}
            >
              <span
                className="font-display font-extrabold select-none"
                style={{ fontSize: "18rem", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}
              >
                PG
              </span>
              <p className="text-slate-700 text-xs font-mono mt-4">
                Add photo → public/assets/profile/profile.jpg
              </p>
            </div>
          )}
        </div>

        {/* ── TEXT CONTENT — left side ── */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="w-full lg:w-1/2 px-8 lg:px-14 py-28">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8 text-xs font-mono text-accent">
              <FaBolt size={10} />
              <span>Available for opportunities</span>
            </div>

            {/* Name */}
            <h1
              className="font-display font-extrabold text-white mb-3 leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Priya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal">
                G
              </span>
            </h1>

            {/* Typing line */}
            <div className="h-10 flex items-center mb-6">
              <span className="font-mono text-lg md:text-xl text-slate-300">
                {typedText}
                <span className="typing-cursor text-accent" />
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 max-w-md">
              EEE undergraduate combining{" "}
              <span className="text-accent font-semibold">Artificial Intelligence</span>,{" "}
              <span className="text-teal font-semibold">IoT</span>, and{" "}
              <span className="text-accent font-semibold">Embedded Systems</span>{" "}
              to build intelligent real-world solutions.
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-10 font-mono">
              <FaMapMarkerAlt size={11} />
              India · Rajarajeswari College of Engineering
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href={RESUME_PATH}
                download="Priya_G_Resume.pdf"
                className="btn-primary shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-105 transition-all duration-200"
              >
                <FaDownload size={13} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-outline hover:scale-105 transition-all duration-200"
              >
                View Projects
                <FaArrowRight size={12} />
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { num: "2",    label: "Projects" },
                { num: "9+",   label: "Certifications" },
                { num: "3 Mo", label: "Internship" },
                { num: "2027", label: "Graduation" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display font-bold text-2xl text-white">{num}</div>
                  <div className="text-slate-500 text-xs font-mono mt-0.5">{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 z-20">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent animate-pulse" />
        </div>

        <style>{`
          @keyframes heroFloat {
            0%, 100% { transform: translateY(0); opacity: 0.3; }
            50%       { transform: translateY(-20px); opacity: 0.7; }
          }
        `}</style>
      </section>
    </>
  );
}
