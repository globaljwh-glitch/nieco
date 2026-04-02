import { useEffect } from "react";

const facilities = [
    {
        title: "Highest Quality Commitment",
        image: "/images/facilities-thumb-01.jpg",
        position: "right",
        description: `NEICO thrives on innovation. Our commitment to innovation in new technologies coupled with our increasing investment and growing team of highly qualified scientists and technologists make us leaders in the field of premixes of vitamins, minerals, amino acids, dietary fibers and proteins for human food and animal nutrition. We have co-invested with our partners in multiple research and development and manufacturing facilities and our QA/QC Lab has technical capabilities to retest and validate the test results from manufacturers’ certificates of analysis. NEICO adheres to cGMP/HARPC (HACCP) standards, complies with BRC and FSSC22000 standards and the principles of responsible care, and is fully compliant as an FDA registered facility.`
    },
    {
        title: "Cutting Edge Technologies",
        image: "/images/facilities-thumb-02.jpg",
        position: "left",
        description: `Our R & D and Business Development Teams possess highly proficient technical expertise and market insights that our clients seek in an effort to expand and create greater values in their product lines and introduce cutting edge technologies to the marketplace. At NEICO, we strive to develop a synergistic partnerships with our clients in order to improve and strengthen their competitive advantage, demand planning, orders fulfillment and customer satisfaction in all markets where we have operate or have a presence. At NEICO, our core competency is to provide solutions to our existing and new customers by leveraging our global sourcing expertise and extensive portfolio of products and services in North America and all other countries and regions where we operate.`
    },
    {
        title: "Customer Focused",
        image: "/images/facilities-thumb-03.jpg",
        position: "right",
        description: `Customer focus means meeting customers’ needs and expectations throughout the life cycle of product design, sales and marketing, quality control, manufacturing, logistics, customer support, after-sales services, billing and collection. NEICO’s core foundation was created with the customer as the primary focus. We embrace a “Hands-On” approach in providing accurate, timely and reliable service to all our clients. Our customer service team members serve as advocates and strategic partners to our customers as well. They are stakeholders who are responsible for ensuring that each and every order is handled with professionalism and precision, so our customers will happily pay for our products and services with no buyer’s remorse.`
    }
];

const FacilitySection = () => {

   useEffect(() => {
   const buttons = document.querySelectorAll(".accordion-button");

   const handleClick = function () {
      const newImg = this.getAttribute("data-img");
      const img = document.getElementById("mainFacilitiesImage");

      if (!img) return;

      img.style.opacity = 0;
      img.style.transform = "scale(0.95)";

      setTimeout(() => {
         img.src = newImg;
         img.style.opacity = 1;
         img.style.transform = "scale(1)";
      }, 200);
   };

   buttons.forEach(btn => btn.addEventListener("click", handleClick));

   // cleanup (VERY IMPORTANT)
   return () => {
      buttons.forEach(btn => btn.removeEventListener("click", handleClick));
   };

   }, []);

    return (
<>
<section class="servicesSection">
         <div class="container">
            <div class="row ">
               <div class="col-md-12 text-center">
                  <h2 class="text-uppercase mb-5">Highest Quality and Cutting Edge Technolgies</h2>
               </div>
            </div>
            <div class="row align-items-center">
               
               <div class="col-md-6 mb-4 mb-md-0 text-center">
                  <img src="images/facilities-thumb-01.jpg" id="mainFacilitiesImage" class="feature-img" alt="" />
               </div>
               
               <div class="col-md-6">
                  <div class="accordion" id="facilitiesAccordion">
                     
                     <div class="accordion-item">
                        <h2 class="accordion-header">
                           <button class="accordion-button"
                              data-img="images/facilities-thumb-01.jpg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#acc1">
                           Highest Quality Commitment
                           </button>
                        </h2>
                        <div id="acc1" class="accordion-collapse collapse show" data-bs-parent="#facilitiesAccordion">
                           <div class="accordion-body">
                              <p>NEICO thrives on innovation. Our commitment to innovation in new technologies coupled with our increasing investment and growing team of highly qualified scientists and technologists make us leaders in the field of premixes of vitamins, minerals, amino acids, dietary fibers and proteins for human food and animal nutrition. We have co-invested with our partners in multiple research and development and manufacturing facilities and our QA/QC Lab has technical capabilities to retest and validate the test results from manufacturers’ certificates of analysis. NEICO adheres to cGMP/HARPC (HACCP) standards, complies with BRC and FSSC22000 standards and the principles of responsible care, and is fully compliant as an FDA registered facility.</p>
                           </div>
                        </div>
                     </div>
                     
                     <div class="accordion-item">
                        <h2 class="accordion-header">
                           <button class="accordion-button collapsed"
                              data-img="images/facilities-thumb-02.jpg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#acc2">
                           Cutting Edge Technologies
                           </button>
                        </h2>
                        <div id="acc2" class="accordion-collapse collapse" data-bs-parent="#facilitiesAccordion">
                           <div class="accordion-body">
                              <p>Our R & D and Business Development Teams possess highly proficient technical expertise and market insights that our clients seek in an effort to expand and create greater values in their product lines and introduce cutting edge technologies to the marketplace. At NEICO, we strive to develop a synergistic partnerships with our clients in order to improve and strengthen their competitive advantage, demand planning, orders fulfillment and customer satisfaction in all markets where we have operate or have a presence. At NEICO, our core competency is to provide solutions to our existing and new customers by leveraging our global sourcing expertise and extensive portfolio of products and services in North America and all other countries and regions where we operate.</p>
                           </div>
                        </div>
                     </div>
                     
                     <div class="accordion-item">
                        <h2 class="accordion-header">
                           <button class="accordion-button collapsed"
                              data-img="images/facilities-thumb-04.jpg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#acc3">
                           Customer Focused
                           </button>
                        </h2>
                        <div id="acc3" class="accordion-collapse collapse" data-bs-parent="#facilitiesAccordion">
                           <div class="accordion-body">
                              <p>Customer focus means meeting customers’ needs and expectations throughout the life cycle of product design, sales and marketing, quality control, manufacturing, logistics, customer support, after-sales services, billing and collection. NEICO’s core foundation was created with the customer as the primary focus. We embrace a “Hands-On” approach in providing accurate, timely and reliable service to all our clients. Our customer service team members serve as advocates and strategic partners to our customers as well. They are stakeholders who are responsible for ensuring that each and every order is handled with professionalism and precision, so our customers will happily pay for our products and services with no buyer’s remorse.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </>
    );
};

const FacilityItem = ({ facility }) => {
    const isLeft = facility.position === "left";

    return (
        <div className="infoBlockServices d-flex align-items-stretch bg-white">

            {/* Image */}
            <div
                className={`d-flex imageThumb ${
                    isLeft ? "order-md-1 order-0" : ""
                }`}
            >
                <img
                    src={facility.image}
                    alt={facility.title}
                    className="img-fluid"
                />
            </div>

            {/* Content */}
            <div
                className={`infoBlockPosition ${
                    isLeft
                        ? "infoBlockPositionLeft order-md-0 order-1"
                        : "infoBlockPositionRight"
                } d-flex align-items-center`}
            >
                <div>
                    <h4 className="text-green text-uppercase">
                        {facility.title}
                    </h4>
                    <p>{facility.description}</p>
                </div>
            </div>

        </div>
    );
};

export default FacilitySection;
