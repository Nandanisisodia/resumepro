import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

const navLinkClass = ({ isActive }) => (isActive ? "active-link" : "");

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="site-navbar">
      <Link to="/" className="site-navbar-logo">
        <Logo />
      </Link>

      <div className="site-navbar-center">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </div>

      <div className="site-navbar-right">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span className="site-navbar-user">Hi, {user.name}</span>
            <button onClick={handleLogout} className="btn-link">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn-accent">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
