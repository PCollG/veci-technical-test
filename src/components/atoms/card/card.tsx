import { ReactNode } from "react";
import styles from "./card.module.scss";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => (
  <div className={`${styles.card} ${className ?? ""}`} {...props}>
    {children}
  </div>
);

export default Card;
