import AboutSection from "./sections/AboutSection";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import NewScenarios from "./sections/NewScenarios";
import PopularScenarios from "./sections/PopularScenarios";
import UserReviewsSection from "./sections/UserReviewsSection";

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
