import { useEffect, useState } from "react";
import axios from "axios";

const WhoWeAre = () => {

    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get("/front/who-we-are")
            .then(res => {
                if (res.data?.content) {
                    setContent(res.data.content);
                }
            })
            .catch(err => console.error(err));
    }, []);

    if (!content) return null;

    return (
        <>
        <section className="whoWeAre">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="ps-4 pe-4">
                            <h2 className="text-center">Welcome to NEICO.COM</h2>
                            <p dangerouslySetInnerHTML={{ __html: content }} />
                            <hr className="underLineRed mt-5" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-4 pe-4">
                            <h2 className="text-center">Strategically Located</h2>
                            <p>We have built long term relationships with strategic partners throughout the world, Our reputation as a “Value Added Partner” with an extensive global supply network and local storage and distribution points throughout the United States to serve our loyal exist accounts and enable us to develop and serve new customers in the markets where we operate.</p>
                            <hr className="underLineRed mt-5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="parallax-01"></section>
        </>
    );
};

export default WhoWeAre;
