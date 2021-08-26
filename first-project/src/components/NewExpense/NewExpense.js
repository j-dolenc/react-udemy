import React, {useState} from "react"; //tega po novem ne rabis vec
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm,setShowForm] = useState(false);
    const saveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setShowForm(false);
    }
    const addNewExpenseHandler = (event) => {
        setShowForm(true);
      };
    const stopEditing = (event) => {
        setShowForm(false);
    };
    
    return <div className="new-expense">
        {!showForm && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
}

export default NewExpense;