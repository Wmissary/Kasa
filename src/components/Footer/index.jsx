import logoFooter from "../../assets/logo_footer.svg";
import "../../css/Footer/style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo" className="logo" />
      <p className="footer_text">© 2023 - All rights reserved</p>
    </footer>
  );
}
