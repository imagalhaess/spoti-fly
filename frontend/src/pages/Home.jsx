// Página Home profissional - sem emojis

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import "./Home.css";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar playlists:", error);
        alert("Sua sessão expirou. Faça login novamente.");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="home-page">
      <Navbar showLogout={true} />

      <div className="home-container">
        <div className="home-header">
          <div>
            <h1 className="home-title">Minhas Playlists</h1>
            <p className="home-subtitle">
              Organize e compartilhe suas músicas favoritas
            </p>
          </div>

          <Link to="/criar-playlist" style={{ textDecoration: "none" }}>
            <Button variant="primary">Nova Playlist</Button>
          </Link>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Carregando suas playlists...</p>
          </div>
        ) : playlists.length === 0 ? (
          <div className="empty-state">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="empty-icon">
              <path d="M9 18V5l12-2v13" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="6" cy="18" r="3" strokeWidth="1.5"/>
              <circle cx="18" cy="16" r="3" strokeWidth="1.5"/>
            </svg>
            <h2>Nenhuma playlist ainda</h2>
            <p>Comece criando sua primeira playlist e organize suas músicas</p>
            <Link to="/criar-playlist" style={{ textDecoration: "none" }}>
              <Button variant="primary">Criar Primeira Playlist</Button>
            </Link>
          </div>
        ) : (
          <div className="playlists-grid">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-card-wrapper">
                <Link
                  to={`/playlists/${playlist.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    title={playlist.nome}
                    description={
                      playlist.musicas
                        ? `${playlist.musicas.length} ${playlist.musicas.length === 1 ? 'música' : 'músicas'}`
                        : "Nenhuma música"
                    }
                  />
                </Link>

                <Link
                  to={`/playlists/${playlist.id}/adicionar-musica`}
                  style={{ textDecoration: "none" }}
                  className="add-music-btn"
                >
                  <Button variant="success" fullWidth>
                    Adicionar Música
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
