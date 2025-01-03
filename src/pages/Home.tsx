import AboutSection from "./sections/AboutSection"
import Banner from "./sections/Banner"
import NewScenarios from "./sections/NewScenarios"
import PopularScenarios from "./sections/PopularScenarios"


const Home = () => {
  return (
    <main>
        <Banner/>
        <AboutSection/>
        <PopularScenarios/>
        <NewScenarios/>
    </main>
  )
}

export default Home