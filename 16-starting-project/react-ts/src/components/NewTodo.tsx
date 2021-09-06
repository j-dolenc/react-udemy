import React, { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value; //vprasajcek je zato ker ref mogoče še ni nastavljen na nekaj
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addItem(enteredText);
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input
        type="text"
        id="text"
        ref={inputRef}
        // value={inputRef.current?.value}
      ></input>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
