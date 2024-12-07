import { ReactNode } from "react";
import styles from "./card.module.scss";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, ...props }: CardProps) => (
  <div className={styles.card} {...props}>
    {children}
  </div>
);

export default Card;
