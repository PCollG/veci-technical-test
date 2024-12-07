import React from "react";
import { useState } from "react";

import Modal from "@molecules/modal/modal";
import Button from "@atoms/button/button";

import style from "./modalAddItem.module.scss";

interface ModalAddItemProps {
  trigger: React.ReactElement;
  handleAddItem: (item: string) => void;
}

const ModalAddItem = ({ trigger, handleAddItem }: ModalAddItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const triggerWithAction = React.cloneElement(trigger, {
    onClick: () => setIsOpen((prev) => !prev),
  });

  const handleAddClick = () => {
    if (!inputValue.trim()) {
      return;
    }

    handleAddItem(inputValue);
    setIsOpen(false);
    setInputValue("");
  };

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
          <input
            type="text"
            style={{ width: "100%" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className={style.modalBtnWrapper}>
          <Button variant="secondary" onClick={handleAddClick}>
            ADD
          </Button>
          <Button onClick={() => handleClose()}>Cancel</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddItem;
