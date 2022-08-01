import styles from "../styles/FooterFilter.module.scss";

const FooterFilterComponent = ({
  todoList,
  theme,
  currentFilter,
  setCurrentFilter,
  setTodoList,
}) => {
  const currentTheme = theme === "dark" ? styles.dark : styles.light;
  const clearCompleted = () => {
    const updatedList = todoList.filter((todo) => !todo.completed);
    setTodoList(updatedList);
  };
  return (
    <div className={`${styles.filterContainer} ${currentTheme}`}>
      <div className={`${styles.countList} ${currentTheme}`}>
        <span>{todoList?.length} Items left</span>
      </div>

      <div className={`${styles.filterItems} ${currentTheme}`}>
        <button
          className={`${currentFilter === "all" ? styles.active : ""}`}
          onClick={() => setCurrentFilter("all")}
        >
          All
        </button>
        <button
          className={`${currentFilter === "active" ? styles.active : ""}`}
          onClick={() => setCurrentFilter("active")}
        >
          Active
        </button>
        <button
          className={`${currentFilter === "completed" ? styles.active : ""}`}
          onClick={() => setCurrentFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div className={`${styles.clearItems} ${currentTheme}`}>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default FooterFilterComponent;
