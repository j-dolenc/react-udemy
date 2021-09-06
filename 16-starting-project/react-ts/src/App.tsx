
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {

  //const items = [new Todo("OKeeeej"), new Todo("Hmmm")];

  
  return (
    <TodosContextProvider   >
      <NewTodo/>
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
