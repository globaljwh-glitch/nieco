import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OrganizationChart = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/organization.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Organization Chart</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="">
         <div class="container">
            <div class="row">
               <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                     <p>Our organizational structure is designed to ensure clear leadership, efficient decision-making, and seamless collaboration across all departments. Each function works in alignment with our strategic goals to deliver consistent value and excellence. We maintain a well-defined hierarchy that promotes accountability, transparency, and effective communication. This structure enables teams to operate efficiently while remaining agile and responsive to client and market needs. Our organization chart reflects a strong leadership foundation supported by specialized teams across key functional areas. This integrated structure ensures expertise, coordination, and high-quality service delivery.</p>
                     <div class="organizationChart"><img src="images/organization-chart-2.png" alt="Organization Chart" /></div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
};

export default OrganizationChart;
