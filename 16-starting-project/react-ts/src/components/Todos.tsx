import { useContext } from "react";

import Task from "./Task";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
    const todosCtx=useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Task
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeItem.bind(null,item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
