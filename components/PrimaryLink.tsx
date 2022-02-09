import Link from "next/link";
import React from "react";
import styles from "../styles/PrimaryLink.module.css";

interface Props {
  href: string;
}

const PrimaryLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className={styles.link}> {children} </a>
    </Link>
  );
};

export default PrimaryLink;
