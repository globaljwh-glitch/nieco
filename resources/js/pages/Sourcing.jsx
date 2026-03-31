import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountriesSection from "../components/CountriesSection";

const Sourcing = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/sourcing.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Sourcing</h1>
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
      <section class="greyBg whatWeDo">
         <div class="container">
            <div class="row">
               <div class="col-md-12 text-center">
                  <h2>Who We Are and What We Do</h2>
                  <p class="paddingLR150">Seeking the right partnership for strategic growth.<br />
                  New Product Introduction - Training Program</p>
               </div>
            </div>
            <div class="mt-4">
               <div class="row">
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">With vendor/supplier’s support and participation, NEICO. conducts in house training for Management, Sales, Customer Service and Technical Service Teams:</h4>
                     <ul class="mb-0">
                        <li>Market Knowledge</li>
                        <li>Basic Chemistry</li>
                        <li>Production Process</li>
                        <li>Applications</li>
                        <li>Target Markets</li>
                        <li>Sales Goals</li>
                     </ul>
                     </div>
                  </div>
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">Support from Vendor/Supplier:</h4>
                     <ul class="mb-0">
                        <li>Product Literature and Samples</li>
                        <li>Appropriate Inventory</li>
                        <li>Competitive Price</li>
                     </ul>
                     </div>
                  </div>
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">Profile Customer by Market:</h4>
                     <ul class="mb-0">
                        <li>Generate list of all possible customer leads for sales activity.</li>
                        <li>Participate in a series of on going customer joint calls with supplier.</li>
                        <li>Marketing as key contact during development of new line.</li>
                        <li>On-going training to keep current with industry needs.</li>
                     </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section>
         <div class="container">
            <div class="row">
               <div class="col-md-12 text-center">
                  <h2>Our Strength</h2>
                  <p class="paddingLR150">
                     Strong brand and established relationship in the global chemical industry at all levels.<br />
Optimal & well managed internal cost structure enabling us to deliver cost effective solutions to our customers.<br />
Customized and flexible approach towards offering solutions and services to our customers and suppliers.<br />
Systematic sourcing procedure for ensuring consistent supply of consistent performance products.<br />
Qualified, experienced and dedicated technical team for offering technical support for new business development & offering solutions.<br />
Wide range of specialty ingredients from one source.
                  </p>
               </div>
               <div class="col-md-12 text-center">
                  <h2>Sourcing Procedures</h2>
                  <p class="paddingLR150">NEICO follows stringent purchasing procedures compliant with cGMP and HARPC requirements. Our sourcing procedures ensure that our customers receive the highest quality materials and all needed documentation.</p>
               </div>
               <div class="col-md-12">
                  <div class="procedureSteps">
                     <div class="shadowBlock">
                        <h4 class="text-green">Supplier Identification</h4>
                        <p>Request initial documentation: product safety data sheets, specifications, certificates of analysis, HACCP certificates, FDA registration, ISO, HALAL, Kosher, and more.</p>
                     </div>
                     <div class="shadowBlock">
                        <h4 class="text-green">Audit by Company Personnel or Third Party</h4>
                        <p>Purchasing team will schedule a plant visit and audit or request audit results from approved third party certifying body such as SGS, AIB, BRC, NSF, ASQ .</p>
                     </div>
                     <div class="shadowBlock">
                        <h4 class="text-green">Product Quality Testing</h4>
                        <p>
                           Upon audit completion and acceptance of report, product samples shall be tested.<br />
Products shall be sent to accredited third party testing laboratory.<br />
Test results shall be compared against prior certificates of analysis of that product and of products from other vendors.
                        </p>
                     </div>
                     <div class="shadowBlock">
                        <h4 class="text-green">Initial Order Review</h4>
                        <p>
                           Pallet quantity order up to one load is purchased on trial basis.<br />
Packaging material thoroughly inspected for rips, tears, defects, mislabeling.<br />
Pallets / skids inspected for damage, evidence of microbial growth, or discoloration.
                        </p>
                     </div>
                     <div class="shadowBlock last">
                        <h4 class="text-green">Supplier Approval</h4>
                        <p>Supplier must demonstrate consistent high quality in the product, packaging, shipping time, and customer service for a period no shorter than 6 months to earn full supplier approval</p>
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
      
        {/* <CountriesSection /> */}
        <section class="greyBg">
         <div class="location-content">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 text-center">
                     <h2>Our Supplier Network</h2>
                     <p>NEICO sources specialty ingredients from 15 countries through a well-defined selection process.</p>
                  </div>
               </div>
            </div>
            <div class="countryList">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-6 mapBg flexCol justify-content-center"><img src="images/ufc-map.png" alt="" class="imgResponsive" /></div>
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
      </section>
      <Footer />
    </>
  );
};

export default Sourcing;
