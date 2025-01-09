import { Link } from "react-router-dom";



const UserReviewsSection = () => {
  return (
    <section className="userReviews-section">
      <div className="userReviews">
        <h2 className="head-title">İstifadəçi rəyləri</h2>
        <div className="customer-feed-back-box" style={{background:"red"}}>
          <div className="container">
          <div className="feedback-left">
            <h2 className="feedback-title">
              İstifadəçilər <span className="feedback-title-span">bizim</span> haqqımızda nə düşünür?
            </h2>
            <p className="feedback-text-prompt" >Zəhmət olmasa dəyərli fikirlərinizi bizimlə bölüşün.</p>
            <div className="feedback-list">
              <ul>
                <li><Link to={"/"}><img src="" alt="" /></Link></li>
                <li><Link to={"/"}><img src="" alt="" /></Link></li>
                <li><Link to={"/"}><img src="" alt="" /></Link></li>
                <li><Link to={"/"}><img src="" alt="" /></Link></li>
              </ul>
              <span>20+ Rəy</span>
            </div>
          </div>
          <div className="feedback-right">
            <div className="latest-feedback-profile">
              <div className="latest-avatar"><img src="" alt="" /></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviewsSection;
