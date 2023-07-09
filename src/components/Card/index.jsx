import "../../css/Card/style.css";

export default function Card({ image, text }) {
  return (
    <div className="card">
      <img src={image} alt="couverture" className="card_img" />
      <p className="card_text">{text}</p>
    </div>
  );
}
