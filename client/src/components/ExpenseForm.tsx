import React, { useEffect, useState } from "react";
import Column from "../UI/Column";
import { Input } from "antd";
import { DatePicker } from "antd";
import { InputNumber } from "antd";
import { Select } from "antd";
import Button from "../UI/Button";
const { Option } = Select;
const ExpenseForm = () => {
  const [expenseObj, setExpenseObj] = useState<object>({
    expense: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    console.log(expenseObj);
  }, [expenseObj]);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <form className="flex w-4/5 ">
      <Column styles="w-full">
        <div className="flex w-full justify-around">
          <Column styles="w-4/5">
            <label htmlFor="">Expense</label>
            <Input
              onChange={(e) => {
                setExpenseObj({ ...expenseObj, expense: e.target.value });
              }}
            />
          </Column>
          <Column styles="w-4/5">
            <label htmlFor="">Amount</label>
            <InputNumber
              onChange={(e) => {
                setExpenseObj({ ...expenseObj, amount: e.toString() });
              }}
            />
          </Column>
          <Column styles="w-4/5">
            <label htmlFor="">Category</label>
            <Select
              showSearch
              placeholder="Select a category"
              optionFilterProp="children"
              // onChange={onChange}
              onSelect={(value: string) => {
                setExpenseObj({ ...expenseObj, category: value });
              }}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="food">Food</Option>
              <Option value="bills">Bills</Option>
              <Option value="rent">Rent</Option>
            </Select>
          </Column>
          <Column styles="w-4/5">
            <label htmlFor="">Date</label>
            <DatePicker
              onChange={(date, dateString: string) => {
                setExpenseObj({ ...expenseObj, date: dateString });
              }}
            />
          </Column>
        </div>
        <Button styles="mt-6" type="submit">
          Send
        </Button>
      </Column>
    </form>
  );
};

export default ExpenseForm;
