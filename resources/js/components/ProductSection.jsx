// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProductSection = () => {

//     const [featured, setFeatured] = useState([]);
//     const [latest, setLatest] = useState([]);

//     useEffect(() => {
//         axios.get("/front-products")
//             .then(res => {
//                 setFeatured(res.data.featured);
//                 setLatest(res.data.latest);
//             })
//             .catch(err => console.error(err));
//     }, []);

//     return (
//         <section className="greyBg blockOverImage">
//             <div className="container">

//                 {/* 🔹 Static Strategic Block */}
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="imgOverContentThumbOuter positionRelative d-flex justify-content-start align-items-center">

//                             <div className="imgOverContentThumb">
//                                 <img
//                                     src="/images/strategically-located-01.jpg"
//                                     className="imgResponsive"
//                                     alt="Strategically Located 1"
//                                 />
//                             </div>

//                             <div className="imgOverContentThumb">
//                                 <img
//                                     src="/images/strategically-located-02.jpg"
//                                     className="imgResponsive"
//                                     alt="Strategically Located 2"
//                                 />
//                             </div>

//                             <div className="imageOverContentBox">
//                                 <h2 className="text-blue">
//                                     Strategically Located
//                                 </h2>
//                                 <p className="text-left mb-0">
//                                     We have built long-term relationships with strategic
//                                     partners throughout the world. Our reputation as a
//                                     “Value Added Partner” with an extensive global
//                                     supply network and local storage and distribution
//                                     points throughout the United States enables us
//                                     to serve loyal existing accounts and develop new
//                                     customers in the markets where we operate.
//                                 </p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 <hr
//                     className="underLineRed"
//                     style={{ width: "340px", marginTop: "80px" }}
//                 />

//                 {/* Dynamic Products */}
//                 <div className="ourProductSliderBlock">
//                     <div className="row">

//                         {/* Featured Products */}
//                         <div className="col-md-6">
//                             <h2 className="text-blue">Top Products</h2>
//                             <div className="productListSlideOuter">
//                                 {featured.map(product => (
//                                     <ProductItem
//                                         key={product.id}
//                                         image={product.image}
//                                         name={product.title}
//                                     />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Latest Products */}
//                         <div className="col-md-6">
//                             <h2 className="text-blue">New Products</h2>
//                             <div className="productListSlideOuter">
//                                 {latest.map(product => (
//                                     <ProductItem
//                                         key={product.id}
//                                         image={product.image}
//                                         name={product.title}
//                                     />
//                                 ))}
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// const ProductItem = ({ image, name }) => {
//     return (
//         <div className="product">
//             <div className="row">
//                 <div className="col-md-4 d-flex">
//                     <div className="productThumb">
//                         <img
//                             src={image}
//                             className="imgResponsive"
//                             alt={name}
//                         />
//                     </div>
//                 </div>

//                 <div className="col-md-8 d-flex align-items-center">
//                     <div>
//                         <div className="productName">{name}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductSection;
import { useEffect, useState } from "react";
import axios from "axios";

const ProductSection = () => {

    const [featured, setFeatured] = useState([]);
    const [latest, setLatest] = useState([]);
    const [strategic, setStrategic] = useState(null);

    useEffect(() => {
        // 🔹 Fetch Products
        axios.get("/front-products")
            .then(res => {
                setFeatured(res.data.featured);
                setLatest(res.data.latest);
            })
            .catch(err => console.error(err));

        // 🔹 Fetch Strategic Section
        axios.get("/front/strategic")
            .then(res => {
                setStrategic(res.data);
            })
            .catch(err => console.error(err));

    }, []);

    return (
        <section className="greyBg blockOverImage">
            <div className="container">

                {/* 🔹 Dynamic Strategic Block */}
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

                        <hr
                            className="underLineRed"
                            style={{ width: "340px", marginTop: "80px" }}
                        />
                    </>
                )}

                {/* 🔹 Dynamic Products */}
                <div className="ourProductSliderBlock">
                    <div className="row">

                        {/* Featured Products */}
                        <div className="col-md-6">
                            <h2 className="text-blue">Top Products</h2>
                            <div className="productListSlideOuter">
                                {featured.map(product => (
                                    <ProductItem
                                        key={product.id}
                                        image={product.image}
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
                                        image={product.image}
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
