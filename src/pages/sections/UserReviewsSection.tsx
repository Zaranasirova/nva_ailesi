import { Link } from "react-router-dom";
import star from "../../assets/image/Star 1.svg";
import ellipse_image1 from "../../assets/image/Ellipse 1.png";
import ellipse_image2 from "../../assets/image/Ellipse 2 (2).png";
import ellipse_image3 from "../../assets/image/Ellipse 3.jpg";
import ellipse_image4 from "../../assets/image/Ellipse 4.png";

const UserReviewsSection = () => {
  return (
    <section className="userReviews-section">
      <div className="userReviews">
        <h2 className="head-title">İstifadəçi rəyləri</h2>
        <div className="customer-feed-back-box">
          <div className="container customer-feedback">
            <div className="feedback-left">
              <p className="feedback-title">
                İstifadəçilər <span className="feedback-title-span">bizim</span>{" "}
                haqqımızda nə düşünür?
              </p>
              <p className="feedback-text-prompt">
                Zəhmət olmasa dəyərli fikirlərinizi bizimlə bölüşün.
              </p>
              <div className="feedback-list d-flex">
                <ul className="feedback-list__images">
                  <li className="feedback-list__item">
                    <Link to={"/"}>
                      <img
                        src={ellipse_image1}
                        alt=""
                        className="feedback-list__image"
                      />
                    </Link>
                  </li>
                  <li className="feedback-list__item">
                    <Link to={"/"}>
                      <img
                        src={ellipse_image2}
                        alt=""
                        className="feedback-list__image"
                      />
                    </Link>
                  </li>
                  <li className="feedback-list__item">
                    <Link to={"/"}>
                      <img
                        src={ellipse_image3}
                        alt=""
                        className="feedback-list__image"
                      />
                    </Link>
                  </li>
                  <li className="feedback-list__item">
                    <Link to={"/"}>
                      <img
                        src={ellipse_image4}
                        alt=""
                        className="feedback-list__image"
                      />
                    </Link>
                  </li>
                </ul>
                <span className="feedback-list__count">20+ Rəy</span>
              </div>
            </div>
            <div className="feedback-right">
              <div className="latest-feedback-profile">
                <div className="feedback-profile">
                  <div className="latest-avatar">
                    <img src={ellipse_image1} alt="" />
                  </div>
                  <div className="profile-info">
                  <h3 className="latest-name">Aysu Jafar</h3>
                  <span className="latest-date">12/12/24</span>
                  </div>
                </div>
                <div className="latest-feedback-stars">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
              <div className="latest-feedback-text">
                <p className="latest-text">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar ac et
                  fermentum nibh fusce neque sapien purus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviewsSection;
