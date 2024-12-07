import { ReactNode } from "react";
import Card from "@atoms/card/card";

const CardLayout = ({ children }: { children: ReactNode }) => {
  return <Card>{children}</Card>;
};

export default CardLayout;
