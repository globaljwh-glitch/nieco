import { useEffect, useState } from "react";
import axios from "axios";
import StrategicSection from "./StrategicSection";

const ProductSection = () => {

    const [featured, setFeatured] = useState([]);
    const [latest, setLatest] = useState([]);
    const [strategic, setStrategic] = useState(null);
    const randomImages = [
        "/images/products/bakery-desserts-01.jpg",
        "/images/products/bakery-desserts-02.jpg",
        "/images/products/beverage-02.jpg",
        "/images/products/beverage-03.jpg",
        "/images/products/fresh-vegetable-01.jpg",
        "/images/products/pickle-01.jpg",
        "/images/products/snack-01.jpg",
        "/images/products/spices-01.jpg",
    ];

    const getRandomImage = (id) => {
        return randomImages[id % randomImages.length];
    };

    useEffect(() => {
        // Fetch Products
        axios.get("/front-products")
            .then(res => {
                setFeatured(res.data.featured);
                setLatest(res.data.latest);
            })
            .catch(err => console.error(err));

        // Fetch Strategic Section
        axios.get("/front/strategic")
            .then(res => {
                setStrategic(res.data);
            })
            .catch(err => console.error(err));

    }, []);

    return (
        <section className="greyBg blockOverImage">
            <div className="container">

                {/* Dynamic Strategic Block */}
                {strategic && (
                    <>
                        <StrategicSection />
                        <hr
                            className="underLineRed"
                            style={{ width: "340px", marginTop: "80px" }}
                        />
                    </>
                )}

                {/* Dynamic Products */}
                <div className="ourProductSliderBlock">
                    <div className="row">

                        {/* Featured Products */}
                        <div className="col-md-6">
                            <h2 className="text-blue">Top Products</h2>
                            <div className="productListSlideOuter">
                                {featured.map(product => (
                                    <ProductItem
                                        key={product.id}
                                        image={getRandomImage(product.id)}
                                        name={product.title}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Latest Products */}
                        <div className="col-md-6">
                            <h2 className="text-blue">New Products</h2>
                            <div className="productListSlideOuter">
                                {latest.map(product => (
                                    <ProductItem
                                        key={product.id}
                                        image={getRandomImage(product.id)}
                                        name={product.title}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

const ProductItem = ({ image, name }) => {
    return (
        <div className="product">
            <div className="row">
                <div className="col-md-4 d-flex">
                    <div className="productThumb">
                        <img
                            src={image}
                            className="imgResponsive"
                            alt={name}
                        />
                    </div>
                </div>

                <div className="col-md-8 d-flex align-items-center">
                    <div>
                        <div className="productName">{name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
