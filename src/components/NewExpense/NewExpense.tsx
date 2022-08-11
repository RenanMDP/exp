import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface NewExpenseProps {
  onAddExpense: Function;
}

export default function NewExpense({ onAddExpense }: NewExpenseProps) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(formExpenseData: object) {
    const expenseData = {
      ...formExpenseData,
      id: Math.random().toString()
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
}
