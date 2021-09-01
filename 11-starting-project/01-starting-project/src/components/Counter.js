import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
//import { useState } from "react";
import { counterActions } from "../store/counter"; 
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //avtomatsko se postvi subscription, dobivas podatke ko se spreminjajo
  //const [view, setView] = useState(true);
  const view = useSelector((state) => state.counter.view);
  const toggleCounterHandler = () => {
    //dispatch({type:'toggleCounter'});
    dispatch(counterActions.toggleCounter());
    // setView((state) => {
    //   return !state;
    // });
  };
  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const increment5Handler = () => {
    //dispatch({ type: "increase", val:10 });
    dispatch(counterActions.increase(10)); //{type:xxxxxx, payload:10}
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {view && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Incerment</button>
        <button onClick={increment5Handler}>Increase by 10</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
