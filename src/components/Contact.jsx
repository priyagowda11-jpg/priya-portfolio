import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const EMAILJS_SERVICE_ID  = "service_fn2tnzk";
const EMAILJS_TEMPLATE_ID = "template_vlfm4qh";
const EMAILJS_PUBLIC_KEY  = "3YdlH-G6Hxy1e3zXv";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "priyag11032005@gmail.com",
    href: "mailto:priyag11032005@gmail.com",
    color: "text-accent",
    border: "border-accent/20",
    hover: "hover:border-accent/50 hover:bg-accent/5",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "priya-g-07422429a",
    href: "https://www.linkedin.com/in/priya-g-07422429a/",
    color: "text-blue-400",
    border: "border-blue-400/20",
    hover: "hover:border-blue-400/50 hover:bg-blue-400/5",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "priyagowda11-jpg",
    href: "https://github.com/priyagowda11-jpg/",
    color: "text-slate-300",
    border: "border-slate-500/20",
    hover: "hover:border-slate-400/50 hover:bg-white/5",
  },
];

const INIT_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState(INIT_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData(INIT_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Failed to send. Please email me directly at priyag11032005@gmail.com");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-200 font-body caret-accent";

  return (
    <section id="contact" className="py-24 px-8 lg:px-16 border-t border-white/5">
      <div ref={sectionRef} className="section-animate max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// 07. contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              I'm always open to new opportunities, collaborations, and conversations about AI, IoT, and engineering. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              {contactLinks.map(({ icon: Icon, label, value, href, color, border, hover }) => (
                <a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border ${border} ${hover} transition-all duration-200 group`}>
                  <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${color} flex-shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono">{label}</p>
                    <p className={`text-sm font-medium ${color} group-hover:underline`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="card">
            <h3 className="text-white font-display font-bold text-lg mb-6">Send a Message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center">
                  <FaCheckCircle size={24} className="text-teal" />
                </div>
                <p className="text-white font-semibold">Message Sent! 🎉</p>
                <p className="text-slate-400 text-sm text-center">
                  Thanks for reaching out, I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-500 text-xs font-mono mb-1 block">Name *</label>
                    <input type="text" name="from_name" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="text-slate-500 text-xs font-mono mb-1 block">Email *</label>
                    <input type="email" name="from_email" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="text-slate-500 text-xs font-mono mb-1 block">Subject *</label>
                  <input type="text" name="subject" value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?" required className={inputClass} />
                </div>

                <div>
                  <label className="text-slate-500 text-xs font-mono mb-1 block">Message *</label>
                  <textarea name="message" value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..." required rows={4}
                    className={`${inputClass} resize-none`} />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <FaExclamationTriangle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-red-400 text-xs">{errorMsg}</p>
                  </div>
                )}

                <button type="submit" disabled={status === "sending"}
                  className="btn-primary w-full justify-center shadow-lg shadow-accent/20 hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] transition-all duration-200">
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={13} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-slate-700 text-xs text-center font-mono">
                  Powered by EmailJS
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm font-mono">
            Designed & built by <span className="text-accent font-semibold">Priya G</span>
            {" "}· EEE @ Rajarajeswari College of Engineering
          </p>
          <p className="text-slate-700 text-xs font-mono mt-1">React · Tailwind CSS · Vite · 2024</p>
        </div>
      </div>
    </section>
  );
}