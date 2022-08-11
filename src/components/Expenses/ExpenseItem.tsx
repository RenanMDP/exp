import { useRef, MutableRefObject } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDelete from './ExpenseDelete';
import Card from '../UI/Card';
import './ExpenseItem.css';

export interface ExpenseItemProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export default function ExpenseItem({
  title,
  amount,
  date
}: ExpenseItemProps) {
  const ref = useRef(null);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          <ExpenseDelete />
        </div>
      </Card>
    </li>
  );
}
