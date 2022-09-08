import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[];
  styles?: string;
}

const Section: React.FC<Props> = ({ children, styles }) => {
  return (
    <section className="h-screen w-full bg-slate-700 flex items-center justify-center flex-col">
      {children}
    </section>
  );
};

export default Section;
