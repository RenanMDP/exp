import { ReactElement, useState, useRef } from 'react';
import './ExpensesList.css';

import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

interface ExpenseListProps {
  items: ExpenseItemProps[];
}

export default function ExpensesList({ items }: ExpenseListProps) {
  const ref = useRef(null);
  const expenseItems = items.map(({ id, title, amount, date }) => (
    <ExpenseItem
      key={id}
      id={id}
      title={title}
      amount={amount}
      date={date}
    />
  ));

  const [stateExpenseItems, setStateExpenseItems] = useState(expenseItems);

  function deleteExpense() {
    setStateExpenseItems(prevExpenses => [...prevExpenses]);
  }

  const expenseEvaluation: ReactElement | JSX.Element[] = (
    <h2 className="expenses-list__fallback">No expenses found!</h2>
  );

  if (items.length === 0) {
    return expenseEvaluation;
  }

  return <ul className="expenses-list">{expenseItems}</ul>;
}
