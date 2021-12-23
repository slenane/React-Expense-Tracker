import React, { useState } from 'react';

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');
    
    
    const changeYearFilterHandler = (filteredYear) => {
        setSelectedYear(filteredYear);
    };
    
    const filteredExpenses = props.items.filter(expense => (expense.date.getFullYear()).toString() === selectedYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeYearFilter={changeYearFilterHandler} />   
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>

    );
}
  
export default Expenses;