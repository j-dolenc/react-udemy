//import { useState } from 'react';
//state-less/presentational/dumb component

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  // const [title,setTitle]=useState(props.title);
  //       ^      ^
  //       |   function for updating state value   
  // current state value



  // const clickHandler = () =>{
  //   console.log("CLICKED!!!");
    
  //   setTitle("AAAAA");
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
