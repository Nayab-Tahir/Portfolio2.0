import HomeModule from "../components/Modules/HomeModule";
import AboutMeModule from "../components/Modules/AboutMeModule";
import ContactModule from "../components/Modules/ContactModule";
import "./HomePage.css";

const HomePage = () => {
    return <div className="content-page">
        <HomeModule />
        <AboutMeModule />
        <ContactModule />
    </div>
};

export default HomePage;