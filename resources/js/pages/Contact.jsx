import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        application: "",
        interests: "",
        final_app: "",
        captcha_input: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // Later:
        // axios.post("/contact-submit", formData)
    };

    return (
        <>
            <TopBar />
            <Navbar />
            
            {/* Banner Section */}
            <section className="innerBanner p-0">
                <div className="bannerImage">
                    <img
                        src="/images/banner/contact.jpg"
                        className="imgHeightResponsive"
                        alt="Contact Banner"
                    />
                    <div className="overlay"></div>
                </div>

                <div className="bannerContentOuter">
                    <div className="container">
                        <div className="bannerContent text-center m-auto">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 text-center">
                            <div className="paddingLR200">
                                <h4 className="text-blue">
                                    Fill out the form below to connect with a NEICO expert.
                                </h4>
                                <p>
                                    We’re always happy to hear from you. Please complete the form below.
                                    One of our experts will be in touch with you shortly.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="formBlockOuter mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">

                                        {/* Left Column */}
                                        <div className="col-md-6">

                                            {[
                                                { label: "First Name", name: "first_name" },
                                                { label: "Last Name", name: "last_name" },
                                                { label: "Email Address", name: "email" },
                                                { label: "Phone Number", name: "phone" },
                                                { label: "Company Name", name: "company" }
                                            ].map((field, index) => (
                                                <div className="form-group mb-3" key={index}>
                                                    <label>{field.label} <span>*</span></label>
                                                    <input
                                                        type="text"
                                                        name={field.name}
                                                        value={formData[field.name]}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                </div>
                                            ))}

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label>Street Address <span>*</span></label>
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label>City <span>*</span></label>
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                        <label>State <span>*</span></label>
                                                        <input
                                                            type="text"
                                                            name="state"
                                                            value={formData.state}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                        <label>Zip Code <span>*</span></label>
                                                        <input
                                                            type="text"
                                                            name="zipcode"
                                                            value={formData.zipcode}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                        <label>Country <span>*</span></label>
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            value={formData.country}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label>Application and Use of Product <span>*</span></label>
                                                <select
                                                    name="application"
                                                    value={formData.application}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                >
                                                    <option value="">--Select Application--</option>
                                                    <option>Personal Care / Cosmetic</option>
                                                    <option>Food and Beverage</option>
                                                    <option>Pharmaceutical</option>
                                                    <option>Flavor and Fragrance</option>
                                                    <option>Animal Health & Nutrition</option>
                                                    <option>Sport Nutrition</option>
                                                    <option>Industrial</option>
                                                </select>
                                            </div>

                                        </div>

                                        {/* Right Column */}
                                        <div className="col-md-6">

                                            <div className="form-group mb-3">
                                                <label>What products are you interested in? <span>*</span></label>
                                                <textarea
                                                    name="interests"
                                                    rows="6"
                                                    value={formData.interests}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                ></textarea>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label>Final application? <span>*</span></label>
                                                <textarea
                                                    name="final_app"
                                                    rows="6"
                                                    value={formData.final_app}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                ></textarea>
                                            </div>

                                        </div>

                                        {/* Bottom Row */}
                                        <div className="col-md-12 mt-4 text-end">
                                            <button
                                                type="submit"
                                                className="btn btn-lg customBtn01"
                                            >
                                                SUBMIT
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
