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
            <img src="images/banner/facilities-logistics.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Facilities & Logistics</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="">
         <div class="container">
            <div class="row">
               <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                     <p>With a dedicated team of Sourcing at NEICO who follow a rigorous supplier evaluation method before approving the manufacturing site and the products which we offer to customers. Thereby enabling us to offer our customers a wide range of specialty ingredients of consistent quality on a long term supply contract basis. Through our knowledge & network, we also offer strategic services to our customers for sourcing products which are currently not in our offering.</p>
                     <hr class="underLineRed mt-5" />
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
                     <p>We bring the world’s supply of specialty ingredients to your doorstep and service it locally to our customers through our facilities and logistics network.</p>
                  </div>
               </div>
            </div>
            <div class="countryList">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-6 mapBg flexCol justify-content-center"><img src="http://globalfoodscorp.com/public/img/new/ufc-map.png" alt="" class="imgResponsive" /></div>
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
