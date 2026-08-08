import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const FEATURES = [
  {
    icon: "📄",
    title: "Professional Templates",
    description: "Choose from modern, creative, and professional resume designs.",
  },
  {
    icon: "⚡",
    title: "ATS Optimized",
    description: "Designed to pass Applicant Tracking Systems used by real recruiters.",
  },
  {
    icon: "📥",
    title: "One Click Download",
    description: "Download your resume instantly in PDF format, ready to send.",
  },
  {
    icon: "🎨",
    title: "Easy Customization",
    description: "Change sections, skills, and content effortlessly as you build.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Your personal information stays protected behind your account.",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="hero-eyebrow">2026's Top Resume Templates</span>
            <h1 className="hero-title">
              Build a Resume That <span>Gets You Hired</span>
            </h1>
            <p className="hero-subtitle">
              Create stunning, ATS-optimized resumes with customizable templates and
              one-click PDF downloads — completely free.
            </p>
            <div className="hero-actions">
              <Link to="/login">
                <button className="btn-accent">Build Your Resume</button>
              </Link>
              <Link to="/about">
                <button className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
                  Learn More
                </button>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>3+</strong>
                <span>Templates</span>
              </div>
              <div className="hero-stat">
                <strong>ATS</strong>
                <span>Friendly</span>
              </div>
              <div className="hero-stat">
                <strong>PDF</strong>
                <span>Export</span>
              </div>
              <div className="hero-stat">
                <strong>Free</strong>
                <span>No hidden cost</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="hero-visual-bar accent" style={{ height: 14, width: "70%", marginBottom: 10 }} />
              <div className="hero-visual-bar short" />
              <div className="hero-visual-bar" />
              <div className="hero-visual-bar" style={{ width: "80%" }} />
              <div className="hero-visual-bar" style={{ width: "50%", marginTop: 14 }} />
              <div className="hero-visual-bar" />
              <div className="hero-visual-bar" style={{ width: "65%" }} />
            </div>
            <div className="hero-visual-card-floating">
              <div className="hero-visual-bar accent" style={{ width: "80%" }} />
              <div className="hero-visual-bar" />
              <div className="hero-visual-bar" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-heading">
          <h2>Why Choose ResumePro?</h2>
          <p>Everything you need to go from blank page to interview-ready resume.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready to build your resume?</h2>
        <p>It takes less than five minutes to get started.</p>
        <Link to="/login">
          <button className="btn-accent">Get Started Free</button>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default Home;
