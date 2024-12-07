import { useState } from "react";

import CardLayout from "@templates/cardLayout/cardLayout";
import List from "@molecules/list/list";
import Modal from "@molecules/modal/modal";
import Button from "@atoms/button/button";

import styles from "./homePage.module.scss";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardLayout>
      <h1 className={styles.title}>This is a technical proof</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
        inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
        hendrerit posuere augue fames dictumst placerat porttitor, dis mi
        pharetra vestibulum venenatis phasellus.
      </p>
      <List items={["item 1", "item 2", "item 3"]} />
      <div className={styles.buttonsWrapper}>
        <Button>Undo</Button>
        <Button>Delete</Button>
        <Button
          variant="secondary"
          style={{ marginLeft: "auto" }}
          onClick={() => setIsOpen(true)}
        >
          Add
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        cardStyle={{ marginTop: "50px" }}
      >
        <h1>Modal</h1>
        <p>Modal content</p>
      </Modal>
    </CardLayout>
  );
};

export default HomePage;
