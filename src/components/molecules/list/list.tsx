import ListItem from "@atoms/listItem/listItem";
import style from "./list.module.scss";

type ListProps = {
  items: string[];
};

const List = ({ items }: ListProps) => {
  return (
    <div className={style.listContainer}>
      <ul className={style.list}>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
