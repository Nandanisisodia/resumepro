import api from "./api";

export const getResumes = async () => {
  const { data } = await api.get("/resumes");
  return data;
};

export const getResumeById = async (id) => {
  const { data } = await api.get(`/resumes/${id}`);
  return data;
};

export const createResume = async (payload) => {
  const { data } = await api.post("/resumes", payload);
  return data;
};

export const updateResume = async (id, payload) => {
  const { data } = await api.put(`/resumes/${id}`, payload);
  return data;
};

export const deleteResume = async (id) => {
  const { data } = await api.delete(`/resumes/${id}`);
  return data;
};
