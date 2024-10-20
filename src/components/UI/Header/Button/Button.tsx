import { SButton } from "./Button.style";
import React from "react";

interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary: boolean;
}

export const Button: React.FC<TButton> = ({ buttonText, isPrimary, ...props }) => {
  return <SButton isPrimary={isPrimary} {...props}>{buttonText}</SButton>;
};
