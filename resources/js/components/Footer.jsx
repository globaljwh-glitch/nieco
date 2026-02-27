import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const footerLinks = [
    { title: "About NEICO", path: "/about" },
    { title: "Vision & Mission", path: "/vision" },
    { title: "Strategies", path: "/strategies" },
    { title: "Organization Chart", path: "/organization-chart" },
    { title: "Code of Conduct", path: "/code-of-conduct" },
    { title: "Dedicated Customer Service", path: "/dedicated-customer-service" },
    { title: "Marketing", path: "/marketing" },
    { title: "Technical Services", path: "/technical-services" },
    { title: "Sourcing", path: "/sourcing" },
    { title: "Facilities & Logistics", path: "/facility-and-logistics" },
];

const Footer = () => {

    const [footerData, setFooterData] = useState(null);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        axios.get("/front/footer")
            .then(res => setFooterData(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!footerData) return null;

    return (
        <footer className="blueBg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        {/* Top Footer Section */}
                        <div className="footerMenuBlock">
                            <div className="row">

                                {/* Dynamic Left Content */}
                                <div className="col-md-6">
                                    <p
                                        className="footerInfo"
                                        dangerouslySetInnerHTML={{
                                            __html: footerData.content
                                        }}
                                    />
                                </div>

                                {/* Static Right Menu */}
                                <div className="col-md-6">
                                    <ul className="footerMenu">
                                        {footerLinks.map((link, index) => (
                                            <li key={index} className="menu-item">
                                                <Link to={ link.path }>{link.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* Dynamic Copyright */}
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        {footerData.copyright
                                            ? footerData.copyright.replace("{year}", currentYear)
                                            : `© ${currentYear} All Rights Reserved.`}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
