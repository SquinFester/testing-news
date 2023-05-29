import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section = ({ children, title = "random title bblbl" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
