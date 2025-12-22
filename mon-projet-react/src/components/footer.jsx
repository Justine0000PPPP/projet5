import logo from "../assets/logo-footer.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="Logo Kasa"
        className="footer-logo"
      />
    </footer>
  );
};

export default Footer;