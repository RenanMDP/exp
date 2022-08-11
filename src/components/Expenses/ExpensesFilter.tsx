import { ChangeEvent } from 'react';
import './ExpensesFilter.css';

type ChangeEventType = ChangeEvent<HTMLSelectElement>;

interface ExpensesFilterProps {
  onChangeFilter: Function;
  selectedYear: string;
}

export default function ExpensesFilter({
  onChangeFilter,
  selectedYear
}: ExpensesFilterProps) {
  function handleFilterChangeElement(event: ChangeEventType) {
    const { value } = event.currentTarget;
    onChangeFilter(value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter by year</label>
        <select
          name="filter"
          id="filter"
          value={selectedYear}
          onChange={handleFilterChangeElement}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
