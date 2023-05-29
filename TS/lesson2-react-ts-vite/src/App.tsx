import { useState } from "react";

import Section from "./components/Section";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(2);
  const items: string[] = ["Item1", "Item2", "Item3"];

  return (
    <main className="text-white grid justify-center">
      <Heading title={"first title"} />
      <Section>
        <Counter setCount={setCount}>Count is {count}</Counter>
      </Section>
      <List items={items} render={(item: string) => <span>{item}</span>} />
    </main>
  );
}

export default App;
