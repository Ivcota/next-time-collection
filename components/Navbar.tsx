import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOverlay = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>Time Submit</div>
        <img
          onClick={() => setIsOpen(true)}
          src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"
        />
      </nav>
      <div
        className={
          !isOpen
            ? `${styles.overlay} ${styles["overlay--hidden"]}`
            : styles.overlay
        }
      >
        <img
          onClick={() => setIsOpen(false)}
          className={styles.icon}
          src="https://img.icons8.com/ios/50/ffffff/xbox-x.png"
        />

        <div className={styles["overlay-content"]}>
          <Link href="/login">
            <a>Home</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
