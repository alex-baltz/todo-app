import React from "react";
import styles from "../styles/BlankList.module.scss";
const BlankListComponent = ({ todoList, theme }) => {
  const currentTheme = theme === "dark" ? styles.dark : styles.light;
  return (
    <>
      {!todoList.length ? (
        <div className={`${styles.blankListContainer} ${currentTheme}`}>
          <h2 className={`${styles.title} ${currentTheme}`}>
            No Current Todos
          </h2>
          <span className={`${styles.description} ${currentTheme}`}>
            You can do whatever you want
          </span>
        </div>
      ) : null}
    </>
  );
};

export default BlankListComponent;
