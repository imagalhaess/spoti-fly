// Componente de botão reutilizável com diferentes variantes
// Uso: <Button variant="primary">Clique aqui</Button>

import "./Button.css";

export default function Button({
  children,
  variant = "primary", // primary, secondary, danger, success
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  ...props // Permite passar outras propriedades HTML como className, id, etc
}) {
  // Monta a classe CSS baseado nas props
  const buttonClass = `btn btn-${variant} ${
    fullWidth ? "btn-full-width" : ""
  } ${disabled ? "btn-disabled" : ""}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
}
