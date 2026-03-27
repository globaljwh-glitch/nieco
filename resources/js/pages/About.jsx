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

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/banner-05.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>About Us</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="tabbingSection">
         <div class="container">
            <div class="row">
               <div class="col-md-12 m-auto">
                  <ul class="nav nav-tabs responsive-tabs" id="authTab">
                   <li class="nav-item">
                     <a class="nav-link active" data-bs-toggle="tab" href="#about">About</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" data-bs-toggle="tab" href="#visionMission">Vision &amp; Mission</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" data-bs-toggle="tab" href="#values">Values</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" data-bs-toggle="tab" href="#strategies">Strategies</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" data-bs-toggle="tab" href="#organizationChart">Organization Chart</a>
                   </li>

                 </ul>

                 <div class="tab-content shadowBlock w-100">

                   <div class="tab-pane fade show active" id="about">

                     <div class="row">
                        <div class="col-lg-12">
                           <div><h4 class="text-blue">About NEICO</h4>
                           <p>NEICO is America’s leading custom blender, pre-mixer and provider of various contract manufacturing/processing and packaging services. We excel in providing the services of dry mixing and liquid compounding of a wide range of high-quality ingredients for customers in the Agricultural, Cosmetics, Fragrance & Personal Care, Food & Beverage, Household & Commercial Cleaning, Industrial Ingredients, Oil & Gas and Pharmaceutical & Fine Ingredients industries; in addition, we have expertise in combinatorial chemistry, controlled reactions, extraction, purification, crystalizing, drying and packaging.</p>
                           <p>NEICO is a reputable specialty ingredients company with its global headquarters in the United States. We add value to our products and services through our global capabilities in sourcing, marketing, sales, technical services, transportation, warehousing and distribution backed by our supply chain partners worldwide.</p>
                           <p><strong>Services for NEICO Global Suppliers</strong> – NEICO excels in supporting market penetration into various industries on behalf of our suppliers through our dedicated sales and marketing teams.</p></div>
                        </div>
                     </div>

                     
                   </div>

                   <div class="tab-pane fade" id="visionMission">
                     <div class="row">
                        <div class="col-lg-3 col-md-4 d-flex align-items-center">
                           <img src="images/our-vision.png" alt="" class="imgResponsive visionImage" />
                        </div>
                        <div class="col-lg-9 col-md-8 d-flex align-items-center">
                           <div class="mb-4">
                              <h4 class="text-blue">Our Vision</h4>
                              <p>Our vision is to build a growing and sustainable multinational corporation specializing in specialty ingredients and technology-based products, to acquire and maintain global leadership position in specific areas of our industries, to continually create new opportunities for growth in our strategic businesses, to be among the most admired companies to work for, and to consistently deliver a higher return on capital than our peers.</p>
                           </div>
                        </div>
                     </div>

                     <div class="row">
                        <div class="col-md-9 d-flex align-items-center order-1 order-md-0">
                           <div class="">
                              <h4 class="text-blue">Our Mission</h4>
                              <p>Our mission is to provide highest quality products and services with strongest commitment, passion and reputation. We take our customers’ needs and goals to heart; we don’t just sell them products – we provide value added services and find ways to help our customers grow; our mission gets accomplished every year when our business grows with those of our customers. That is the philosophy in everything we do.</p>
                           </div>
                        </div>
                        <div class="col-md-3 d-flex align-items-center order-0 order-md-1">
                           <img src="images/our-mission.png" alt="" class="imgResponsive visionImage" />
                        </div>
                     </div>
                     
                     
                   </div>

                   <div class="tab-pane fade" id="values">
                     <h4 class="text-blue">Our Values</h4>
                     <p>Our core values are real world statements of how we conduct our business; that is, what governs our decisions and behavior.</p>
                     <ul class="listing01 ourValues">
                        <li><b>Customer Commitment</b> – We continuously seek ways to exceed the expectations of our customers, and are always focused on their success.</li>
                        <li><b>Safety</b> – We will provide a safe working environment, and expect our Associates to operate in a safe manner in all circumstances.</li>
                        <li><b>Integrity</b> – We value honesty and comply with ethical standards written in our company’s Code of Conduct that governs our employees and business partners.</li>
                        <li><b>Teamwork</b> – We will work together as a strong team and help each other succeed; we expect cooperation and open communication between all associates.</li>
                        <li><b>Respect</b> – We will treat others with respect while conducting business, both within and outside of the company.</li>
                        <li><b>Diversity and Inclusion</b> – We are committed to creating a work environment which encourages, values and fully leverages diverse backgrounds, experiences, and cultures.</li>
                        <li><b>Excellence</b> – We set high expectations, holding ourselves accountable for results. We work with a strong sense of urgency and strive for flawless execution.</li>
                        <li><b>Entrepreneurship</b> – We encourage new ideas and innovative thinking in the pursuit of constructive change</li>
                     </ul>
                   </div>

                   <div class="tab-pane fade" id="strategies">

                     <div class="row">
                        <div class="col-lg-3 col-md-4 d-flex">
                           <div class="mb-3"><img src="images/strategies.jpg" alt="" class="imgResponsive" /></div>
                        </div>
                        <div class="col-lg-9 col-md-8 d-flex">
                           <div>
                              <h4 class="text-blue">Strategies</h4>
                              <p>Our strategies are to invest in and fully utilize state-of-the art technologies in order to provide the highest quality products, to offer innovative solutions and deliver excellent values to our customers (our products and services are to add values to our customers’ purchases without adding extra cost), thereby to outperform peers in our industries and to generate consistently profitable and sustainable growth for our company’s employees and shareholders.</p>
                           </div>
                        </div>
                     </div>
                     
                   </div>

                   <div class="tab-pane fade" id="organizationChart">
                     <h4 class="text-blue">Organization Chart</h4>
                     <div class="organizationChart text-center"><img src="images/organization-chart-2.png" alt="Organization Chart" class="imgResponsive" /></div>
                   </div>

                 </div>

               </div>
            </div>
         </div>
      </section>

      {/* Banner */}
      {/* <section className="innerBanner p-0">
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
      </section> */}

      {/* Who We Are */}
      {/* <section className="whoWeAre">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
              <p>
                NEICO is America’s leading custom blender, pre-mixer and provider of various contract manufacturing/processing and packaging services. We excel in providing the services of dry mixing and liquid compounding of a wide range of high-quality ingredients for customers in the Agricultural, Cosmetics, Fragrance & Personal Care, Food & Beverage, Household & Commercial Cleaning, Industrial Ingredients, Oil & Gas and Pharmaceutical & Fine Ingredients industries; in addition, we have expertise in combinatorial chemistry, controlled reactions, extraction, purification, crystalizing, drying and packaging.</p>

<p>NEICO is a reputable specialty ingredients company with its global headquarters in the United States. We add value to our products and services through our global capabilities in sourcing, marketing, sales, technical services, transportation, warehousing and distribution backed by our supply chain partners worldwide.</p>

<p><b>Services for NEICO Global Suppliers</b> – NEICO excels in supporting market penetration into various industries on behalf of our suppliers through our dedicated sales and marketing teams.
              </p>
            </div>
          </div>
        </div>
      </section> */}

        {/* Industries */}
        {/* <IndustriesSection /> */}

      {/* Partners */}
      {/* <section>
        <div className="container text-center">
          <h2>Our Partners</h2>
          <p className="paddingLR150">
            Over 4,000 Ingredients Blended, Premixed or Compounded To Customers’ Specifications. We Provide Dry Mixes and Liquid Compounds with Customers’ Formulations. Select From the Following Categories of Ingredients and Enter Into Confidentiality/Non-Disclosure agreements With Us.
          </p>

          <div className="ourPartnerBlockSlider">
                <PartnerSlider />
          </div>
        </div>
      </section> */}

      {/* Strategically Located */}
      {/* <section className="greyBg blockOverImage">
        <div className="container">
            <StrategicSection />
        </div>
      </section> */}

        {/* Countries */}
        {/* <CountriesSection /> */}
      <Footer />
    </>
  );
};

export default About;
