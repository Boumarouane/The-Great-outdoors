import Image from 'next/image'
import React from 'react'
import styles from "./journal.module.css"

export default function JournalBox({image, altImg, date, title, description}) {
    return (
        <section className={styles.container}>
            <div className={styles.containerImg}>
                <Image src={image} height={350} width={600} alt={altImg}/>
            </div>
            <p className={styles.date}>{date}</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </section>
    )
}
