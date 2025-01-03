import comment from "../../assets/image/comment.svg";
import stars from "../../assets/image/Star 1.svg";
import image from "../../assets/image/image.png";

const PopularScenarios = () => {
  return (
    <section className="popular-scenarios">
      <div className="container popular-section-wrapper">
        <h2 className="head-title">Ən çox oxunan ssenarilər</h2>
        <div className="most-read-box">
          <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
                <span className="read-year">2024</span>
                <span className="read-comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="comment-icon"
                  />
                  <span className="comment-number">0</span>
                </span>
                <span className="read-stars">
                  <img src={stars} alt="stars-svg" className="star-image" />
                  <span className="stars-number">8.2</span>
                </span>
              </div>
              <div className="movie-title">
                <h2>Lorem Ipsum</h2>
              </div>
            </div>
          </div>
          <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
                <span className="read-year">2024</span>
                <span className="read-comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="comment-icon"
                  />
                  <span className="comment-number">0</span>
                </span>
                <span className="read-stars">
                  <img src={stars} alt="stars-svg" className="star-image" />
                  <span className="stars-number">8.2</span>
                </span>
              </div>
              <div className="movie-title">
                <h2>Lorem Ipsum</h2>
              </div>
            </div>
          </div>
          <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
                <span className="read-year">2024</span>
                <span className="read-comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="comment-icon"
                  />
                  <span className="comment-number">0</span>
                </span>
                <span className="read-stars">
                  <img src={stars} alt="stars-svg" className="star-image" />
                  <span className="stars-number">8.2</span>
                </span>
              </div>
              <div className="movie-title">
                <h2>Lorem Ipsum</h2>
              </div>
            </div>
          </div>
          <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
                <span className="read-year">2024</span>
                <span className="read-comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="comment-icon"
                  />
                  <span className="comment-number">0</span>
                </span>
                <span className="read-stars">
                  <img src={stars} alt="stars-svg" className="star-image" />
                  <span className="stars-number">8.2</span>
                </span>
              </div>
              <div className="movie-title">
                <h2>Lorem Ipsum</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularScenarios;
