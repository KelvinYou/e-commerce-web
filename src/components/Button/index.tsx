import React, { FC } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  id?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  value?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  id = "",
  type = "button",
  className = "",
  value = "",
  onClick = () => {},
  style = {},
  disabled = false,
}) => {
  return (
    <button
      id={id}
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      style={style}
      value={value}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

