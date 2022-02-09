import React, { FC } from "react";
import styles from "../styles/CenterComponent.module.css";

interface Props {}

const CenterComponent: FC<Props> = ({ children }) => {
  return <div className={styles["center-component"]}>{children}</div>;
};

export default CenterComponent;
