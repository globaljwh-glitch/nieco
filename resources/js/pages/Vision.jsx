import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Vision = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/ovm.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Vision, Mission & Values</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="ovmBlocks blockOverImage">
         <div class="container">
            <div class="row">
               <div class="col-md-5 d-flex align-items-center">
                  <div><img src="images/our-vision.png" alt="imgResponsive" /></div>
               </div>
               <div class="col-md-7 d-flex align-items-center">
                  <div>
                     <h2>Our Vision</h2>
                     <p>Our vision is to build a growing and sustainable multinational corporation specializing in specialty ingredients and technology-based products, to acquire and maintain global leadership position in specific areas of our industries, to continually create new opportunities for growth in our strategic businesses, to be among the most admired companies to work for, and to consistently deliver a higher return on capital than our peers.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="greyBg ovmBlocks blockOverImage">
         <div class="container">
            <div class="row">
               <div class="col-md-7 d-flex align-items-center">
                  <div>
                     <h2>Our Mission</h2>
                     <p>Our Mission is to build a growing and sustainable multinational corporation specializing in specialty ingredients and technology-based products, to acquire and maintain global leadership position in specific areas of our industries, to continually create new opportunities for growth in our strategic businesses, to be among the most admired companies to work for, and to consistently deliver a higher return on capital than our peers.</p>
                  </div>
               </div>
               <div class="col-md-5 d-flex align-items-center"><img src="images/our-mission.png" alt="imgResponsive" /></div>
            </div>
         </div>
      </section>
      <section class="ovmBlocks">
         <div class="container">
            <div class="row">
               <div class="col-md-12 text-center">
                  <h2>Our Values</h2>
                  <p class="paddingLR150">Our values guide every aspect of our work, ensuring integrity, responsibility, and long-term partnerships. Explore how our principles shape our culture and connect with our team to learn more about our approach to trust, quality, and collaboration.</p>
               </div>
               <div class="col-md-12">
                  <ul class="listing01 ourValues">
                     <li><b>Customer Commitment</b> – We continuously seek ways to exceed the expectations of our customers, and we are always focused on their success.</li>
                     <li><b>Safety</b> – We consistently provide a safe working environment and expect our associates to operate safely in all circumstances.</li>
                     <li><b>Integrity</b> – We value honesty and comply with the strict ethical standards written in our company’s Code of Conduct, which governs our employees and business partners.</li>
                     <li><b>Teamwork</b> – We work together as a strong, united team and help one another succeed; we expect cooperation and open communication between all associates.</li>
                     <li><b>Respect</b> – We treat others with respect while conducting business, both within and outside of the company.</li>
                     <li><b>Diversity and Inclusion</b> – We are committed to creating a work environment that encourages, values, and fully leverages diverse backgrounds, experiences, and cultures.</li>
                     <li><b>Excellence</b> – We set high expectations, holding ourselves accountable for results. We work with a strong sense of urgency and strive for flawless execution.</li>
                     <li><b>Entrepreneurship</b> – We always encourage fresh, new ideas and innovative thinking in the pursuit of constructive change.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
};

export default Vision;
