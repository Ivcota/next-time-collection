import React, { FC } from "react";
import styles from "../styles/AppContainer.module.css";

const AppContainer: FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AppContainer;
