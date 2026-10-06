import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Camera,
  Code2,
  Leaf,
  Megaphone,
  PenLine,
  Sparkles,
  Users,
} from "lucide-react";
import "./styles.css";
import heroYoga from "./assets/hero-yoga.png";

const balanceCards = [
  {
    title: "Sanjeevani — something that brings you back to life",
    eyebrow: "",
    text: "A space to pause, breathe, reflect, and reconnect with yourself.",
    image:"https://images.wallpapersden.com/image/download/northern-lights-aurora-borealis_am1qbWuUmZqaraWkpJRobWllrWdma2U.jpg",
    fallback: heroYoga,
    
  },
  {
    title: "Self-discovering",
    eyebrow: "",
    text: "Through yoga and mindful movement, explore balance, flexibility, meditation, and a healthier relationship with your body.",
    image:"https://www.abesit.in/wp-content/uploads/2024/06/abesit-international-yoga-day-2024-07.jpg",
    fallback: heroYoga,
    
  },
];

const departments = [
  {
    number: "01",
    title: "Tech & Design",
    description:
      "Build the digital side of SYC — websites, graphics, posters, visual systems, video edits, and creative digital experiences.",
    skills: ["Graphic Design", "Video Editing", "Web Development"],
    icon: Code2,
    image: "https://ftzdigital.com/assets/our-website-work-BlPGsu2b.webp",
    fallback: "https://aicertswpcdn.blob.core.windows.net/newsportal/2025/12/students-engaged-with-ai-feedback.jpg",
  },
  {
    number: "02",
    title: "Social Media",
    description:
      "Make people stop scrolling. Create reels and posts, plan content, manage Instagram, and turn club activities into stories.",
    skills: ["Content Creation", "Instagram", "Promotion"],
    icon: Camera,
    image: "https://buffer.com/resources/content/images/2025/05/Unlockable-reels.png",
    fallback: "https://cdn.sanity.io/images/ipmr32ib/production/69d3dd6793083956384a27e2bb485d0c2af05ee0-1500x785.jpg",
  },
  {
    number: "03",
    title: "PR & Outreach",
    description:
      "Connect SYC with students, collaborators, speakers, and campus communities through communication, publicity, and partnerships.",
    skills: ["Communication", "Collaboration", "Publicity"],
    icon: Megaphone,
    image: "https://research.com/resized/uploads/59c03c87_38270_f16bf7f1f5.webp?format=large",
    fallback: "https://journalism.uoregon.edu/sites/default/files/styles/custom_xl/public/2023-11/prstudents-pitch_web.jpg?itok=ukOJNS9l",
  },
  {
    number: "04",
    title: "Events & Management",
    description:
      "Plan the experience from first idea to final execution — schedules, logistics, coordination, registrations, and on-ground operations.",
    skills: ["Planning", "Coordination", "Execution"],
    icon: Users,
    image:
      "https://www.happiffie.com/hp-images/corporate-event-timeline-planning-guide/vendor-coordination-meeting-for-corporate-event-planning-blog-3.jpg",
    fallback: "https://morefreedom.ca/images/projects/campus-club-meeting.jpg",
  },
  {
    number: "05",
    title: "Content & Editorial",
    description:
      "Give SYC a voice through captions, articles, scripts, event copy, announcements, and creative writing.",
    skills: ["Writing", "Captions", "Creative Content"],
    icon: PenLine,
    image:
      "https://image.idntimes.com/post/20260204/job-desk-content-writer-sulit-dipatok_1601cb0a-a149-4754-9d22-ad88ac71db83.jpeg",
    fallback: "https://www.syracuse.edu/images/0t58nieBfkyQi8qZS25oHZpvdY8%3D/5013/width-800/ANR_2024BakedMagazine_00101.jpg",
  },
];

