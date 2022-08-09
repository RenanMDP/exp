import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import App from '../../App';
import Card from '../UI/Card';

interface ItemsType {
  items: any;
}

export default function Expenses({ items }: ItemsType) {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={items[0].id}
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        id={items[1].id}
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        id={items[2].id}
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        id={items[3].id}
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
}
