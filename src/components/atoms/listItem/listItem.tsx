import styles from "./listItem.module.scss";

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  item: string;
  selected?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ item, selected, ...props }) => (
  <li
    className={`${styles.listItem} ${selected && styles.selected}`}
    {...props}
  >
    {item}
  </li>
);

export default ListItem;
