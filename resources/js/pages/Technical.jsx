import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Technical = () => {

    const [technicals, setTechnicals] = useState([]);
    
    useEffect(() => {
        axios.get("/technical")
            .then(response => {
                const data = Array.isArray(response.data)
                    ? response.data
                    : response.data.data || [];

                setTechnicals(data);
            })
            .catch(error => {
                console.error("Error fetching technical services:", error);
            });
    }, []);

    return (
        <>
            <TopBar />
            <Navbar />

            {/* Banner */}
            <section class="innerBanner p-0">
                <div class="bannerImage">
                    <img src="images/banner/technical.jpg" class="imgHeightResponsive" />
                    <div class="overlay"></div>
                </div>
                <div class="bannerContentOuter">
                    <div class="container">
                    <div class="bannerContent text-center m-auto">
                        <h1>Technical Services</h1>
                    </div>
                    </div>
                </div>
            </section>
            <section class="">
                <div class="container">
                    <div class="row">
                    <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                            {/* <h3>Technical Services</h3> */}
                            <p>Through access to low cost manufacturing sites, NEICO is able to offer contract manufacturing services of various products & reactions. This enabling us to add value to our customers in terms of providing products of consistent performance at a competitive rate & manufacturers with utilization of their capacity as well as sourcing of raw materials for them.</p>
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
                                <img src="images/services/technical-large-thumb-02.jpg" class="imgResponsive" />
                            </div>
                            <div class="imgOverContentThumb">
                                <img src="images/services/technical-large-thumb-01.jpg" class="imgResponsive" />
                            </div>
                            <div class="imageOverContentBox">
                                <h2>Application-Focused Solutions</h2>
                                <p class="text-left mb-0">Our technical services ensure that products are selected, applied, and integrated effectively within your processes. We combine product expertise, application knowledge, and practical industry understanding to help clients achieve optimal performance, efficiency, and reliability.</p>
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
                    <div className="infoBlockServicesList">
                        <div className="row">
                            {technicals.map((item, index) => {

                                const isEven = (index + 1) % 2 === 0;

                                return (
                                    <div key={index} className="col-md-12">
                                        <div className="infoBlockServices d-flex align-items-stretch justify-content-start align-items-center bg-white">

                                            {/* Image */}
                                            <div className={`d-flex imageThumb ${isEven ? "order-md-1 order-0" : ""}`}>
                                                <img
                                                    src={`${item.image}`}
                                                    alt={item.name}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className={`infoBlockPosition d-flex align-items-center ${
                                                isEven
                                                    ? "infoBlockPositionLeft order-md-0 order-1"
                                                    : "infoBlockPositionRight"
                                            }`}>
                                                <div>
                                                    <h4 className="text-green text-uppercase">
                                                        {item.name}
                                                    </h4>
                                                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Technical;