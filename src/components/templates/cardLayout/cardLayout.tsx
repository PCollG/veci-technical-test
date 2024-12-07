import { ReactNode } from "react";
import Card from "@atoms/card/card";

type CardLayoutProps = {
  children: ReactNode;
};

const CardLayout = ({ children }: CardLayoutProps) => {
  return <Card>{children}</Card>;
};

export default CardLayout;
