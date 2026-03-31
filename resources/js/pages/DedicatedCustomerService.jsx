import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DedicatedCustomerService = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/dcs.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Dedicated Customer Service</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="">
         <div class="container">
            <div class="row">
               <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                     <h3>Sales & Customer Service</h3>
                     <p>NEICO has the ability to offer customers lower priced options to branded equivalents that carry a premium price, without sacrificing any quality or service support. Proper handling, quality, and regulatory compliance of our ingredients is guaranteed to our customers, and is absolutely necessary given the critical nature that these ingredients play in the finished products. Through it’s dedicated sales force for different regions and industry segments, NEICO team is able to offer dedicated customer service in terms of timely response & technical support.</p>
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
                        <img src="images/services/dcs-large-thumb-01.jpg" class="imgResponsive" />
                     </div>
                     <div class="imgOverContentThumb">
                        <img src="images/services/dcs-large-thumb-02.jpg" class="imgResponsive" />
                     </div>
                     <div class="imageOverContentBox">
                        <h2>Support That Puts You First</h2>
                        <p class="text-left mb-0">We are committed to delivering a customer experience built on responsiveness, expertise, and reliability. Our dedicated service team works closely with every client to understand requirements, provide accurate information, and ensure a smooth journey from initial inquiry to after-sales support.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="servicesSection">
         <div class="container">
            <div class="row">
               <div class="col-md-12 text-center">
                  <h2>Reliable Service at Every Step</h2>
                  <p class="paddingLR150">Our customer service approach is built on responsiveness, expertise, and reliability. We partner closely with every client to understand requirements, provide accurate guidance, and ensure a smooth journey from inquiry to delivery and ongoing support.</p>
               </div>
               <div class="infoBlockServicesList">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="infoBlockServices d-flex align-items-stretch justify-content-start align-items-center bg-white">
                           <div class="d-flex imageThumb"><img src="images/facilities-thumb-03.jpg" alt="" /></div>
                           <div class="infoBlockPosition infoBlockPositionRight d-flex align-items-center">
                              <div>
                                 <h4 class="text-green text-uppercase">Responsive & Reliable Assistance</h4>
                                 <p>Timely support is essential to your operations. Our customer service team ensures quick responses, clear updates, and dependable coordination across all stages of engagement. Whether you need product information, order updates, or issue resolution, we act promptly to keep your processes moving without disruption. We maintain structured communication channels and defined service workflows so that every request is tracked, managed, and resolved efficiently. Our goal is to provide confidence and peace of mind through dependable, accessible support whenever you need it.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-12">
                        <div class="infoBlockServices d-flex align-items-stretch justify-content-start align-items-center bg-white">
                           <div class="d-flex order-md-1 order-0 imageThumb"><img src="images/services/dcs-thumb-02.jpg" alt="" /></div>
                           <div class="infoBlockPosition infoBlockPositionLeft order-md-0 order-1 d-flex align-items-center">
                              <div>
                                 <h4 class="text-green text-uppercase">Expert Product &amp; Technical Guidance</h4>
                                 <p>Our service professionals combine deep product knowledge with practical industry understanding to provide accurate and meaningful assistance. From helping you select the right materials to clarifying specifications and applications, we ensure informed decisions at every step. We also support specialized and hard-to-source requirements, leveraging our sourcing expertise and technical insight to deliver effective solutions. This consultative approach ensures you receive not just products, but the right solutions for your operational needs.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-12">
                        <div class="infoBlockServices d-flex align-items-stretch justify-content-start align-items-center bg-white">
                           <div class="d-flex imageThumb"><img src="images/services/dcs-thumb-03.jpg" alt="" /></div>
                           <div class="infoBlockPosition infoBlockPositionRight d-flex align-items-center">
                              <div>
                                 <h4 class="text-green text-uppercase">Seamless Order & After-Sales Experience</h4>
                                 <p>We deliver a transparent and well-coordinated service experience from quotation through delivery and beyond. Our team manages order processing, documentation, and status tracking with precision, keeping you informed at every stage. After delivery, we continue to support you with follow-up assistance, clarifications, and ongoing service to ensure satisfaction and continuity. By simplifying processes and maintaining accountability, we create a smooth and dependable customer journey that supports your business success.</p>
                              </div>
                           </div>
                        </div>
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

export default DedicatedCustomerService;
