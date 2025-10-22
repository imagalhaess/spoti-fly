// Página Home - mostra todas as playlists do usuário em um grid moderno

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import "./Home.css";

export default function Home() {
  // Estado para armazenar as playlists do usuário
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect roda quando o componente é montado (carrega)
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Se não tem token, redireciona para login
    if (!token) {
      navigate("/login");
      return;
    }

    // Busca as playlists do usuário no backend
    api
      .get("/playlists", {
        headers: {
          Authorization: `Bearer ${token}`, // Envia o token para autenticação
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
      {/* Navbar com botão de logout */}
      <Navbar showLogout={true} />

      {/* Container principal do conteúdo */}
      <div className="home-container">
        {/* Cabeçalho da página */}
        <div className="home-header">
          <div>
            <h1 className="home-title">Minhas Playlists</h1>
            <p className="home-subtitle">
              Organize suas músicas favoritas em playlists incríveis
            </p>
          </div>

          {/* Botão para criar nova playlist */}
          <Link to="/criar-playlist" style={{ textDecoration: "none" }}>
            <Button variant="primary">+ Criar Nova Playlist</Button>
          </Link>
        </div>

        {/* Conteúdo principal */}
        {loading ? (
          // Estado de carregamento
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Carregando suas playlists...</p>
          </div>
        ) : playlists.length === 0 ? (
          // Estado vazio - quando não há playlists
          <div className="empty-state">
            <span className="empty-state-icon">🎵</span>
            <h2>Nenhuma playlist ainda</h2>
            <p>
              Comece criando sua primeira playlist e adicione suas músicas
              favoritas!
            </p>
            <Link to="/criar-playlist" style={{ textDecoration: "none" }}>
              <Button variant="primary">Criar Minha Primeira Playlist</Button>
            </Link>
          </div>
        ) : (
          // Grid de playlists
          <div className="playlists-grid">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-card-wrapper">
                {/* Card da playlist - clicável */}
                <Link
                  to={`/playlists/${playlist.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    title={playlist.nome}
                    description={
                      playlist.musicas
                        ? `${playlist.musicas.length} música${
                            playlist.musicas.length !== 1 ? "s" : ""
                          }`
                        : "0 músicas"
                    }
                  />
                </Link>

                {/* Botão para adicionar música */}
                <Link
                  to={`/playlists/${playlist.id}/adicionar-musica`}
                  style={{ textDecoration: "none" }}
                  className="add-music-btn"
                >
                  <Button variant="success" fullWidth>
                    + Adicionar Música
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
