import React, { useEffect, useRef } from "react";
import PowerSlap from "../../public/multimedia/homevideo.mp4";
import styles from "./Header.module.css"
export default function Header() {
    // const videoRef = useRef();

    // useEffect(() => {
    //   setTimeout(() => {
    //     videoRef.current.play();
    //   }, 5000);
    // }, []);
  return (
    <>
    <div>
        <div className={styles.containerBlack}></div>
      <video autoPlay loop muted style={{
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
