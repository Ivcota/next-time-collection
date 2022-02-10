import React, { FC } from "react";
import styles from "../styles/ListComponent.module.css";

const ListComponent: FC = ({ children }) => {
  return <div className={styles["list-component"]}> {children} </div>;
};

export default ListComponent;
