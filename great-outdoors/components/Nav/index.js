import React from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.listeBox}>
        <Link href="/About">
          <li className={styles.liste}>About</li>
        </Link>
        <Link href="/Explore">
          <li className={styles.liste}>Explore</li>
        </Link>
        <Link href="/">
          <li className={styles.icon}>
            <Image
              src="/multimedia/placeholder.svg"
              height={60}
              width={60}
              alt="An SVG of location"
              />
          </li>
        </Link>
        <Link href="/Journal">
          <li className={styles.liste}>Journal</li>
        </Link>
        <li className={styles.liste}>Search</li>
      </ul>
      <ul className={styles.listeBoxMobile}>
        <li><Image src="/multimedia/menu.svg" height={50} width={50} alt="Menu"/></li>
        <li >Search</li>
      </ul>
    </nav>
  );
}
