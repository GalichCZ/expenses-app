import React, { ReactElement } from "react";

interface Props {
  children: string;
  onClick?: () => {};
  type?: string;
  styles?: string;
}

const Button: React.FC<Props> = ({ children, onClick, type, styles }) => {
  return (
    <button
      type={"button" || type}
      className={`bg-slate-500 px-4 py-2 ${styles} text-h5-pc text-white rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
