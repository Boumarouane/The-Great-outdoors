import React from "react";
import styles from "./Nav.module.css";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.listeBox}>
        <li className={styles.liste}>About</li>
        <li className={styles.liste}>Explore</li>
        <li className={styles.icon}>
          <Image
            src="/multimedia/placeholder.svg"
            height={70}
            width={70}
            alt="An SVG of location"
          />
        </li>
        <li className={styles.liste}>Journal</li>
        <li className={styles.liste}>Search</li>
      </ul>
    </nav>
  );
}
