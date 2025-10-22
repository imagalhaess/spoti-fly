// Card profissional para playlists sem emojis

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
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="card-image" />
      ) : (
        <div className="card-placeholder">
          {/* Ícone musical SVG minimalista */}
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M9 18V5l12-2v13" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="6" cy="18" r="3" strokeWidth="2"/>
            <circle cx="18" cy="16" r="3" strokeWidth="2"/>
          </svg>
        </div>
      )}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
}
