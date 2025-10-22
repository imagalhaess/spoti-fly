// Componente de barra de navegação reutilizável
// Este componente mostra o logo, título e botão de logout (quando há usuário logado)

import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ showLogout = false }) {
  const navigate = useNavigate();

  // Função para fazer logout - remove o token e redireciona
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo e título */}
        <div className="navbar-brand">
          <span className="navbar-logo">🎵</span>
          <h1 className="navbar-title">Spotifly</h1>
        </div>

        {/* Botão de logout (só aparece se showLogout for true) */}
        {showLogout && (
          <button onClick={handleLogout} className="btn-logout">
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}
