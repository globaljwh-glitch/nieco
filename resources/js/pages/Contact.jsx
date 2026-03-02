import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
//import { useState, useRef } from "react";

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
        final_app: ""
    });

    const recaptchaRef = useRef();
    const [captchaToken, setCaptchaToken] = useState(null);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.first_name) newErrors.first_name = "First name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone is required";
        if (!formData.address) newErrors.address = "Street address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.zipcode) newErrors.zipcode = "Zip code is required";
        if (!formData.country) newErrors.country = "Country is required";
        if (!formData.application) newErrors.application = "Application is required";
        if (!formData.interests) newErrors.interests = "Please specify interested products";
        if (!formData.final_app) newErrors.final_app = "Final application is required";
        if (!captchaToken) newErrors.captcha = "Please verify captcha";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess("");

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL;
            const response = await fetch(`${API_URL}/contact-submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    phone: formData.phone,
                    company_name: formData.company,
                    street: formData.address,
                    city: formData.city,
                    state: formData.state,
                    zip_code: formData.zipcode,
                    country: formData.country,
                    interested_in: formData.interests,
                    use_of_product: formData.application,
                    final_application: formData.final_app,
                    captcha: captchaToken
                })
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors) {
                    setErrors(data.errors);
                }
                throw new Error(data.message);
            }

            setSuccess("Your message has been submitted successfully.");
            setFormData({
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
                final_app: ""
            });

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
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
                                    {success && (
                                        <div className="alert alert-success">
                                            {success}
                                        </div>
                                    )}

                                <div className="row">

                                    {/* LEFT COLUMN */}
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
                                                {errors[field.name] && (
                                                    <small className="text-danger">
                                                        {errors[field.name]}
                                                    </small>
                                                )}
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
                                                        {errors.address && <small className="text-danger">{errors.address}</small>}
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
                                                    {errors.city && <small className="text-danger">{errors.city}</small>}
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
                                                    {errors.state && <small className="text-danger">{errors.state}</small>}
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
                                                    {errors.zipcode && <small className="text-danger">{errors.zipcode}</small>}
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
                                                    {errors.country && <small className="text-danger">{errors.country}</small>}
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
                                            {errors.application && <small className="text-danger">{errors.application}</small>}
                                        </div>
                                    </div>

                                    {/* RIGHT COLUMN */}
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
                                            {errors.interests && <small className="text-danger">{errors.interests}</small>}
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
                                            {errors.final_app && <small className="text-danger">{errors.final_app}</small>}
                                        </div>

                                    </div>
                                    <div className="form-group mb-3">
                                        <ReCAPTCHA
                                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                            onChange={(token) => setCaptchaToken(token)}
                                        />
                                        {errors.captcha && (
                                            <small className="text-danger">{errors.captcha}</small>
                                        )}
                                    </div>
                                    <div className="col-md-12 mt-4 text-end">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn btn-lg customBtn01"
                                        >
                                            {loading ? "Submitting..." : "SUBMIT"}
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
