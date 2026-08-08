import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="static-page">
        <span className="static-page-eyebrow">Contact</span>
        <h1>Have a question or feedback?</h1>
        <p>
          Whether you found a bug, have an idea for a new template, or just want to say hi —
          I'd love to hear from you. Drop a message and I'll get back to you as soon as I can.
        </p>

        <div className="contact-card">
          <span className="contact-card-icon">✉️</span>
          <div>
            <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Email us at
            </div>
            <a href="mailto:nandanisisodia525@gmail.com">nandanisisodia525@gmail.com</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
