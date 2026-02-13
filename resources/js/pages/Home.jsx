import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import PartnerSlider from "../components/PartnerSlider";
import WhoWeAre from "../components/WhoWeAre";
import ProductSection from "../components/ProductSection";
import FacilitySection from "../components/FacilitySection";
import IndustriesSection from "../components/IndustriesSection";
import CountriesSection from "../components/CountriesSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <BannerSlider />
            <PartnerSlider />
            <WhoWeAre />
            <ProductSection />
            <FacilitySection />
            <IndustriesSection />
            <CountriesSection />
            <Footer />
        </>
    );
};

export default Home;
