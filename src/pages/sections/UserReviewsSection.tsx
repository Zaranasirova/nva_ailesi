import { Link } from "react-router-dom";



const UserReviewsSection = () => {
  return (
    <section className="userReviews">
      <div className="container">
        <h2 className="head-title">İstifadəçi rəyləri</h2>
        <div className="customer-feed-back-box">
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
              
            </div>
          </div>
          <div className="feedback-right"></div>
        </div>
      </div>
    </section>
  );
};

export default UserReviewsSection;
