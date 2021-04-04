import ExploreBox from "../components/ExploreBox";
import JournalBox from "../components/JournalBox";
import Layout from "../components/Layout";
import More from "../components/More";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Video from "../public/multimedia/homevideo.mp4"


export default function Home() {
  return (
    <div>
      <Layout page="Accueil" header={<Header/>} footer={<Footer/>}>
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
        <More textLink="SEE MORE" link="/Explore" />
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
        <More textLink="ALL POSTS" link="/Journal"/>
      </Layout>
    </div>
  )
}
