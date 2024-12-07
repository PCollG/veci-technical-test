import CardLayout from "@templates/cardLayout/cardLayout";
import ItemList from "@organisms/itemList/itemList";

import styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <CardLayout>
      <h1 className={styles.title}>This is a technical proof</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
        inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
        hendrerit posuere augue fames dictumst placerat porttitor, dis mi
        pharetra vestibulum venenatis phasellus.
      </p>
      <ItemList />
    </CardLayout>
  );
};

export default HomePage;
