import { useState } from "react";

import Section from "./components/Section";
import Counter from "./components/Counter";
import Heading from "./components/Heading";

function App() {
  const [count, setCount] = useState<number>(2);

  return (
    <main className="text-white grid justify-center">
      <Heading title={"first title"} />
      <Section>
        <Counter setCount={setCount}>Count is {count}</Counter>
      </Section>
    </main>
  );
}

export default App;
