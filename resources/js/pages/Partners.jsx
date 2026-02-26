import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Partners = () => {

    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get("/partners")
            .then(response => {
                setPartners(response.data);
            })
            .catch(error => {
                console.error("Error fetching partners:", error);
            });
    }, []);

    return (
        <>
            <TopBar />
            <Navbar />

            {/* Banner */}
            <section className="innerBanner p-0">
                <div className="bannerImage">
                    <img src="/images/banner/partners.jpg" className="imgHeightResponsive" alt="Partners" />
                    <div className="overlay"></div>
                </div>
                <div className="bannerContentOuter">
                    <div className="container">
                        <div className="bannerContent text-center m-auto">
                            <h1>Partnerships</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partnerList">
                <div className="container">
                    <div className="row">
                        {partners.map((partner, index) => (
                            <div key={index} className="col-lg-3 col-md-3 col-sm-4 d-flex align-items-center">
                                <a 
                                    href={partner.url} 
                                    className="partner"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="partnerLogo">
                                        <img 
                                            src={`${partner.image}`} 
                                            alt={partner.name} 
                                            className="imgResponsive"
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Partners;