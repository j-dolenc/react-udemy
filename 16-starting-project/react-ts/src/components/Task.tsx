import classes from './Task.module.css';
const Task: React.FC<{text:string,onRemoveTodo:()=>void}> = (props) => {
  return (
      <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
  );
};
export default Task;
