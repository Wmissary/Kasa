import Banner from "../../components/Banner";
import banner_home from "../../assets/banner_home.jpg";
import Card from "../../components/Card";
import data from "../../data/data.json";

import "../../css/style.css";

export default function Home() {
  return (
    <main className="home">
      <Banner image={banner_home} text="Chez vous, partout et ailleurs" />
      <section className="card_container">
        {data.map(item => (
          <Card key={item.id} image={item.cover} text={item.title} />
        ))}
      </section>
    </main>
  );
}
