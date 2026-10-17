import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Users, Sparkles } from "lucide-react";
import "./styles.css";
import heroYoga from "./assets/hero-yoga.png";

const steps = [
  ["01", "Take part in the recruitment drive", "Watch for the official SYC recruitment call and register during the drive."],
  ["02", "Show us how you think", "Be ready to talk about your interests, skills, ideas, and the team you would like to join."],
  ["03", "Meet the people behind SYC", "The goal is to understand your fit, willingness to contribute, and how you can grow with the club."],
  ["04", "Join the community", "Selected members can get connected with the team, WhatsApp group, and club updates."],
];

const prepared = [
  "Know your first-choice department and why it interests you.",
  "Bring a few examples of work if you already create, write, design, code, edit, organize, or communicate.",
  "Don't worry if you are a beginner — curiosity and willingness to learn matter.",
  "Be ready to explain one idea you would love to execute in college.",
];


function SafeImage({ src, fallback, alt, className = "", ...props }) {
  const [source, setSource] = useState(src);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    setSource(src);
    setUsedFallback(false);
  }, [src]);

  const handleError = () => {
    if (!usedFallback && fallback && source !== fallback) {
      setUsedFallback(true);
      setSource(fallback);
    }
  };

  return <img src={source} alt={alt} className={className} onError={handleError} {...props} />;
}

function RecruitmentPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell recruitment-page">
      <header className="recruit-nav">
        <a href="/" className="back-link"><ArrowLeft size={17} /> SYC Home</a>
        <span>Sanjeevani & Yoga Club · Recruitment</span>
      </header>

      <section className="recruit-hero">
        <SafeImage
          src="https://www.abesit.in/wp-content/uploads/2024/06/abesit-international-yoga-day-2024-07.jpg"
          fallback={heroYoga}
          alt="Campus yoga session"
        />
        <div className="recruit-overlay" />
        <div className="recruit-hero-content reveal">
          <p className="section-label light">Recruitment</p>
          <h1>How do you<br /><em>want to contribute?</em></h1>
          <p>
            There is no single kind of SYC member. We need people who can
            create, communicate, organise, write, build, and show up.
          </p>
        </div>
      </section>

      <section className="section recruitment-intro">
        <div className="procedure-head reveal">
          <div>
            <p className="section-label">The Procedure</p>
            <h2>Four steps.<br />One new beginning.</h2>
          </div>
          <p>
            The official SYC page says students join through the recruitment
            drive; students who miss the drive can reach out to the General
            Secretary or Joint Secretary, then join the club's communication
            channels.
          </p>
        </div>

        <div className="procedure-grid">
          {steps.map(([number, title, text], index) => (
            <article className="procedure-card reveal" key={number}>
              <div className="procedure-number">
                <span>{number}</span>
                {index < steps.length - 1 && <div />}
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section prepare-section">
        <div className="prepare-image reveal">
          <SafeImage
            src="https://www.abesit.in/wp-content/uploads/2024/06/abesit-international-yoga-day-2024-07.jpg"
            fallback={heroYoga}
            alt="Students practicing yoga on a campus lawn"
          />
          <div className="prepare-badge">
            <Sparkles size={17} />
            <span>Mind · Body · Community</span>
          </div>
        </div>

        <div className="prepare-copy reveal">
          <p className="section-label">Before You Apply</p>
          <h2>What should you bring?</h2>
          <div className="check-list">
            {prepared.map((item) => (
              <div key={item}>
                <CheckCircle2 size={19} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section apply-section">
        <div className="apply-card reveal">
          <div className="apply-copy">
            <p className="section-label">Your turn</p>
            <h2>Ready to start?</h2>
            <p>
              Register your interest below. This demo form confirms the
              frontend interaction; connect it to your official recruitment
              form or backend before deployment.
            </p>
            <a href="/" className="text-link"><ArrowLeft size={16} /> Back to departments</a>
          </div>

          <form
            className="apply-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
              window.location.href = `${import.meta.env.BASE_URL}thank-you.html`;
            }}
          >
            <label>
              Name
              <input required placeholder="Your name" />
            </label>
            <label>
              College email
              <input required type="email" placeholder="you@college.edu" />
            </label>
            <label>
              Department
              <select defaultValue="Tech & Design">
                <option>Tech & Design</option>
                <option>Social Media</option>
                <option>PR & Outreach</option>
                <option>Events & Management</option>
                <option>Content & Editorial</option>
              </select>
            </label>

            <button className="button primary" type="submit">
              {submitted ? "Interest registered ✓" : "Register Interest"}
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <strong>Sanjeevani & Yoga Club</strong>
            <span>Recruitment · Student community</span>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="/">SYC Home</a>
            <a href="/#departments">Departments</a>
            <a href="/#why">Why Join</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sanjeevani & Yoga Club</span>
          <span>Student community / recruitment</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecruitmentPage />
  </React.StrictMode>
);
