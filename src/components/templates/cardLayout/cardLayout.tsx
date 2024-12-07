import { ReactNode } from "react";

import Card from "@atoms/card/card";

import styles from "./cardLayout.module.scss";

type CardLayoutProps = {
  children: ReactNode;
};

const CardLayout = ({ children }: CardLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Card>{children}</Card>
    </div>
  );
};

export default CardLayout;
