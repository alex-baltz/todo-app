import Image from "next/image";
import React from "react";
import styles from "../styles/Theme.module.scss";
const ThemeComponent = ({ theme, setTheme }) => {
  return (
    <div className={styles.headerContainer}>
      <h1>Todo</h1>
      <div className={styles.themeContainer}>
        {theme === "light" ? (
          <Image
            className={styles.icon}
            src="/icon-moon.svg"
            alt="Change Theme to Dark"
            height="50"
            width="50"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <Image
            className={styles.icon}
            src="/icon-sun.svg"
            alt="Change Theme to Light"
            height="50"
            width="50"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeComponent;
