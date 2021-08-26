import {useState} from 'react';

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter";
//import ExpensesList from './ExpensesList';


const Expenses = (props) => {
  const [filter,setFilter] = useState('2020');

  const addFilter = (enteredFilter) =>{
    
    console.log("in Expenses");
    console.log(enteredFilter);
    setFilter(enteredFilter);
  }
  //console.log(filter);
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  let expensesContent=<p>No expenses found.</p>;
  if(filteredExpenses.length >0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} onAddFilter={addFilter} />
        <ExpensesChart expenses={filteredExpenses}/>
        {expensesContent}
        {/* <ExpensesList items={filteredExpenses}/> */}
        {/* <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          amount={props.expenses[1].amount}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          date={props.expenses[3].date}
          amount={props.expenses[3].amount}
        /> */}
      </Card>
    </div>
  );
}
export default Expenses;
