import React from "react";

import Card from "@atoms/card/card";

import style from "./modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  cardStyle?: React.CSSProperties;
  bgStyle?: React.CSSProperties;
}

const Modal = ({
  children,
  isOpen,
  handleClose,
  cardStyle,
  bgStyle,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={style.modalBg}
          style={bgStyle}
          onClick={() => handleClose()}
        >
          <Card
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()}
            style={cardStyle}
          >
            {children}
          </Card>
        </div>
      )}
    </>
  );
};

export default Modal;
