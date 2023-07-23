import { NavLink } from "react-router-dom";

import "../../css/pages/NotFound/style.css";

export default function PageNotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound_title">404</h1>
      <p className="notfound_text">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="notfound_link" end>
        Retour à la page d'accueil
      </NavLink>
    </main>
  );
}
