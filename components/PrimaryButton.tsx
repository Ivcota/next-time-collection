import Link from "next/link";
import React from "react";
import styles from "../styles/PrimaryButton.module.css";
import { motion } from "framer-motion";

const PrimaryButton: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = ({ onClick, children }) => {
  return (
    <motion.button onClick={onClick} className={styles.button}>
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
