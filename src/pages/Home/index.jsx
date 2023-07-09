import Banner from "../../components/Banner";
import banner_home from "../../assets/banner_home.jpg";

export default function Home() {
  return (
    <main className="main">
      <Banner image={banner_home} text="Chez vous, partout et ailleurs" />
    </main>
  );
}
