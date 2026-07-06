import { useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit() {
    setTodos(() => {
      return todos.concat({
        text: input,
        id: generateId(),
      });
    });
    setInput("");
  }
  function generateId() {
    return Math.floor(Math.random() * 10);
  }
  function removeTodo(id) {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }
  return (
    <div className={styles.todoWrapper}>

   
    <div className={styles.container}>
      <input
       className={styles.input}
        type="text"
        placeholder="New todos"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul className={styles.todosList}>
        {todos.map(({ text, id }) => (
          <li className={styles.todo} key={id}>
            <span>{text}</span>
            <button className={styles.close} onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
     </div>
  );
};

export default Todo;
