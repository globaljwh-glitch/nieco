import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IndustriesSection = () => {

    const [categories, setCategories] = useState([]);
    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {

        // Fetch Categories (Already Dynamic)
        axios.get("/front-categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Category fetch error:", err));

        // Fetch Section Title + Content
        axios.get("/front/industries")
            .then(res => setSectionData(res.data))
            .catch(err => console.error("Industries section error:", err));

    }, []);

    if (!categories.length || !sectionData) return null;

    return (
        <>
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
                                            <Link to={`/category/${category.slug}`}>
                                                <img
                                                    src={category.thumbnail}
                                                    alt={category.name}
                                                    className="imgResponsive imgThumb"
                                                />
                                                <h4 className="categoriesName">
                                                    {category.name}
                                                </h4>
                                                <h4 class="viewMoreTextBtn">View Products</h4>
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <div className="parallax-03"></div>
        </>
    );
};

export default IndustriesSection;
