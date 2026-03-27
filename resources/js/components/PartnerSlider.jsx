import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const PartnerSlider = () => {

    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get("/partners")
            .then(res => setPartners(res.data))
            .catch(err => console.error(err));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } }
        ]
    };

    if (!partners.length) return null;

    return (
        <section className="ourPartnerBlock">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div class="ourPartnerBlockSlider">
                        <Slider {...settings}>
                            {partners.map(partner => (
                                <div key={partner.id} className="ourPartnerBlockSlide">

                                    {partner.url ? (
                                        <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                            <img 
                                                src={partner.image}
                                                alt={partner.name}
                                                className="img-fluid"
                                            />
                                        </a>
                                    ) : (
                                        <img 
                                            src={partner.image}
                                            alt={partner.name}
                                            className="img-fluid"
                                        />
                                    )}

                                </div>
                            ))}
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;
