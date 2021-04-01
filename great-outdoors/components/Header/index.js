import React, { useEffect, useRef } from "react";
import PowerSlap from "../../public/multimedia/homevideo.mp4";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
    const videoRef = useRef();

    useEffect(() => {
      setTimeout(() => {
        videoRef.current.play();
      }, 5000);
    }, []);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.containerBlack}>
        <h1 className={styles.title}>The Great Outdoors</h1>
        <p className={styles.subtitle}>Wonder often, Wonder always</p>
        <div className={styles.arrayBottom}>
          <Image
            src="/multimedia/down-arrow.svg"
            height={40}
            width={40}
            alt="An SVG of arrow"
          />
        </div>
      </div>
      <video autoPlay loop muted ref={videoRef} style={{
          position:"absolute",
          width: "100%",
          left:"50%",
          top:"50%",
          height:"100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex:"-1"
      }}>
        <source src={PowerSlap} type="video/mp4" />
      </video>
    </div>
    </>
  );
}
