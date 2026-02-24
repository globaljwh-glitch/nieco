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
                  <p class="paddingLR150">Seeking the right partnership for strategic growth. With vendor/supplier’s support and participation, NEICO. conducts in house training for Management, Sales, Customer Service and Technical Service Teams:</p>
               </div>
            </div>
            <div class="mt-4">
               <div class="row">
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">Training Program includes:</h4>
                     <ul class="mb-0">
                        <li>Market Knowledge</li>
                        <li>Basic Chemistry Fundamentals</li>
                        <li>Production Process</li>
                        <li>Ingredient Applications</li>
                        <li>Target Markets Insights</li>
                        <li>Sales Objectives and Strategy Alignment</li>
                     </ul>
                     </div>
                  </div>
                  <div class="col-md-4 d-flex">
                     <div class="houseTraining shadowBlock w-100">
                     <h4 class="text-green">Support from Vendor/Supplier:</h4>
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
                     <h4 class="text-green">Customer Profiling includes:</h4>
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
      <section>
         <div class="container">
            <div class="row">
               <div class="col-md-12 text-center">
                  <h2>Sourcing Procedures</h2>
                  <p class="paddingLR150">NEICO follows stringent purchasing procedures compliant with cGMP and HARPC requirements. Our sourcing procedures ensure that our customers receive the highest quality materials and all needed documentation.</p>
               </div>
               <div class="col-md-12">
                  <div class="procedureSteps">
                     <div class="shadowBlock">
                        <h4 class="text-green">Supplier Identification</h4>
                        <p>We vet potential suppliers and collect all necessary documentation, including SDS, product specifications, COAs, HACCP, FDA, ISO, Halal, Kosher, and other compliance certificates.</p>
                     </div>
                     <div class="shadowBlock">
                        <h4 class="text-green">Audit by Company Personnel or Third Party</h4>
                        <p>Our team audits facilities—onsite or via third-party reports from SGS, AIB, BRC, NSF, or ASQ—to ensure quality and compliance.</p>
                     </div>
                     <div class="shadowBlock">
                        <h4 class="text-green">Product Quality Testing</h4>
                        <p>After audits, product samples are sent to accredited laboratories for testing.<br />
                        Test results are compared with previous Certificates of Analysis (COAs).<br />
                        Results are benchmarked against similar products from other suppliers to ensure consistency and quality.</p>
                     </div>
                     <div class="shadowBlock">
                        <h4 class="text-green">Initial Order Review</h4>
                        <p>A trial shipment, typically one pallet up to a full load, is ordered to assess handling.<br />
                        Packaging is carefully inspected for defects, mislabeling, or damage.<br />
                        Pallets and skids are checked for contamination, moisture, discoloration, or microbial growth.</p>
                     </div>
                     <div class="shadowBlock last">
                        <h4 class="text-green">Supplier Approval</h4>
                        <p>Suppliers earn final approval only after demonstrating consistent excellence over a minimum six-month period in product quality, packaging reliability, timely delivery, and overall customer service.</p>
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

export default Sourcing;
