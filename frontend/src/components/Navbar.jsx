// Navbar com logo personalizado inspirado na arte

import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";
import "./Logo.css";

export default function Navbar({ showLogout = false }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo e título */}
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <Logo size={40} />
          <h1 className="navbar-title">Spoti-Fly</h1>
        </div>

        {/* Botão de logout */}
        {showLogout && (
          <button onClick={handleLogout} className="btn-logout">
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}
