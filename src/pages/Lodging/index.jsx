import { useParams, Navigate } from "react-router-dom";
import { Fragment } from "react";
import data from "../../data/data.json";

import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";

import "../../css/pages/Lodging/style.css";

export default function Lodging() {
  const { id } = useParams();
  const lodging = data.find(lodging => lodging.id === id);
  if (!lodging) return <Navigate to="/404" />;
  return (
    <main className="lodging">
      <Slideshow pictures={lodging.pictures} />
      <div className="lodging_flex">
        <div className="lodging_informations">
          <h1>{lodging.title}</h1>
          <h2>{lodging.location}</h2>
          <ul className="lodging_tags">
            {lodging.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="lodging_host_informations">
          <div className="lodging_flex">
            <h3>{lodging.host.name}</h3>
            <img src={lodging.host.picture} alt={lodging.host.name} />
          </div>
          <div className="lodging_rating">
            <span>{lodging.rating}</span>
          </div>
        </div>
      </div>
      <div className="lodging_collapses">
        <Collapse title="Description" text={lodging.description} />
        <Collapse
          title="Équipements"
          text={lodging.equipments.map((item, index) => {
            return (
              <Fragment key={item}>
                {index > 0 && <br />}
                {item}
              </Fragment>
            );
          })}
        />
      </div>
    </main>
  );
}
