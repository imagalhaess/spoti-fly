// Página para criar nova playlist - totalmente redesenhada

import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import "./CriarPlaylist.css";

export default function CriarPlaylist() {
  // Estado para armazenar o nome da playlist
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Função para criar a playlist
  async function handleCriar(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    // Verifica se o usuário está autenticado
    if (!token) {
      alert("É necessário estar logado para criar uma playlist.");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      // Faz a requisição para criar a playlist
      await api.post(
        "/playlists",
        { nome },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Sucesso! Redireciona para a home
      alert("✨ Playlist criada com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar playlist:", error);
      alert("Erro ao criar playlist. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  // Função para voltar
  const handleVoltar = () => {
    navigate("/"); // Volta para a home
  };

  return (
    <div className="criar-playlist-page">
      {/* Navbar com logout */}
      <Navbar showLogout={true} />

      {/* Container principal */}
      <div className="criar-playlist-container">
        <div className="criar-playlist-card">
          {/* Cabeçalho */}
          <div className="criar-playlist-header">
            <span className="criar-playlist-icon">🎵</span>
            <h1>Criar Nova Playlist</h1>
            <p>Dê um nome especial para sua nova coleção de músicas</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleCriar} className="criar-playlist-form">
            {/* Campo Nome da Playlist */}
            <Input
              label="Nome da Playlist"
              type="text"
              placeholder="Ex: Músicas para Relaxar"
              icon="📝"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            {/* Botões */}
            <div className="criar-playlist-buttons">
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "Criando..." : "✨ Criar Playlist"}
              </Button>

              <Button type="button" variant="secondary" onClick={handleVoltar}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
