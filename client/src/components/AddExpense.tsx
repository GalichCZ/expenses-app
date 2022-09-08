import React from "react";
import Block from "../UI/Block";
import ExpenseForm from "./ExpenseForm";

const AddExpens = () => {
  return (
    <Block styles="w-4/5 py-6">
      <h3 className="text-h3-pc">Add expense</h3>
      <ExpenseForm />
    </Block>
  );
};

export default AddExpens;
