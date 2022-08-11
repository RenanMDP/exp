import './Chart.css';
import ChartBar from './ChartBar';
import { ChartDataPoints } from '../Expenses/ExpensesChart';

interface ChartProps {
  dataPoints: ChartDataPoints[];
}

export default function Chart({ dataPoints }: ChartProps) {
  const dataPointValues = dataPoints.map(({ value }) => value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={totalMax} label={label} />
      ))}
    </div>
  );
}
