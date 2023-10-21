import HomeModule from "../components/Modules/HomeModule";
import AboutMeModule from "../components/Modules/AboutMeModule";
import "./HomePage.css";

const HomePage = () => {
    return <div className="content-page">
        <HomeModule />
        <AboutMeModule />
    </div>
};

export default HomePage;