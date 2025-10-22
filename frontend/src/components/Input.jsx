// Componente de input reutilizável com label e ícone opcional
// Uso: <Input label="Email" type="email" icon="📧" />

import "./Input.css";

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
  return (
    <div className="input-group">
      {/* Label (se fornecido) */}
      {label && (
        <label className="input-label">
          {label} {required && <span className="input-required">*</span>}
        </label>
      )}

      {/* Container do input com ícone opcional */}
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`input-field ${icon ? "input-with-icon" : ""}`}
          {...props}
        />
      </div>
    </div>
  );
}
