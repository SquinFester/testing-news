import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
}

const List = <T,>({ items }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item as string}</li>
      ))}
    </ul>
  );
};

export default List;
