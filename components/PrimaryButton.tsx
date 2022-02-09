import Link from "next/link";
import React from "react";
import styles from "../styles/PrimaryButton.module.css";

interface Props {
  href: string;
}

const PrimaryButton: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default PrimaryButton;
