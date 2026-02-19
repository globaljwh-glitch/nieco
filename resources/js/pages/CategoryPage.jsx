import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CategoryPage = () => {
    const { id } = useParams();

    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`/front/category/${id}`)
            .then(res => {
                setCategory(res.data.category);
                setProducts(res.data.products);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!category) return null;

    return (
        <>
            <TopBar />
            <Navbar />

            {/* Banner */}
            <section className="innerBanner p-0">
                <div className="bannerImage">
                    <img
                        src={category.image}
                        className="imgHeightResponsive"
                        alt={category.name}
                    />
                    <div className="overlay"></div>
                </div>
                <div className="bannerContentOuter">
                    <div className="container">
                        <div className="bannerContent text-center m-auto">
                            <h1>{category.name}</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-11 col-md-12 m-auto text-center">
                            <div className="categoryDescription"
                                dangerouslySetInnerHTML={{ __html: category.description }} />
                            <hr className="underLineRed mt-5" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="greyBg blockOverImage">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="imgOverContentThumbOuter positionRelative d-flex justify-content-start align-items-center">
                            <div className="imgOverContentThumb">
                                <img src={category.detail_image_one} className="imgResponsive" />
                            </div>
                            <div className="imgOverContentThumb">
                                <img src={category.detail_image_two} className="imgResponsive" />
                            </div>
                            <div className="imageOverContentBox">
                                <div className="text-left mb-0" dangerouslySetInnerHTML={{ __html: category.detail_content }} />
                                {/* <p class="text-left mb-0">NEICO ensures the supply of products from manufacturers meet the highest standards in production, quality, safety and service. Our commitment to your success ensures that we work diligently to lower your costs while still providing the highest quality products and services. NEICO keeps stock of many items in strategically located warehouses throughout the United States, Brazil, Europe, and Mexico.</p> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="ourProductsList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>{category.products_section_title}</h2>

                            <div className="paddingLR150"
                            dangerouslySetInnerHTML={{
                                __html: category.products_section_description
                            }}
                            />

                            {/* <h2>Products in this Industry</h2>
                            <p class="paddingLR150">Our product range serves multiple sectors, ensuring quality, performance, and reliability. Whether you need common raw materials or rare specialty ingredients, we have the expertise. Browse our catalog and connect with our Sales Team for inquiries, including assistance with hard-to-find products.</p> */}
                        </div>

                        <div className="col-md-12">
                            <ul className="productListing">
                                {products.map(product => (
                                    <li key={product.id}>
                                        <a href="#">{product.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default CategoryPage;
