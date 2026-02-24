import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountriesSection from "../components/CountriesSection";

const Facility = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/strategies.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Strategies</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="">
         <div class="container">
            <div class="row">
               <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                     <p>Our strategies are to invest in and fully utilize state-of-the art technologies in order to provide the highest quality products, to offer innovative solutions and deliver excellent values to our customers (our products and services are to add values to our customers’ purchases without adding extra cost), thereby to outperform peers in our industries and to generate consistently profitable and sustainable growth for our company’s employees and shareholders.</p>
                     <hr class="underLineRed mt-5" />
               </div>
            </div>
         </div>
      </section>
      <section class="greyBg blockOverImage">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="imgOverContentThumbOuter positionRelative d-flex justify-content-start align-items-center">
                     <div class="imgOverContentThumb">
                        <img src="images/strategically-located-01.jpg" class="imgResponsive" />
                     </div>
                     <div class="imgOverContentThumb">
                        <img src="images/strategically-located-02.jpg" class="imgResponsive" />
                     </div>
                     <div class="imageOverContentBox">
                        <h2 class="text-blue">Our Strategic Approach</h2>
                        <p class="text-left mb-0">We have built long term relationships with strategic partners throughout the world, Our reputation as a “Value Added Partner” with an extensive global supply network and local storage and distribution points throughout the United States to serve our loyal exist accounts and enable us to develop and serve new customers in the markets where we operate.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="whatWeDo">
         <div class="container">
            <div class="row">
               <div class="col-md-12 text-center">
                  <h2>Why Our Strategies Work</h2>
                  <p class="paddingLR150">Seeking the right partnership for strategic growth. With vendor/supplier’s support and participation, NEICO. conducts in house training for Management, Sales, Customer Service and Technical Service Teams:</p>
               </div>
            </div>
            <div class="mt-4">
               <div class="row">
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">Data-Driven Decisions:</h4>
                     <ul class="mb-0">
                        <li>Research-driven and data-backed</li>
                        <li>Customized to your business context</li>
                        <li>Practical and implementable</li>
                        <li>Focused on measurable outcomes</li>
                        <li>Scalable for future growth</li>
                        <li>Sales Objectives and Strategy Alignment</li>
                     </ul>
                     </div>
                  </div>
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">Tailored to Your Business:</h4>
                     <ul class="mb-0">
                        <li>Product literature and technical documentation</li>
                        <li>Samples and application guidance</li>
                        <li>Optimal inventory planning</li>
                        <li>Competitive pricing structures</li>
                     </ul>
                     </div>
                  </div>
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">Practical & Actionable:</h4>
                     <ul class="mb-0">
                        <li>Generating targeted customer lead lists</li>
                        <li>Conducting joint customer calls with suppliers</li>
                        <li>Marketing team involvement in developing new product lines</li>
                        <li>IContinuous training to stay aligned with current industry trends</li>
                     </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <section class="greyBg">
         <div class="location-content">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 text-center">
                     <h2>Countries We Do Business With</h2>
                     <p>Northeast Ingredients Company (NEICO) has various distribution facilities reaching more than 1,000 customers worldwide.</p>
                  </div>
               </div>
            </div>
            <div class="countryList">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-6 mapBg flexCol justify-content-center"><img src="http://globalfoodscorp.com/public/img/new/ufc-map.png" alt="" class="imgResponsive"></div>
                     <div class="col-lg-6 flexCol">
                        <ul class="countryListWedoBussiness">
                           <li>USA</li>
                           <li>Argentina</li>
                           <li>Australia</li>
                           <li>Belgium</li>
                           <li>Brazil</li>
                           <li>Cambodia</li>
                           <li>Canada</li>
                           <li>Chile</li>
                           <li>China</li>
                           <li>Colombia</li>
                           <li>Czech Republic</li>
                           <li>Egypt</li>
                           <li>Estonia</li>
                           <li>France</li>
                           <li>French Guiana</li>
                           <li>Germany</li>
                           <li>Guyana</li>
                           <li>Hong Kong</li>
                           <li>India</li>
                           <li>Indonesia</li>
                           <li>Israel</li>
                           <li>Italy</li>
                           <li>Japan</li>
                           <li>Malaysia</li>
                           <li>Mexico</li>
                           <li>Myanmar</li>
                           <li>Netherlands</li>
                           <li>New Zealand</li>
                           <li>Norway</li>
                           <li>Pakistan</li>
                           <li>Peru</li>
                           <li>Philippines</li>
                           <li>Russia</li>
                           <li>Saudi Arabia</li>
                           <li>Singapore</li>
                           <li>South Africa</li>
                           <li>South Korea</li>
                           <li>Spain</li>
                           <li>Swiss</li>
                           <li>Taiwan of China</li>
                           <li>Thailand</li>
                           <li>Turkey</li>
                           <li>UAE</li>
                           <li>UK</li>
                           <li>Ukraine</li>
                           <li>Uruguay</li>
                           <li>Venezuela</li>
                           <li>Vietnam</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section> */}
      
        <CountriesSection />
      

      <Footer />
    </>
  );
};

export default Facility;
