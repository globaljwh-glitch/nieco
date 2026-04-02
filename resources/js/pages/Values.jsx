import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Values = () => {
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
                  <h1>Values</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="">
         <div class="container">
            <div class="row">
               <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-left">
                    {/* <h4 class="text-blue">Our Values</h4> */}
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
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
};

export default Values;
