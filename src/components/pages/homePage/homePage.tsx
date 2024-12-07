import List from "@molecules/list/list";
import CardLayout from "@templates/cardLayout/cardLayout";

import styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <CardLayout>
      <h1>This is a technical proof</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
        inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
        hendrerit posuere augue fames dictumst placerat porttitor, dis mi
        pharetra vestibulum venenatis phasellus.
      </p>
      <List items={["item 1", "item 2", "item 3"]} />
    </CardLayout>
  );
};

export default HomePage;
