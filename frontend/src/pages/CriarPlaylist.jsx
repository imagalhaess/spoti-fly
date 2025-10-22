// Página Criar Playlist - Design profissional sem emojis

import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import "./CriarPlaylist.css";

export default function CriarPlaylist() {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleCriar(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("É necessário estar logado para criar uma playlist.");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      await api.post(
        "/playlists",
        { nome },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Playlist criada com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar playlist:", error);
      alert("Erro ao criar playlist. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  const handleVoltar = () => {
    navigate("/");
  };

  return (
    <div className="criar-playlist-page">
      <Navbar showLogout={true} />

      <div className="criar-playlist-container">
        <div className="criar-playlist-card">
          <div className="criar-playlist-header">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="header-icon">
              <path d="M9 18V5l12-2v13" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="6" cy="18" r="3" strokeWidth="1.5"/>
              <circle cx="18" cy="16" r="3" strokeWidth="1.5"/>
            </svg>
            <h1>Criar Nova Playlist</h1>
            <p>Organize suas músicas favoritas em uma nova coleção</p>
          </div>

          <form onSubmit={handleCriar} className="criar-playlist-form">
            <Input
              label="Nome da Playlist"
              type="text"
              placeholder="Ex: Músicas para Trabalhar"
              icon="edit"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <div className="criar-playlist-buttons">
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "Criando..." : "Criar Playlist"}
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={handleVoltar}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
