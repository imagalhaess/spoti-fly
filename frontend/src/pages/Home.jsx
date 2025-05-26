import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    api
      .get("/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar playlists:", error);
        alert(
          "Você não tem acesso ou sua sessão expirou. Faça login novamente."
        );
        navigate("/login");
      });
  }, [navigate]);

  // --- Função para Sair (Logout) ---
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token
    navigate("/login"); // Redireciona para a página de login
    alert("Você foi desconectado.");
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px", // 20px do topo
          right: "20px", // 20px da direita
          backgroundColor: "#dc3545", // Vermelho
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 100,
        }}
      >
        Sair
      </button>
      <h1>Spotifly</h1>
      <h2>Minhas Playlists</h2>
      {/* Botão para criar nova playlist */}
      <Link
        to="/criar-playlist"
        style={{
          display: "block",
          margin: "20px 0",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          width: "fit-content",
        }}
      >
        + Criar Nova Playlist
      </Link>
      {playlists.length === 0 ? (
        <p>Você ainda não tem playlists. Crie uma!</p>
      ) : (
        <ul>
          {playlists.map((playlist) => (
            <li
              key={playlist.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{playlist.nome}</span>
              <Link
                to={`/playlists/${playlist.id}/adicionar-musica`}
                style={{
                  background: "#28a745",
                  color: "white",
                  padding: "5px 10px",
                  textDecoration: "none",
                  borderRadius: "3px",
                }}
              >
                Adicionar Música
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
