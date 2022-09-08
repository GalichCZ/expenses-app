import React from "react";
import Column from "../UI/Column";
const Expense = () => {
  return (
    <div className="shadow-md mb-4 w-4/5 flex justify-around">
      <Column>
        <h5 className="text-h5-pc">Expense</h5>
        <p>Book</p>
      </Column>
      <Column>
        <h5 className="text-h5-pc">Amount</h5>
        <p>300$</p>
      </Column>
      <Column>
        <h5 className="text-h5-pc">Date</h5>
        <p>22.11.2020</p>
      </Column>
    </div>
  );
};

export default Expense;
