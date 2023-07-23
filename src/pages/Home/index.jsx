import Banner from "../../components/Banner";
import banner_home from "../../assets/banner_home.jpg";
import Card from "../../components/Card";
import data from "../../data/data.json";

import "../../css/pages/Home/style.css";

export default function Home() {
  return (
    <main className="home">
      <Banner image={banner_home} text="Chez vous, partout et ailleurs" />
      <section className="card_container">
        {data.map(lodging => (
          <Card key={lodging.id} lodging={lodging} />
        ))}
      </section>
    </main>
  );
}
