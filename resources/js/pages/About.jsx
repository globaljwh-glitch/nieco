import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import PartnerSlider from "../components/PartnerSlider";
import StrategicSection from "../components/StrategicSection";
import IndustriesSection from "../components/IndustriesSection";
import CountriesSection from "../components/CountriesSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Banner */}
      <section className="innerBanner p-0">
        <div className="bannerImage">
          <img
            src="/images/banner/banner-05.jpg"
            className="imgHeightResponsive"
            alt="About Banner"
          />
          <div className="overlay"></div>
        </div>
        <div className="bannerContentOuter">
          <div className="container">
            <div className="bannerContent text-center m-auto">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="whoWeAre">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
              <p>
                NEICO is America’s leading custom blender, pre-mixer and provider of various contract manufacturing/processing and packaging services. We excel in providing the services of dry mixing and liquid compounding of a wide range of high-quality ingredients for customers in the Agricultural, Cosmetics, Fragrance & Personal Care, Food & Beverage, Household & Commercial Cleaning, Industrial Ingredients, Oil & Gas and Pharmaceutical & Fine Ingredients industries; in addition, we have expertise in combinatorial chemistry, controlled reactions, extraction, purification, crystalizing, drying and packaging. NEICO is a reputable specialty ingredients company with its global headquarters in the United States. We add value to our products and services through our global capabilities in sourcing, marketing, sales, technical services, transportation, warehousing and distribution backed by our supply chain partners worldwide.
              </p>
              <hr className="underLineRed mt-5" />
            </div>
          </div>
        </div>
      </section>

        {/* Industries */}
        <IndustriesSection />

      {/* Partners */}
      <section>
        <div className="container text-center">
          <h2>Our Partners</h2>
          <p className="paddingLR150">
            Over 4,000 Ingredients Blended, Premixed or Compounded To Customers’ Specifications. We Provide Dry Mixes and Liquid Compounds with Customers’ Formulations. Select From the Following Categories of Ingredients and Enter Into Confidentiality/Non-Disclosure agreements With Us.
          </p>

          <div className="ourPartnerBlockSlider">
                <PartnerSlider />
          </div>
        </div>
      </section>

      {/* Strategically Located */}
      <section className="greyBg blockOverImage">
        <div className="container">
            <StrategicSection />
        </div>
      </section>

        {/* Countries */}
        <CountriesSection />
      <Footer />
    </>
  );
};

export default About;
