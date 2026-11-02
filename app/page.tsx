"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Download,
  Code2,
  BriefcaseBusiness,
  Menu,
  X,
  Mail,
  MapPin,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import { profile } from "@/data/profile";
import { generateCVPdf } from "@/lib/generate-cv-pdf";

const nav = [
  ["about", "About"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];
const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="Bagus Tri Prasetyo home">
            <span>b</span>Bagus<span className="brand-dot">.</span>
          </a>
          <div className="desktop-nav">
            {nav.map(([id, label]) => (
              <a key={id} href={"#" + id}>
                {label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-nav">
            {nav.map(([id, label]) => (
              <a key={id} href={"#" + id} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          {/* <motion.p
            className="eyebrow"
            initial="hidden"
            animate="show"
            variants={reveal}
          >
            <span className="status-dot" /> Available for select projects
          </motion.p> */}
          <motion.h1 initial="hidden" animate="show" variants={reveal}>
            Work <em>Hard,</em>
            <br />
            Think <em>Smart,</em>
            <br />
            Own the <em>Outcome.</em>
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial="hidden"
            animate="show"
            variants={reveal}
          >
            {profile.summary}
          </motion.p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View my work <ArrowUpRight size={16} />
            </a>
            <button
              className="button secondary"
              type="button"
              onClick={() => generateCVPdf(profile)}
            >
              <Download size={16} /> Export to PDF
            </button>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={14} /> {profile.location}
            </span>
            <span>
              <span className="meta-line" /> {new Date().getFullYear() - 2022}+
              years experience
            </span>
          </div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="portrait-frame">
            <Image
              src="https://bagustri3.github.io/profile/profile-portrait.png"
              alt="Portrait of Bagus Tri Prasetyo"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 440px"
            />
          </div>
          <div className="portrait-note">
            Currently crafting digital
            <br />
            <strong>
              experiences at <u>My Room</u>
            </strong>
          </div>
          <div className="scribble">✳</div>
        </motion.div>
      </section>

      <section id="about" className="section container split-section">
        <div className="section-label">
          01 <span>About me</span>
        </div>
        <motion.div
          className="section-content"
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          variants={reveal}
        >
          <h2>
            A little bit <em>about</em> me.
          </h2>
          <p className="large-copy">{profile.about}</p>
          <div className="strengths">
            {profile.strengths.map((s, i) => (
              <span key={s}>
                <i>0{i + 1}</i>
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="experience" className="section section-tint">
        <div className="container split-section">
          <div className="section-label">
            02 <span>Experience</span>
          </div>
          <div className="section-content">
            <h2>
              Where I&apos;ve <em>been.</em>
            </h2>
            <div className="timeline">
              {profile.experience.map((item, i) => (
                <motion.article
                  className="timeline-item"
                  key={item.company}
                  whileInView="show"
                  initial="hidden"
                  viewport={{ once: true }}
                  variants={reveal}
                >
                  <div className="timeline-marker">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="timeline-top">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>
                    <div className="tag-row">
                      {item.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section container split-section">
        <div className="section-label">
          03 <span>Education</span>
        </div>
        <div className="section-content">
          <h2>
            Always a <em>student.</em>
          </h2>
          <div className="education-list">
            {profile.education.map((e) => (
              <div className="education-item" key={e.degree}>
                <CalendarDays size={18} />
                <div>
                  <span>{e.year}</span>
                  <h3>{e.degree}</h3>
                  <p>
                    {e.school} · {e.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="container split-section">
          <div className="section-label light">
            04 <span>Expertise</span>
          </div>
          <div className="section-content">
            <h2>
              What I bring <em>to the table.</em>
            </h2>
            <div className="skills-grid">
              {Object.entries(profile.skills).map(([key, values]) => (
                <div className="skill-group" key={key}>
                  <h3>{key}</h3>
                  {values.map((v) => (
                    <span key={v}>{v}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section container projects-section">
        <div className="section-heading">
          <div>
            <div className="section-label">
              05 <span>Selected work</span>
            </div>
            <h2>
              Things I&apos;ve <em>made.</em>
            </h2>
          </div>
        </div>
        <div className="project-grid">
          {profile.projects.map((project, i) => (
            <motion.article
              className={"project-card " + project.color}
              key={project.name}
              whileHover={{ y: -6 }}
            >
              <div className="project-art">
                <span>{project.number}</span>
                <div className="art-shape shape-one" />
                <div className="art-shape shape-two" />
                <ArrowUpRight className="project-arrow" />
              </div>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {/* <a href="#contact" aria-label={"Ask about " + project.name}>
                  <ExternalLink size={16} />
                </a> */}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-label light">
              06 <span>Contact</span>
            </div>
            <h2>
              Let&apos;s make something <em>meaningful.</em>
            </h2>
            <p>
              Have a project in mind or just want to say hello? My inbox is
              always open.
            </p>
            <a className="contact-email" href={"mailto:" + profile.email}>
              {profile.email} <ArrowUpRight size={18} />
            </a>
          </div>
          {/* <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="sent-message">
                <Check size={30} />
                <h3>Thanks for reaching out.</h3>
                <p>I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <>
                <label>
                  Name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Message
                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="Tell me a little about your project..."
                  />
                </label>
                <button className="button light-button" type="submit">
                  Send message <ArrowUpRight size={16} />
                </button>
              </>
            )}
          </form> */}
        </div>
      </section>
      <footer className="footer container">
        <a className="brand" href="#top">
          <span>b</span>Bagus<span className="brand-dot">.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Bagus Tri Prasetyo. Made with intention.
        </p>
        <div className="socials">
          <a href={profile.social.linkedin} aria-label="LinkedIn">
            <BriefcaseBusiness size={17} />
          </a>
          <a href={profile.social.github} aria-label="GitHub">
            <Code2 size={17} />
          </a>
          <a href={"mailto:" + profile.email} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </footer>
    </main>
  );
}
