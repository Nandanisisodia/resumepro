import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, fetchCurrentUser } from "../services/authService";

const AuthContext = createContext(null);

const TOKEN_KEY = "resumepro_token";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, if a token exists, try to fetch the logged-in user
  // so refreshing the page doesn't log the user out.
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setLoading(false);
      return;
    }

    fetchCurrentUser()
      .then(setUser)
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    localStorage.setItem(TOKEN_KEY, data.token);
    setUser(data);
  };

  const register = async (name, email, password) => {
    const data = await registerUser(name, email, password);
    localStorage.setItem(TOKEN_KEY, data.token);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