const whatWeDo = [
  ["Yoga & Meditation", "Regular practices built around focus, relaxation, flexibility, and mind-body balance."],
  ["Wellness Workshops", "Sessions around relaxation techniques, traditional health ideas, inner peace, and personal growth."],
  ["Campus Events", "Yoga Day celebrations, quizzes, awareness sessions, talks, and collaborative programmes."],
  ["Community", "A student space for self-discovery, supportive conversations, and healthier everyday habits."],
];

const reasons = [
  "Personal Growth – Improve focus, confidence, and emotional well-being in a supportive community.",
  "Connect with students from diverse backgrounds, exchange fresh perspectives.",
  "Grow confidence, communication, leadership, and ownership — not just a certificate.",
  "Be part of a community that takes mental and physical well-being seriously.",
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

function App() {
  const [activeDepartment, setActiveDepartment] = useState(0);

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

  const active = departments[activeDepartment];
  const ActiveIcon = active.icon;

  return (
    <div className="site-shell">
      <main>
        <section className="hero" id="home">
          <img src={heroYoga} className="hero-image" alt="Yoga practice by the sea" />
          <div className="hero-overlay" />
          <div className="hero-grain" />

          <div className="hero-content reveal">
            <p className="hero-kicker">SYC · College Club Recruitment</p>
            <h1>
              Find your place.
              <br />
              Make your <em>mark.</em>
            </h1>
            <p className="hero-subtitle">
              A student community built around yoga, wellness, creativity,
              meaningful work, and people who want to make college life better.
            </p>

            <div className="hero-actions">
              <a href="#departments" className="button primary">
                Explore the teams <ArrowRight size={18} />
              </a>
              <a href="/recruitment.html" className="button glass">
                How recruitment works
              </a>
            </div>
          </div>

          <div className="hero-edge">
            <span>COLLEGE CLUB / SYC</span>
            <span>Mind · Body · Community</span>
          </div>

          <a className="hero-scroll" href="#intro" aria-label="Scroll to introduction">
            <ArrowDownRight size={19} />
          </a>
        </section>

        <section className="section intro-section" id="intro">
          <div className="intro-heading reveal">
            <div>
              <p className="section-label">Introduction to SYC</p>
              <h2>Wellness first.<br />College life, fully lived.</h2>
            </div>
            <p>
              SYC is a college community that brings yoga, mindfulness,
              well-being, events, and student-led creative work into one place.
              The goal is simple: help students grow without losing their
              balance.
            </p>
          </div>

          <div className="balance-grid">
            {balanceCards.map((card, index) => (
              <article className="balance-card reveal" key={card.title}>
                <SafeImage src={card.image} fallback={card.fallback || heroYoga} alt={card.title} />
                <div className="balance-shade" />
                <div className="balance-copy">
                  <span className="balance-index">0{index + 1} / {index === 0 ? "MIND" : "BODY"}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>

       </section>

        <section className="section do-section" id="what-we-do">
          <div className="do-grid">
            <div className="do-visual reveal">
              <div className="do-photo-main">
                <SafeImage
                  src="https://www.abesit.in/wp-content/uploads/2024/06/abesit-international-yoga-day-2024-07.jpg"
                  fallback={heroYoga}
                  alt="Yoga Day session at ABES Institute of Technology"
                />
                <div className="photo-caption">
                  <span>Campus yoga / official ABESIT event image</span>
                  <a
                    href="https://www.abesit.in/events/abes-institute-of-technology-celebrates-international-yoga-day-with-zest-and-mindfulness/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source
                  </a>
                </div>
              </div>
              <div className="do-float-card">
                <Sparkles size={18} />
                <span>Beyond the classroom</span>
              </div>
            </div>

            <div className="do-copy reveal">
              <div className="section-rail">
                <span>02</span>
                <span>WHAT WE DO</span>
              </div>
              <p className="section-label">What We Do</p>
              <h2>It's not just about sitting on a mat.</h2>
              <p className="lead">
                Official SYC material describes a focus on yoga, meditation,
                spiritual knowledge, mind-body balance, mental wellness,
                workshops, and community-oriented initiatives.
              </p>

              <div className="do-list">
                {whatWeDo.map(([title, text], index) => (
                  <div className="do-row" key={title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section department-section" id="departments">
          <div className="department-heading reveal">
            <div>
              <p className="section-label">Departments</p>
              <h2>Choose the place<br />where you can make your mark.</h2>
            </div>
            <p>Five teams. Different skills. One SYC.</p>
          </div>

          <div className="department-stage reveal">
            <div className="department-list">
              <div className="department-list-head">
                <span>FIND YOUR PLACE</span>
                <small>Click a team to explore</small>
              </div>
              {departments.map((dept, index) => {
                const Icon = dept.icon;
                const selected = activeDepartment === index;
                return (
                  <button
                    type="button"
                    key={dept.title}
                    className={selected ? "department-row active" : "department-row"}
                    onClick={() => setActiveDepartment(index)}
                    aria-pressed={selected}
                  >
                    <span className="dept-number">{dept.number}</span>
                    <Icon size={20} />
                    <span>{dept.title}</span>
                    <ArrowRight size={16} />
                  </button>
                );
              })}
            </div>

            <div className="department-detail">
              <div className="department-image-layer" key={`image-${activeDepartment}`}>
                <SafeImage
                  className="department-detail-image"
                  src={active.image}
                  fallback={active.fallback || heroYoga}
                  alt={active.title}
                />
                <div className="department-detail-overlay" />
              </div>

              <div className="department-content-layer" key={`content-${activeDepartment}`}>
                <div className="detail-top">
                  <span>{active.number} / DEPARTMENT</span>
                  <span className="detail-icon"><ActiveIcon size={23} /></span>
                </div>

                <div className="detail-word" aria-hidden="true">SYC</div>
              <div className="detail-bottom">
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                  <div className="skill-row">
                    {active.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                  <a href="/recruitment.html" className="detail-link">
                    See recruitment process <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="section why-inner">
            <div className="why-title reveal">
              <div className="why-stamp">WHY JOIN / SYC</div>
              <p className="section-label">Why Join SYC?</p>
              <h2>Bring your skills.<br />Leave with more.</h2>
              <p>
                Joining a student club should give you something real to take
                forward — friends, confidence, experience, and work you can
                actually point to.
              </p>
            </div>

            <div className="why-list reveal">
              {reasons.map((reason, index) => (
                <div className="why-row" key={reason}>
                  <span>0{index + 1}</span>
                  <div>
                    <p>{reason}</p>
                    <small>{index === 0 ? 'Projects' : index === 1 ? 'People' : index === 2 ? 'Growth' : 'Balance'}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="spread-note reveal">
          <span>YOU DON’T HAVE TO FIT INTO ONE BOX.</span>
          <strong>Bring one skill. Bring one idea. Bring yourself.</strong>
        </div>

        <section className="section final-cta reveal">
          <SafeImage
            className="cta-photo"
            src="https://www.abesit.in/wp-content/uploads/2024/06/abesit-international-yoga-day-2024-07.jpg"
            fallback={heroYoga}
            alt="Students practicing yoga"
          />
          <div className="cta-photo-overlay" />
          <div className="cta-content">
            <p className="section-label">Ready?</p>
            <h2>Find your team.<br />Start your SYC story.</h2>
            <p>See what recruitment looks like, what to prepare, and what happens after you apply.</p>
            <a className="button primary" href="/recruitment.html">
              How recruitment works <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <strong>Sanjeevani & Yoga Club</strong>
            <span>A college community for mind, body & meaningful contribution.</span>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#intro">About</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#departments">Departments</a>
            <a href="#why">Why Join</a>
            <a href="/recruitment.html">Recruitment</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sanjeevani & Yoga Club</span>
          <span>Mind · Body · Community</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
