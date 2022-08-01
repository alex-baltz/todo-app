import React from "react";
import styles from "../styles/TodoList.module.scss";
import { BsCheck } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoListComponent = ({ todoList, setTodoList, theme }) => {
  const currentTheme = theme === "dark" ? styles.dark : styles.light;
  const setCompleted = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === Number(id) ? { ...todo, completed: !todo.completed } : todo
    );
    var sortedArray = updatedList.sort((a, b) => {
      const isComplete = b.completed - a.completed;
      return isComplete;
    });
    setTodoList(sortedArray);
  };
  const deleteTodo = (id) => {
    const updatedList = todoList.filter((todo) => todo.id === !Number(id));
    setTodoList(updatedList);
  };
  const handleDrag = (e) => {
    const { source, destination } = e;
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const result = [...todoList];
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);
    setTodoList(result);
  };
  return (
    <DragDropContext
      onDragEnd={(e) => {
        handleDrag(e);
      }}
    >
      <Droppable droppableId="todoListDroppable" key={todoList.length}>
        {(provider) => (
          <div
            className={`${styles.todoListContainer} ${currentTheme}`}
            {...provider.droppableProps}
            ref={provider.innerRef}
          >
            {todoList.map((todo, index) => {
              return (
                <Draggable
                  draggableId={String(todo.id)}
                  key={todo.id}
                  index={index}
                >
                  {(provider) => (
                    <div
                      className={`${styles.todoListItem} ${currentTheme}`}
                      {...provider.draggableProps}
                      {...provider.dragHandleProps}
                      ref={provider.innerRef}
                    >
                      <input
                        type="checkbox"
                        id={todo.id}
                        defaultChecked={todo.completed}
                        value={todo.id}
                        onChange={(e) => setCompleted(e.target.value)}
                      />
                      <label htmlFor={todo.id} className={`${currentTheme}`}>
                        <BsCheck
                          className={`${styles.circle} ${currentTheme}`}
                        />
                        <span>{todo.todo}</span>
                      </label>
                      <VscChromeClose
                        className={styles.iconClose}
                        onClick={() => deleteTodo(todo.id)}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoListComponent;
