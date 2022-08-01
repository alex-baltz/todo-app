import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Index.module.scss";
import ThemeComponent from "../components/ThemeComponent";
import AddTodoComponent from "../components/AddTodoComponent";
import BlankListComponent from "../components/BlankListComponent";
import FooterFilterComponent from "../components/FooterFilterComponent";

const Column = dynamic(() => import("../components/TodoListComponent"), {
  ssr: false,
});

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const currentTheme = theme === "dark" ? styles.dark : styles.light;
  const [filteredTodolist, setFilteredTodoList] = useState();
  useEffect(() => {
    if (currentFilter === "all") {
      setFilteredTodoList(todoList);
    } else if (currentFilter === "active") {
      const updatedList = todoList.filter((todo) => !todo.completed);
      setFilteredTodoList(updatedList);
    } else if (currentFilter === "completed") {
      const updatedList = todoList.filter((todo) => todo.completed);
      setFilteredTodoList(updatedList);
    }
  }, [currentFilter, todoList]);
  return (
    <>
      <Head>
        <title>Todo</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className={`${styles.container} ${currentTheme}`}>
        <div className={`${styles.keyVisual} ${currentTheme}`}></div>
        <main>
          <ThemeComponent theme={theme} setTheme={setTheme} />
          <AddTodoComponent
            todo={todo}
            setTodo={setTodo}
            setTodoList={setTodoList}
            theme={theme}
          />
          <BlankListComponent todoList={todoList} theme={theme} />
          <Column
            todoList={filteredTodolist}
            setTodoList={setTodoList}
            theme={theme}
          />
          <FooterFilterComponent
            todoList={filteredTodolist}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            setTodoList={setTodoList}
            theme={theme}
          />
        </main>
      </div>
    </>
  );
}
