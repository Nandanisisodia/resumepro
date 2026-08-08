import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TemplateSelect from "./pages/TemplateSelect";
import Builder from "./pages/Builder";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="app-main">
                <Dashboard />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/templates"
          element={
            <PrivateRoute>
              <TemplateSelect />
            </PrivateRoute>
          }
        />
        <Route
          path="/builder/:id"
          element={
            <PrivateRoute>
              <div className="app-main">
                <Builder />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
