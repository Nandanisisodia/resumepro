import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResumes, createResume, deleteResume } from "../services/resumeService";

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadResumes = async () => {
    setLoading(true);
    const data = await getResumes();
    setResumes(data);
    setLoading(false);
  };

  useEffect(() => {
    loadResumes();
  }, []);

  const handleCreate = async () => {
    const resume = await createResume({ title: "Untitled Resume" });
    navigate(`/builder/${resume._id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this resume?")) return;
    await deleteResume(id);
    loadResumes();
  };

  if (loading) return <p className="page-loader">Loading resumes...</p>;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>My Resumes</h2>
        <button onClick={handleCreate}>+ New Resume</button>
      </div>

      {resumes.length === 0 ? (
        <p>No resumes yet. Create your first one!</p>
      ) : (
        <div className="resume-grid">
          {resumes.map((resume) => (
            <div className="resume-card" key={resume._id}>
              <h3>{resume.title}</h3>
              <p className="resume-card-date">
                Last updated: {new Date(resume.updatedAt).toLocaleDateString()}
              </p>
              <div className="resume-card-actions">
                <button onClick={() => navigate(`/builder/${resume._id}`)}>Edit</button>
                <button className="btn-remove" onClick={() => handleDelete(resume._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
