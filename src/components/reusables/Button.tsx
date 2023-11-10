import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`items-center self-stretch rounded bg-orange px-5 py-4 text-sm font-medium text-white ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
