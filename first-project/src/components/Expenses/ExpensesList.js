// import React from "react";
// import ExpenseItem from "./Expenses";
// import "./ExpensesList.css";

// const ExpensesList = (props) => {
//   if (props.items.length === 0) {
//     return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
//   }
//   //   console.log("ExpensesList.js");
//   //   console.log(props.items.length);
//   //   const toElement = props.items.map((item) => (
//   //     <ExpenseItem
//   //       key={item.id}
//   //       title={item.title}
//   //       amount={item.amount}
//   //       date={item.date}
//   //     />
//   //   ));
//   //   console.log(toElement);

//   let expensesContent = props.items.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ));

//   return <ul className="expenses-list"></ul>;
//   // return (
//   //     <div>
//   //     {props.items.map(item =>
//   //             <ExpenseItem key={item.id}
//   //             title={item.title}
//   //             amount={item.amount}
//   //             date={item.date}/>
//   //         )

//   //     }
//   //     </div>
//   // );
// };

// export default ExpensesList;
