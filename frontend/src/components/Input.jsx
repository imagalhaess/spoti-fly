// Componente de input profissional sem emojis
// Usa ícones SVG simples e elegantes

import "./Input.css";

// Ícones SVG simples
const icons = {
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 6l-10 7L2 6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  lock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  user: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="7" r="4" strokeWidth="2"/>
    </svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8" strokeWidth="2"/>
      <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  edit: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  required = false,
  ...props
}) {
  // Mapeia nomes de ícones para componentes SVG
  const iconComponent = icon && icons[icon] ? icons[icon] : null;

  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label} {required && <span className="input-required">*</span>}
        </label>
      )}

      <div className="input-container">
        {iconComponent && <span className="input-icon">{iconComponent}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`input-field ${iconComponent ? "input-with-icon" : ""}`}
          {...props}
        />
      </div>
    </div>
  );
}
