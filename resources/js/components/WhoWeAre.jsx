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
        <section class="whoWeAre">
         <div class="container">
            <div class="row">
               <div class="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                  <div class="">
                     <h2 class="text-center">Welcome to NEICO.COM</h2>
                     <p>Northeast Ingredients Company (NEICO) is the World’s Leading Formulator, Blender, Pre-Mixer, Compounder, Processor, Contract Manufacturer and Packaging Services Provider. We excel in providing the services of dry mixing and liquid compounding of a wide range of high-quality ingredients for customers in the Agricultural, Cosmetics, Fragrance & Personal Care, Food & Beverage, Household & Commercial Cleaning, Industrial Ingredients, Oil & Gas and Pharmaceutical & Fine Ingredients industries; in addition, we have expertise in combinatorial chemistry, controlled reactions, extraction, purification, crystalizing, drying and packaging.</p>
                     <hr class="underLineRed mt-5" />
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
