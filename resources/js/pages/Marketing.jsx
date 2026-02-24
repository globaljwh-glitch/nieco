import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Marketing = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/marketing.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Marketing</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="">
         <div class="container">
            <div class="row">
               <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                     <h3>Driving Growth Through Insight, Positioning, and Market Reach</h3>
                     <p>With more than three decades of experience and deep market knowledge in specialty ingredients, NEICO offers comprehensive market intelligence and strategic advisory services to support informed business decisions and successful market expansion.</p>
                     <p>Our team combines industry expertise, global sourcing insight, and on-ground market understanding to deliver reliable research and actionable intelligence tailored to client objectives. We conduct in-depth industry analysis, product and application surveys, competitor benchmarking, and consumer behavior studies to help organizations identify opportunities and mitigate risks.</p>
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
                        <img src="images/services/marketing-large-thumb-01.jpg" class="imgResponsive" />
                     </div>
                     <div class="imgOverContentThumb">
                        <img src="images/services/marketing-large-thumb-02.jpg" class="imgResponsive" />
                     </div>
                     <div class="imageOverContentBox">
                        <h2>Strategic Marketing</h2>
                        <p class="text-left mb-0">Our marketing approach focuses on understanding markets, strengthening brand positioning, and expanding reach across target sectors. We combine industry insight, strategic planning, and customer understanding to connect the right products with the right audiences. Through structured marketing initiatives, we help build visibility, demand, and long-term market presence.</p>
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
                           <div class="d-flex imageThumb"><img src="images/services/marketing-thumb-01.jpg" alt="" /></div>
                           <div class="infoBlockPosition infoBlockPositionRight d-flex align-items-center">
                              <div>
                                 <h4 class="text-green text-uppercase">Market Insight & Research</h4>
                                 <p>Effective marketing begins with deep market understanding. We analyze industry trends, customer needs, and competitive landscapes to identify opportunities and guide strategic decisions. This research-driven approach ensures our marketing efforts are targeted, relevant, and aligned with evolving market demands.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-12">
                        <div class="infoBlockServices d-flex align-items-stretch justify-content-start align-items-center bg-white">
                           <div class="d-flex order-md-1 order-0 imageThumb"><img src="images/services/marketing-thumb-02.jpg" alt="" /></div>
                           <div class="infoBlockPosition infoBlockPositionLeft order-md-0 order-1 d-flex align-items-center">
                              <div>
                                 <h4 class="text-green text-uppercase">Brand Positioning & Communication</h4>
                                 <p>We develop clear and consistent brand positioning that communicates value, quality, and reliability. Through structured messaging and professional communication materials, we ensure our offerings are presented with clarity and credibility across all channels and customer touchpoints.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-12">
                        <div class="infoBlockServices d-flex align-items-stretch justify-content-start align-items-center bg-white">
                           <div class="d-flex imageThumb"><img src="images/services/marketing-thumb-03.jpg" alt="" /></div>
                           <div class="infoBlockPosition infoBlockPositionRight d-flex align-items-center">
                              <div>
                                 <h4 class="text-green text-uppercase">Market Development & Outreach</h4>
                                 <p>Our marketing initiatives focus on expanding presence across industries and regions. Through targeted outreach, sector engagement, and relationship-building activities, we strengthen market connections and generate new opportunities. This proactive approach supports sustained growth and broader market access.</p>
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

export default Marketing;
