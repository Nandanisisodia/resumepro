import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <span className="site-navbar-logo-text">
            Resume<span>Pro</span>
          </span>
          <p>
            Build professional, ATS-friendly resumes in minutes. Pick a template, fill in your
            details, and download a resume that actually gets read.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:nandanisisodia525@gmail.com">nandanisisodia525@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        © {new Date().getFullYear()} ResumePro. Built by Nandani Sisodia.
      </div>
    </footer>
  );
};

export default Footer;
