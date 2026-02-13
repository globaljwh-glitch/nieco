// const WhoWeAre = () => {
//     return (
//         <section className="whoWeAre">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xl-10 col-lg-11 col-md-12 m-auto text-center">

//                         <p>
//                             Northeast Ingredients Company (NEICO) is the World’s Leading 
//                             Formulator, Blender, Pre-Mixer, Compounder, Processor, 
//                             Contract Manufacturer and Packaging Services Provider. 
//                             We excel in providing the services of dry mixing and liquid 
//                             compounding of a wide range of high-quality ingredients for 
//                             customers in the Agricultural, Cosmetics, Fragrance &amp; Personal Care, 
//                             Food &amp; Beverage, Household &amp; Commercial Cleaning, Industrial 
//                             Ingredients, Oil &amp; Gas and Pharmaceutical &amp; Fine Ingredients industries; 
//                             in addition, we have expertise in combinatorial chemistry, 
//                             controlled reactions, extraction, purification, crystallizing, 
//                             drying and packaging. Select from the above categories of 
//                             ingredients and enter into Confidentiality/Non-Disclosure 
//                             Agreements with us. We will work on your requirements 
//                             immediately or with the shortest possible lead time!
//                         </p>

//                         <hr className="underLineRed mt-5" />

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhoWeAre;
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

                        <p dangerouslySetInnerHTML={{ __html: content }} />

                        <hr className="underLineRed mt-5" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
