import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[];
  styles?: string;
}

const UI: React.FC<Props> = ({ children, styles }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${styles}`}>
      {children}
    </div>
  );
};

export default UI;
