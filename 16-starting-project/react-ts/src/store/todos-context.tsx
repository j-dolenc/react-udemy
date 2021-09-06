import React, { useState } from "react";
import Todo from "../models/todo";


type TodosContextObj ={
    items:Todo[];
    addItem: (text:string) => void;
    removeItem:(id:string)=>void;
}
export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addItem:(text:string)=>{},
    removeItem:(id:string)=>{}
});



const TodosContextProvider:React.FC =(props) =>{
    const [items,setItems] = useState<Todo[]>([]);
    const addItem= (text:string) => {
        let item= new Todo(text);
        setItems((prevState)=>{return prevState!.concat(item)});
      }
      const removeItem = (id:string) => {
        setItems((prevState) => {
          return prevState.filter(todo => todo.id !== id);
        });
      }
      
      const contextValue:TodosContextObj={
          items:items,
          addItem:addItem,
          removeItem:removeItem
      }
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}
export default TodosContextProvider;