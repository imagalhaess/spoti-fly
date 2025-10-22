// Componente de Card reutilizável para exibir playlists
// Uso: <Card title="Playlist" description="..." onClick={...} />

import "./Card.css";

export default function Card({
  title,
  description,
  imageUrl,
  children,
  onClick,
  className = "",
}) {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {/* Imagem ou placeholder */}
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="card-image" />
      ) : (
        <div className="card-placeholder">
          <span className="card-placeholder-icon">🎵</span>
        </div>
      )}

      {/* Conteúdo do card */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
}
