import AboutSection from "./sections/HomePage/AboutSection";
import Banner from "./sections/HomePage/Banner";
import Contact from "./sections/HomePage/Contact";
import NewScenarios from "./sections/HomePage/NewScenarios";
import PopularScenarios from "./sections/HomePage/PopularScenarios";
import UserReviewsSection from "./sections/HomePage/UserReviewsSection";

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutSection />
      <PopularScenarios />
      <NewScenarios />
      <UserReviewsSection />
      <Contact />
    </main>
  );
};

export default Home;
