import { useRef, MutableRefObject } from 'react';
import './ExpenseDelete.css';

interface ExpenseDeleteProps {
  onClick: Function;
}

export default function ExpenseDelete() {
  return <button className="expense-item__delete">Delete</button>;
}
