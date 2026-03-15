import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaGraduationCap, FaCode, FaBriefcase, FaProjectDiagram, FaCertificate, FaAddressCard } from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "internship", label: "Internship", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaProjectDiagram },
  { id: "certificates", label: "Certificates", icon: FaCertificate },
  { id: "contact", label: "Contact", icon: FaAddressCard },
];

const StatusDot = () => (
  <span className="flex items-center gap-1.5 text-xs text-teal font-mono">
    <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse inline-block"></span>
    Open to Work
  </span>
);

// ─── PHOTO CONFIG ───────────────────────────────────────────────────
// 1. Put your photo in:  public/assets/profile/profile.jpg
// 2. Rename it to:       profile.jpg
// That's it — shows automatically! Falls back to "PG" if not found.
const PHOTO_PATH = "/assets/profile/profile.jpg";
// ────────────────────────────────────────────────────────────────────

function ProfileAvatar() {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-teal p-0.5">
      <div className="w-full h-full rounded-full bg-navy-light flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={PHOTO_PATH}
            alt="Priya G"
            className="w-full h-full object-cover rounded-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="font-display font-bold text-2xl text-white select-none">PG</span>
        )}
      </div>
    </div>
  );
}

export default function Sidebar({ activeSection, scrollToSection, isOpen }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-navy-light border-r border-white/5 z-40
        flex flex-col py-8 px-4 overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="relative mb-4">
          <ProfileAvatar />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-teal rounded-full border-2 border-navy-light flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>
        <h2 className="font-display font-bold text-white text-lg leading-tight mb-1">Priya G</h2>
        <p className="text-slate-400 text-xs mb-2 font-mono">EEE Student</p>
        <StatusDot />
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

      <div className="flex justify-center gap-4 mb-6">
        {[
          { href: "https://github.com/priyagowda11-jpg/", icon: FaGithub, title: "GitHub", hoverClass: "hover:text-accent hover:border-accent/50 hover:bg-accent/10" },
          { href: "https://www.linkedin.com/in/priya-g-07422429a/", icon: FaLinkedin, title: "LinkedIn", hoverClass: "hover:text-accent hover:border-accent/50 hover:bg-accent/10" },
          { href: "mailto:priyag11032005@gmail.com", icon: FaEnvelope, title: "Email", hoverClass: "hover:text-teal hover:border-teal/50 hover:bg-teal/10" },
        ].map(({ href, icon: Icon, title, hoverClass }) => (
          <a key={title} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
            className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200 ${hoverClass}`}
            title={title}>
            <Icon size={15} />
          </a>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

      <nav className="flex flex-col gap-1 flex-1">
        <p className="text-xs text-slate-600 font-mono uppercase tracking-widest px-4 mb-2">Navigation</p>
        {navItems.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => scrollToSection(id)}
            className={`sidebar-link group ${activeSection === id ? "active" : ""}`}>
            <Icon size={14} className={`transition-colors ${activeSection === id ? "text-accent" : "text-slate-500 group-hover:text-slate-300"}`} />
            <span>{label}</span>
            {activeSection === id && <span className="ml-auto w-1.5 h-1.5 bg-accent rounded-full"></span>}
          </button>
        ))}
      </nav>

      <div className="mt-6 pt-4 border-t border-white/5">
        <p className="text-xs text-slate-600 text-center font-mono">© 2024 Priya G</p>
        <p className="text-xs text-slate-700 text-center font-mono mt-0.5">Built with React & ❤️</p>
      </div>
    </aside>
  );
}
