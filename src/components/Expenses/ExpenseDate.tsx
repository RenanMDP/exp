import './ExpenseDate.css';

interface Calendar {
  date: Date;
}

export default function ExpenseDate({ date }: Calendar) {
  const month = date.toLocaleString(`en-US`, { month: `long` });
  const year = date.getFullYear();
  const day = date.toLocaleString(`en-Us`, { day: `2-digit` });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
