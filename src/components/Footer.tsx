import { Link } from "react-router-dom";
import logo from "../assets/image/nicat logo expand2-01 1.svg";
import mail_vector from "../assets/image/Icons/mail.svg";
import phone_vector from "../assets/image/Icons/phone.svg";
import instagram_vector from "../assets/image/Icons/instagram.svg";
import telegram_vector from "../assets/image/Icons/telegram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="footer-logo-country-text">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="country-text">
            Ölkənin ilk <span>özəl</span> və <span>#dahaFərqli</span> ssenari
            platformu
          </p>
        </div>
        <nav className="footer-navbar">
          <ul className="footer-navbar-list">
            <li className="footer-list">
              <Link to={"/"}>Haqqımızda</Link>
            </li>
            <li className="footer-list">
              <Link to={"/"}>Ssenarilər</Link>
            </li>
            <li className="footer-list">
              <Link to={"/"}>Ssenaristlər</Link>
            </li>
            <li className="footer-list">
              <Link to={"/"}>Əlaqə</Link>
            </li>
          </ul>
        </nav>
        <div className="footer-contact-links">
          <ul className="contact-list">
            <li className="contact-list-item">
              <Link to={"/"}>
                <span><img src={mail_vector} alt="mail_vector" /></span>
                <span>nvailesi.az@gmail.com</span>
              </Link>
            </li>
            <li className="contact-list-item">
              <Link to={"/"}>
                <span><img src={phone_vector} alt="phone_vector" /></span>
                <span>(+994) 00 000 00 00</span>
              </Link>
            </li>
            <li className="contact-list-item">
              <Link to={"/"}>
                <span><img src={instagram_vector} alt="instagram_vector" /></span>
                <span>nvailesi</span>
              </Link>
            </li>
            <li className="contact-list-item">
              <Link to={"/"}>
                <span><img src={telegram_vector} alt="telegram_vector" /></span>
                <span>nvailesi</span>
              </Link>
            </li>
          </ul>
        </div>
      
      </div>
      <div className="copyWrite">
            <p>© 2024 Bütün hüquqlar qorunur</p>
        </div>
    </footer>
  );
};

export default Footer;
