import React from 'react';
import Image from "next/image"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.containerBlack}></div>
            <Image
                src="/multimedia/footer.jpeg"
                alt="footer"
                layout='fill'
                objectFit="cover"
                objectPosition="center"
            /> 
            <p className={styles.copyright}><Image src="/multimedia/copyright.svg" alt="copyright" width={20} height={20} /> 2017 THE GREAT OUTDOORS All rights reserved | project realized <a href="https://github.com/Boumarouane?tab=repositories" target="_blank"> by Issam Boumarouane</a></p>
            <p className={styles.copyrightMobile}><a href="https://github.com/Boumarouane?tab=repositories" target="_blank"> by Issam Boumarouane</a></p>
        </div>
    )
}
