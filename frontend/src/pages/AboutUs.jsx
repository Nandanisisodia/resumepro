import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="static-page">
        <span className="static-page-eyebrow">About Us</span>
        <h1>Built by someone who's filled out one too many resume forms.</h1>
        <p>
          Hi, I'm <strong>Nandani Sisodia</strong>, the developer behind ResumePro. Like most
          students and early-career folks, I've spent hours wrestling with formatting in Word
          docs, worrying whether a resume would even survive an ATS scan before a human ever
          saw it. ResumePro is my attempt to fix that.
        </p>
        <p>
          This project started as a way to combine practical full-stack development —
          React on the frontend, a Node.js and Express API, MongoDB for storage, and
          JWT-based authentication — with something genuinely useful: a tool that helps
          people put their best foot forward when applying for jobs.
        </p>

        <div className="static-page-highlight">
          <strong>The goal is simple:</strong> let anyone build a clean, professional,
          ATS-friendly resume without fighting a text editor or paying for a template.
        </div>

        <p>
          ResumePro is under active development, and every feature you see — from
          multiple templates to ATS-safe PDF exports — has been built and refined one
          piece at a time. There's more on the way.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
