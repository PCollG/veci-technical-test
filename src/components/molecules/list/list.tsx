import ListItem from "@atoms/listItem/listItem";
import style from "./list.module.scss";

type ListProps = {
  items: string[];
  deleteItem?: (index: number[]) => void;
};

const List = ({ items, deleteItem }: ListProps) => {
  return (
    <div className={style.listContainer}>
      <ul className={style.list}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onDoubleClick={() => deleteItem?.([index])}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
