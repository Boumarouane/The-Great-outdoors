import React from 'react';
import Layout from "../../components/Layout";
import JournalBox from "../../components/JournalBox"
import styles from "./Journal.module.css"


export default function Journal() {
    return (
      <div>
        <Layout page="Journal">
          <article className={styles.containerMain}>
            <div className={styles.container}>
            <div className="blockTextJournal">
          <section className="centerBlockText">
              <h2>The Journal</h2>
              <p>Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences</p>
          </section>
        </div>
        <div className="containerJournal">
          <JournalBox image="/multimedia/forest.jpeg" altImg="forest" date="MAY 30 2017" title="An Unforgettable" description="If you have one day to visit Yosemite National Park and you want to make the most ou of it."/>
          <JournalBox image="/multimedia/golden-gate.jpeg" altImg="golden-gate" date="MAY 28 2017" title="Symphonies in Steel" description="Crossing the Golden Gate Bridge from San Francesco, you arrive in Marin even before landing on solid ground."/>
        </div>
            </div>
          </article>
        </Layout>
      </div>
    );
}
