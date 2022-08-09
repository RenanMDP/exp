import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface OnAddExpenseType {
  onAddExpense: Function;
}

export default function NewExpense({ onAddExpense }: OnAddExpenseType) {
  function saveExpenseDataHandler(formExpenseData: object) {
    const expenseData = {
      ...formExpenseData,
      id: Math.random().toString()
    };

    onAddExpense(expenseData);
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
