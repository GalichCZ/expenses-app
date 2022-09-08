import React from "react";
import AddExpens from "../components/AddExpense";
import Expenses from "../components/Expenses";
import Section from "../UI/Section";

const MainPage = () => {
  return (
    <Section>
      <h1 className="text-white text-h1-pc">Manage your expenses</h1>
      <AddExpens />
      <Expenses />
    </Section>
  );
};

export default MainPage;
