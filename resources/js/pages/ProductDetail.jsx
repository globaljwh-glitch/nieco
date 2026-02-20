import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetail = () => {

    const { slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/front/product/${slug}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [slug]);
    //console.log(product);
    if (!product) return null;

    return (
        <>
            <TopBar />
            <Navbar />
            {/* Banner */}
            <section className="innerBanner p-0">
                <div className="bannerImage">
                    <img
                        src="/images/banner/backgrounds-blank-blue.jpg"
                        className="imgHeightResponsive"
                        alt={product.title}
                    />
                    <div className="overlay"></div>
                </div>
                <div className="bannerContentOuter">
                    <div className="container">
                        <div className="bannerContent text-center m-auto">
                            <h1>{product.title}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="productInfo">

                        {/* Product Information */}
                        {product.information.length > 0 && (
                            <div className="productInfoDetailBlock">
                                <table className="productInfoTable">
                                    <tbody>
                                        <tr className="mainHeading">
                                            <td colSpan="4">
                                                <h4>Product Information</h4>
                                            </td>
                                        </tr>
                                        {/* {product.information.map(info => (
                                            <tr key={info.id}>
                                                <td className="heading">{info.key}</td>
                                                <td>{info.value}</td>
                                            </tr>
                                        ))} */}
                                        {product.information
                                            .reduce((rows, item, index) => {
                                                if (index % 2 === 0) {
                                                    rows.push([item]);
                                                } else {
                                                    rows[rows.length - 1].push(item);
                                                }
                                                return rows;
                                            }, [])
                                            .map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {row.map(info => (
                                                        <>
                                                            <td className="heading">{info.key}</td>
                                                            <td>{info.value}</td>
                                                        </>
                                                    ))}
                                                </tr>
                                        ))}
                                        {/* <tr>
                                            <td className="heading">{product.information.key}</td>
                                            <td>{product.information.value}</td>
                                            <td className="heading">Certifications</td>
                                            <td>{product.information.certifications}</td>
                                        </tr>
                                        <tr>
                                            <td className="heading">Synonyms</td>
                                            <td>{product.information.synonyms}</td>
                                            <td className="heading">CAS Number</td>
                                            <td>{product.information.cas_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="heading">Molecular Weight</td>
                                            <td>{product.information.molecular_weight}</td>
                                            <td className="heading">Molecular Formula</td>
                                            <td dangerouslySetInnerHTML={{
                                                __html: product.information.molecular_formula
                                            }} />
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Specifications */}
                        {product.specifications.length > 0 && (
                            <div className="productInfoDetailBlock">
                                <table className="productInfoTable">
                                    <tbody>
                                        <tr className="mainHeading">
                                            <td colSpan="4">
                                                <h4>Specifications</h4>
                                            </td>
                                        </tr>

                                        {/* {product.specifications.map(spec => (
                                            <tr key={spec.id}>
                                                <td className="heading">{spec.key}</td>
                                                <td>{spec.value}</td>
                                            </tr>
                                        ))} */}
                                        {product.specifications
                                            .reduce((rows, item, index) => {
                                                if (index % 2 === 0) {
                                                    rows.push([item]);
                                                } else {
                                                    rows[rows.length - 1].push(item);
                                                }
                                                return rows;
                                            }, [])
                                            .map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {row.map(spec => (
                                                        <>
                                                            <td className="heading">{spec.key}</td>
                                                            <td>{spec.value}</td>
                                                        </>
                                                    ))}
                                                </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Product physical chemical characteristics */}
                        {product.physical_chemical_characteristics 
                            && product.physical_chemical_characteristics.length > 0 && (
                            <div className="productInfoDetailBlock">
                                <table className="productInfoTable">
                                    <tbody>
                                        <tr className="mainHeading">
                                            <td colSpan="4">
                                                <h4>Physical Chemical Characteristics</h4>
                                            </td>
                                        </tr>

                                        {/* {product.physical_chemical_characteristics.map(char => (
                                            <tr key={char.id}>
                                                <td className="heading">{char.key}</td>
                                                <td>{char.value}</td>
                                            </tr>
                                        ))} */}
                                        {product.physical_chemical_characteristics
                                            .reduce((rows, item, index) => {
                                                if (index % 2 === 0) {
                                                    rows.push([item]);
                                                } else {
                                                    rows[rows.length - 1].push(item);
                                                }
                                                return rows;
                                            }, [])
                                            .map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {row.map(char => (
                                                        <>
                                                            <td className="heading">{char.key}</td>
                                                            <td>{char.value}</td>
                                                        </>
                                                    ))}
                                                </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Packing */}
                        {product.packing && (
                            <div className="productInfoDetailBlock">
                                <table className="productInfoTable packageOptions">
                                    <tbody>
                                        <tr className="mainHeading">
                                            <td colSpan="4">
                                                <h4>Packing Options</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td dangerouslySetInnerHTML={{
                                                __html: product.packing
                                            }} />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Disclaimer */}
                        {product.description && (
                            <div className="post-tags">
                                <p className="mb-0" 
                                    dangerouslySetInnerHTML={{
                                        __html: product.description
                                    }} 
                                />
                            </div>
                        )}

                        {/* Other */}
                        {product.other && (
                            <div className="post-tags">
                                <p className="mb-0" 
                                    dangerouslySetInnerHTML={{
                                        __html: product.other
                                    }} 
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductDetail;
