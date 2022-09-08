import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[];
  styles?: string;
}

const Block: React.FC<Props> = ({ children, styles }) => {
  return (
    <div
      className={`mb-6 shadow-sm bg-white flex ${styles} rounded items-center justify-center flex-col`}
    >
      {children}
    </div>
  );
};

export default Block;
