import { Link } from "react-router-dom";

import "../../css/Card/style.css";

export default function Card({ lodging: { id, cover, title } }) {
  return (
    <Link to={`/lodging/${id}`} className="card_link">
      <div className="card">
        <img src={cover} alt="couverture" className="card_img" />
        <p className="card_text">{title}</p>
      </div>
    </Link>
  );
}
