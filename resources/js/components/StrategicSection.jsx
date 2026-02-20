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

                            <div className="imageOverContentBox">
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
            </>
        )}
        </>
    );
};

export default StrategicSection;
