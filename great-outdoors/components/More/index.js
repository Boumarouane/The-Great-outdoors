import React from "react";
import styles from "./More.module.css";
import Link from "next/link";
import Image from "next/image"

export default function More({ textLink, link }) {
  return (
    <div className={styles.container}>
      <Link href={link}>
        <a className={styles.text}>{textLink} <Image src="/multimedia/next.svg" height={10} width={10} alt="arrow right"/></a>
      </Link>
    </div>
  );
}
