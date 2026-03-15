import { useEffect, useRef, useState } from "react";
import { FaCertificate, FaCode, FaBrain, FaFlask, FaTrophy, FaSearch, FaTools, FaTimes, FaExpand } from "react-icons/fa";

// ─── HOW TO ADD YOUR CERTIFICATE IMAGES ─────────────────────────────
// 1. Put your certificate images in:  public/assets/certificates/
// 2. Name them like:  pantech.jpg, nptel.jpg, devtown.jpg  etc.
// 3. Update the "image" field below with the correct filename
// Example: image: "/assets/certificates/pantech.jpg"
// If no image yet, leave it as null — card still works fine
// ────────────────────────────────────────────────────────────────────

const certificates = [
  {
    title: "Pantech Full Stack Internship",
    issuer: "Pantech AI",
    type: "Professional",
    icon: FaCode,
    gradient: "from-accent to-blue-500",
    color: "text-accent",
    border: "border-accent/20",
    image: "/assets/certificates/pantech_fullstack.jpg",  // ← add your image here
  },
  {
    title: "Website Building Mastery Internship",
    issuer: "Pantech AI",
    type: "Professional",
    icon: FaTools,
    gradient: "from-accent to-indigo-500",
    color: "text-indigo-400",
    border: "border-indigo-400/20",
    image: "/assets/certificates/website_mastery.jpg",
  },
  {
    title: "NPTEL AI & ML in Material Engineering",
    issuer: "NPTEL / IIT",
    type: "Academic",
    icon: FaBrain,
    gradient: "from-teal to-cyan-500",
    color: "text-teal",
    border: "border-teal/20",
    image: "/assets/certificates/nptel.jpg",
  },
  {
    title: "DevTown Python & AI",
    issuer: "DevTown",
    type: "Online",
    icon: FaFlask,
    gradient: "from-yellow-500 to-orange-500",
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    image: "/assets/certificates/devtown_python.jpg",
  },
  {
    title: "DevTown Instagram Clone",
    issuer: "DevTown",
    type: "Online",
    icon: FaCode,
    gradient: "from-pink-500 to-rose-500",
    color: "text-pink-400",
    border: "border-pink-400/20",
    image: "/assets/certificates/devtown_instagram.jpg",
  },
  {
    title: "Project Expo Participation",
    issuer: "College",
    type: "Achievement",
    icon: FaTrophy,
    gradient: "from-emerald-400 to-teal-500",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    image: "/assets/certificates/project_expo.jpg",
  },
  {
    title: "Hackathon Participation",
    issuer: "TechEvent",
    type: "Achievement",
    icon: FaTrophy,
    gradient: "from-orange-400 to-red-500",
    color: "text-orange-400",
    border: "border-orange-400/20",
    image: "/assets/certificates/hackathon.jpg",
  },
  {
    title: "BE10x AI Tool Workshop",
    issuer: "BE10x",
    type: "Workshop",
    icon: FaBrain,
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-400",
    border: "border-purple-400/20",
    image: "/assets/certificates/be10x.jpg",
  },
  {
    title: "Research Paper Publication",
    issuer: "Academic Journal",
    type: "Research",
    icon: FaSearch,
    gradient: "from-teal to-blue-500",
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    image: "/assets/certificates/research_paper.jpg",
  },
];

const typeColors = {
  Professional: "bg-accent/10 text-accent",
  Academic: "bg-teal/10 text-teal",
  Online: "bg-yellow-400/10 text-yellow-400",
  Achievement: "bg-orange-400/10 text-orange-400",
  Workshop: "bg-purple-400/10 text-purple-400",
  Research: "bg-cyan-400/10 text-cyan-400",
};

// ── Modal popup to show certificate image ──────────────────────────
function CertModal({ cert, onClose }) {
  const [imgErr, setImgErr] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-navy-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div>
            <h3 className="text-white font-semibold text-base">{cert.title}</h3>
            <p className="text-slate-500 text-xs font-mono mt-0.5">{cert.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <FaTimes size={13} />
          </button>
        </div>

        {/* Certificate image */}
        <div className="p-6">
          {!imgErr && cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full rounded-xl object-contain max-h-[65vh]"
              onError={() => setImgErr(true)}
            />
          ) : (
            // Placeholder when image not yet added
            <div className="w-full h-64 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3">
              <FaExpand size={28} className="text-slate-700" />
              <p className="text-slate-600 text-sm font-mono text-center px-4">
                Certificate image not found.<br />
                Add it to: <span className="text-accent">public/assets/certificates/</span>
              </p>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-6 pb-4 text-center">
          <p className="text-slate-700 text-xs font-mono">Press ESC or click outside to close</p>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

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
    <>
      <section id="certificates" className="py-24 px-8 lg:px-16 border-t border-white/5">
        <div ref={sectionRef} className="section-animate max-w-4xl mx-auto">
          <div className="mb-4">
            <p className="text-accent font-mono text-sm mb-2">// 06. certifications</p>
            <h2 className="section-title">Certifications</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full" />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FaCertificate className="text-accent" size={14} />
              <span className="font-mono">{certificates.length} Certificates Earned</span>
            </div>
            <span className="text-slate-600 text-xs font-mono">— click any card to view certificate</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <button
                  key={i}
                  onClick={() => setSelectedCert(cert)}
                  className={`cert-card card border ${cert.border} hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-left group relative`}
                >
                  {/* Click hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExpand size={11} className="text-slate-600" />
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className={`cert-icon w-10 h-10 rounded-lg bg-gradient-to-br ${cert.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${typeColors[cert.type]}`}>
                        {cert.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-mono">{cert.issuer}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </>
  );
}
