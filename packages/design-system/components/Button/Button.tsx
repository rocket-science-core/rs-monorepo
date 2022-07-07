import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick, ...props }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} {...props}>
      {label}
    </button>
  );
};
