import {
  useState,
  ChangeEvent,
  SyntheticEvent,
  MouseEventHandler
} from 'react';
import './ExpenseForm.css';

type ChangeEventType = ChangeEvent<HTMLInputElement>;

interface ExpenseFormProps {
  onSaveExpenseData: Function;
  onCancel: MouseEventHandler<HTMLButtonElement>;
}

export default function ExpenseForm({
  onSaveExpenseData,
  onCancel
}: ExpenseFormProps) {
  const [getTitle, setTitle] = useState('');
  const [getAmount, setAmount] = useState('');
  const [getDate, setDate] = useState('');

  function getTargetValue(event: ChangeEventType) {
    const { value } = event.currentTarget;
    return value;
  }

  function titleChangeHandler(event: ChangeEventType) {
    setTitle(getTargetValue(event));
  }

  function amountChangeHandler(event: ChangeEventType) {
    setAmount(getTargetValue(event));
  }

  function dateChangeHandler(event: ChangeEventType) {
    setDate(getTargetValue(event));
  }

  function submitHandler(event: SyntheticEvent) {
    event.preventDefault();

    const expenseData = {
      title: getTitle,
      amount: +getAmount,
      date: new Date(getDate)
    };

    onSaveExpenseData(expenseData);

    setTitle(``);
    setAmount(``);
    setDate(``);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={getTitle}
            name="title"
            id="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={getAmount}
            name="amount"
            id="amount"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={getDate}
            name="date"
            id="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
