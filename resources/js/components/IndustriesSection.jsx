// import { useEffect, useState } from "react";
// import axios from "axios";

// const IndustriesSection = () => {

//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         axios.get("/front-categories")
//             .then(res => setCategories(res.data))
//             .catch(err => console.error("Category fetch error:", err));
//     }, []);

//     if (!categories.length) return null;

//     return (
//         <section className="industries greyBg">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12 text-center">

//                         <h2 className="text-uppercase">Industries Served</h2>

//                         <p className="paddingLR150">
//                             Over 4,000 ingredients blended, premixed or compounded 
//                             to customers’ specifications. We provide dry mixes and 
//                             liquid compounds with customers’ formulations.
//                         </p>

//                         <div className="categoriesSectionHome">
//                             <div className="row">

//                                 {categories.map((category) => (
//                                     <div
//                                         key={category.id}
//                                         className="col-lg-4 col-md-4 col-sm-6"
//                                     >
//                                         <div className="categoriesList">
//                                             <a href="#">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.name}
//                                                     className="imgResponsive imgThumb"
//                                                 />
//                                                 <h4 className="categoriesName">
//                                                     {category.name}
//                                                 </h4>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 ))}

//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default IndustriesSection;
import { useEffect, useState } from "react";
import axios from "axios";

const IndustriesSection = () => {

    const [categories, setCategories] = useState([]);
    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {

        // 🔹 Fetch Categories (Already Dynamic)
        axios.get("/front-categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Category fetch error:", err));

        // 🔹 Fetch Section Title + Content
        axios.get("/front/industries")
            .then(res => setSectionData(res.data))
            .catch(err => console.error("Industries section error:", err));

    }, []);

    if (!categories.length || !sectionData) return null;

    return (
        <section className="industries greyBg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">

                        {/* Dynamic Title */}
                        <h2 className="text-uppercase">
                            {sectionData.title}
                        </h2>

                        {/* Dynamic Content */}
                        <p
                            className="paddingLR150"
                            dangerouslySetInnerHTML={{
                                __html: sectionData.content
                            }}
                        />

                        <div className="categoriesSectionHome">
                            <div className="row">

                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className="col-lg-4 col-md-4 col-sm-6"
                                    >
                                        <div className="categoriesList">
                                            <a href="#">
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="imgResponsive imgThumb"
                                                />
                                                <h4 className="categoriesName">
                                                    {category.name}
                                                </h4>
                                            </a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
