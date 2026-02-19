// todo component
// create a todo, cross a todo, uncross a todo, delete a todo

import { useState } from "react";

type todo = string;

type todos = string[];

export default function Todos() {
  const [todo, setTodo] = useState<todo>("");
  const [todos, setTodos] = useState<todos>([]);

  //handle add todo action
  const handleAddTodo = () => {
    setTodos((prevTodos: todos) => [...prevTodos, todo]);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Submit todo</button>
      {todos.length > 0 && (
        <>
          <h3>Your Todos</h3>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <div>{todo}</div>
                  <span>x</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
