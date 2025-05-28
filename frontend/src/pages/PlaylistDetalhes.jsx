import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

// Componente para exibir os detalhes de uma playlist e suas músicas

function PlaylistDetalhes() {
  const { id } = useParams(); // Pega o id da playlist pela URL
  const [musicas, setMusicas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/playlists/${id}/musicas`)
      .then((res) => {
        // Verifica se veio dentro de res.data.musicas ou direto
        if (Array.isArray(res.data)) {
          setMusicas(res.data);
        } else if (Array.isArray(res.data.musicas)) {
          setMusicas(res.data.musicas);
        } else {
          setMusicas([]); // fallback seguro
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar músicas:", err);
        setMusicas([]); // garante que pelo menos evite quebra no render
      });
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Voltar para Home
      </button>

      <h1>Músicas da Playlist</h1>
      {Array.isArray(musicas) && musicas.length === 0 && (
        <p>Nenhuma música encontrada.</p>
      )}

      {Array.isArray(musicas) &&
        musicas.map((musica) => (
          <div key={musica.id} style={{ marginBottom: "20px" }}>
            <p>
              <strong>{musica.titulo}</strong> — {musica.artista}
            </p>
            {musica.preview_url ? (
              <audio controls src={musica.preview_url}></audio>
            ) : (
              <p style={{ fontStyle: "italic" }}>Prévia não disponível</p>
            )}
          </div>
        ))}
    </div>
  );
}

export default PlaylistDetalhes;
