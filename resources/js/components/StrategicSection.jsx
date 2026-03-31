import { useEffect, useState } from "react";
import axios from "axios";

const StrategicSection = () => {

    const [strategic, setStrategic] = useState(null);

    useEffect(() => {

        // Fetch Strategic Section
        axios.get("/front/strategic")
            .then(res => {
                setStrategic(res.data);
            })
            .catch(err => console.error(err));

    }, []);

    return (
        <>
        {/* Dynamic Strategic Block */}
        {strategic && (
            <>
                <div className="row">
                    <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                        <div class="mb-2 pb-2">
                            <h2 class="text-center">Strategically Located</h2>
                            <p>We have built long term relationships with strategic partners throughout the world, Our reputation as a “Value Added Partner” with an extensive global supply network and local storage and distribution points throughout the United States to serve our loyal exist accounts and enable us to develop and serve new customers in the markets where we operate.</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="imgOverContentThumbOuter positionRelative d-flex justify-content-start align-items-center">

                            {strategic.images?.map((img, index) => (
                                <div key={index} className="imgOverContentThumb">
                                    <img
                                        src={img}
                                        className="imgResponsive"
                                        alt="Strategic"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <section className="industries greyBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="">
                                    <h2 className="text-blue">
                                        {strategic.title}
                                    </h2>
                                    <p
                                        className="text-left mb-0"
                                        dangerouslySetInnerHTML={{ __html: strategic.content }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </>
        )}
        </>
    );
};

export default StrategicSection;
