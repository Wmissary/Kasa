import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "../../css/components/Header/style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo_container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <NavLink to="/" className="nav_link" end>
              Accueil
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/about" className="nav_link" end>
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
