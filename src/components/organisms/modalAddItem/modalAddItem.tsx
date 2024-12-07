import { useState } from "react";
import Button from "@atoms/button/button";
import style from "./modalAddItem.module.scss";
import React from "react";
import Modal from "@molecules/modal/modal";

interface ModalAddItemProps {
  trigger: React.ReactElement;
}

const ModalAddItem = ({ trigger }: ModalAddItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerWithAction = React.cloneElement(trigger, {
    onClick: () => setIsOpen((prev) => !prev),
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {triggerWithAction}
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        cardStyle={{ maxWidth: "700px", margin: "50px 15px" }}
      >
        <p>Add item to list</p>
        <div style={{ padding: "20px 0 25px" }}>
          <input type="text" style={{ width: "100%" }} />
        </div>
        <div className={style.modalBtnWrapper}>
          <Button variant="secondary">ADD</Button>
          <Button onClick={() => handleClose()}>Cancel</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddItem;
