import { useState } from 'react';

import './Expenses.css';
import { ExpenseItemProps } from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

export interface ExpensesProps {
  items: ExpenseItemProps[];
}

export default function Expenses({ items }: ExpensesProps) {
  const [filteredYear, setFilteredYear] = useState(`2020`);

  function handleFilterChangeState(setYear: string) {
    setFilteredYear(setYear);
  }

  const filteredExpenses = items.filter(
    ({ date }) => date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={handleFilterChangeState}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
