import { Link } from "react-router-dom";
import banner from "../../assets/image/ikea_1.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <Link to={"/"} className="banner-item">
          <div className="banner-image">
            {" "}
            <img src={banner} alt="banner" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
