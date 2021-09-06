import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const addTodo = (newTodo) => {
    setList([...list, newTodo]);
  };
  const handleTodo = (word) => {
    const filterList = list.filter((item) => item != word);
    setList(filterList);
    console.log(list);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form addTodo={addTodo}></Form>
        <TodoList list={list} handleTodo={handleTodo}></TodoList>
      </header>
    </div>
  );
}

export default App;
