import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

interface Title {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export default function ExpenseItem({ title, amount, date }: Title) {
  const [getTitle, setTitle] = useState(title);

  function clickHandler() {
    setTitle(`Updated!`);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{getTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
