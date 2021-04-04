import React from 'react'
import Layout from "../../components/Layout";
import ExploreBox from "../../components/ExploreBox"
import styles from "./Explore.module.css"
export default function Explore() {
    return (
      <>
        <Layout page="Explore">
            <article className={styles.containerMain}>
              <div className={styles.container}>
                <div className="blockTextExplore">
                <section className="centerBlockText">
                    <h2>Explore the World</h2>
                    <p>We seek to provide the most authentic content from athelets adventures, explorers and travellers arround the word. Our long term mission is to educate inspire and enable at peoples to experience & protect wildemest</p>
                </section>
                </div>
                <div className="containerExplore">
                <ExploreBox linkImage="/multimedia/naeroyfjord.jpeg" title="Naeroyfjord" subtitle="NORWAY" altImage="Naeroyfjord"/>
                <ExploreBox linkImage="/multimedia/antelope-canyon.jpeg" title="Antelope Canyon" subtitle="UNITED STATES" altImage="Antelope canyon"/>
                <ExploreBox linkImage="/multimedia/grossglockner.jpeg" title="Grossglockner" subtitle="AUSTRA" altImage="Grossglockner"/>
                </div>
              </div>  
            </article>
        </Layout>
      </>
    );
}
