import { useState } from "react";

import Section from "./components/Section";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import CounterTwo from "./components/CounterTwo";

function App() {
  const [count, setCount] = useState<number>(2);
  const items: string[] = ["Item1", "Item2", "Item3"];

  return (
    <main className="text-white grid justify-center">
      <Heading title={"first title"} />
      <Section>
        <Counter />
      </Section>
      <List items={items} />
      <CounterTwo add={5} />
    </main>
  );
}

export default App;
