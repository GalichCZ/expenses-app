import React, { useEffect } from "react";
import Block from "../UI/Block";
import Expense from "./Expense";
const fbUrl =
  "https://expenses-app-ba496-default-rtdb.europe-west1.firebasedatabase.app";
const Expenses = () => {
  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch(fbUrl + "/expenses.json");
      const responseData = await response.json();
      const loadedData = [];

      for (const key in responseData) {
        loadedData.push(key);
      }

      console.log(responseData);
    };
    fetchExpenses();
  }, []);
  return (
    <Block styles="w-4/5 py-4">
      <h3 className="text-h3-pc">Expenses</h3>
      <Expense />
      <Expense />
    </Block>
  );
};

export default Expenses;
