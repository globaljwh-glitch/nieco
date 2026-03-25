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
        <section className="whoWeAre">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                        <h2 className="text-blue">
                            Welcome to NEICO.COM
                        </h2>
                        <p dangerouslySetInnerHTML={{ __html: content }} />

                        <hr className="underLineRed mt-5" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
