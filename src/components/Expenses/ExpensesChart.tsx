import Chart from '../Chart/Chart';

export interface ChartDataPoints {
  label: string;
  value: number;
}

interface Expense {
  date: Date;
  amount: number
}

interface ExpensesChartProps {
  expenses: Expense[];
}

export default function ExpensesChart({ expenses }: ExpensesChartProps) {
  const chartDataPoints: ChartDataPoints[] = [
    { label: `Jan`, value: 0 },
    { label: `Feb`, value: 0 },
    { label: `Mar`, value: 0 },
    { label: `Apr`, value: 0 },
    { label: `May`, value: 0 },
    { label: `Jun`, value: 0 },
    { label: `Jul`, value: 0 },
    { label: `Aug`, value: 0 },
    { label: `Sep`, value: 0 },
    { label: `Oct`, value: 0 },
    { label: `Nov`, value: 0 },
    { label: `Dec`, value: 0 }
  ];

  console.log(expenses);

  for (const expense of expenses) {
    console.log(typeof expense);
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}
