import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const items = [new Todo("OKeeeej"), new Todo("Hmmm")];

  return (
    <div className="App">
      <Todos items={items} />
    </div>
  );
}

export default App;
