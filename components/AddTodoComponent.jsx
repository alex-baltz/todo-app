import React, { useRef, useEffect } from "react";
import styles from "../styles/AddTodo.module.scss";
const AddTodoComponent = ({ todo, setTodo, setTodoList, theme }) => {
  const currentTheme = theme === "dark" ? styles.dark : styles.light;
  const todoRef = useRef();
  useEffect(() => {
    todoRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 999999),
        todo,
        completed: false,
      },
    ]);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.todoFormContainer} ${currentTheme}`}>
        <span className={`${styles.circle} ${currentTheme}`}></span>
        <input
          type="text"
          ref={todoRef}
          className={currentTheme}
          placeholder={"Create a todo..."}
          onFocus={(e) => (e.target.placeholder = "Currently Typing")}
          onBlur={(e) => (e.target.placeholder = "Create a todo...")}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          required
        />
      </div>
    </form>
  );
};

export default AddTodoComponent;
