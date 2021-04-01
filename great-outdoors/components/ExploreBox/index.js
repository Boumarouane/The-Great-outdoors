import React from "react";
import styles from "./ExploreBox.module.css";
import Image from "next/image";

export default function ExploreBox({ linkImage, title, subtitle, altImage }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
          <Image className={styles.imageBack} src={linkImage} layout="fill" objectFit="cover"  alt={altImage} />
      </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
