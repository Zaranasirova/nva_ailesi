import { Link } from "react-router-dom";
import logo from "../assets/image/nicat logo expand2-01 1.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="NVAiləsi-logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="navigation">
            <li className="navigation-item">
              <Link to={"/"} className="navigation-link">
                Haqqımızda
              </Link>
            </li>
            <li className="navigation-item">
              <Link to={"/"} className="navigation-link">
                Ssenarilər
              </Link>
            </li>
            <li className="navigation-item">
              <Link to={"/"} className="navigation-link">
                Ssenaristlər
              </Link>
            </li>
            <li className="navigation-item">
              <Link to={"/"} className="navigation-link">
                Əlaqə
              </Link>
            </li>
          </ul>
        </nav>
        <div className="auth">
            <button className="auth-login-button auth-button">Daxil ol</button>
            <button className="auth-register-button auth-button">Qeydiyyat</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
