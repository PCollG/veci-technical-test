import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

const variantClasses = {
  primary: styles.primary,
  secondary: styles.secondary,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: keyof typeof variantClasses;
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${variantClasses[variant]}`}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
