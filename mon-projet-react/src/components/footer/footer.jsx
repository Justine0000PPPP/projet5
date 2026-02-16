import logo from "../../assets/images/logofooter.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <img src={logo} alt="Logo Kasa" className="footer-logo" />

      {/* Texte en dessous */}
     <div className="footer-text">
      <p > © 2026 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;