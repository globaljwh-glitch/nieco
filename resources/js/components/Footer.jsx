// const footerLinks = [
//     "About NEICO",
//     "Vision & Mission",
//     "Values",
//     "Organization Chart",
//     "Code of Conduct",
//     "Dedicated Customer Service",
//     "Marketing",
//     "Technical Services",
//     "Sourcing",
//     "Facilities & Logistics",
// ];

// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="blueBg">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">

//                         {/* Top Footer Section */}
//                         <div className="footerMenuBlock">
//                             <div className="row">

//                                 {/* Left Content */}
//                                 <div className="col-md-6">
//                                     <p className="footerInfo">
//                                         Northeast Ingredients Company (NEICO) is the World’s Leading 
//                                         Formulator, Blender, Pre-Mixer, Compounder, Processor, 
//                                         Contract Manufacturer and Packaging Services Provider. 
//                                         Over 4,000 ingredients blended, premixed or compounded 
//                                         to customers’ specifications.
//                                     </p>
//                                 </div>

//                                 {/* Right Menu */}
//                                 <div className="col-md-6">
//                                     <ul className="footerMenu">
//                                         {footerLinks.map((link, index) => (
//                                             <li key={index} className="menu-item">
//                                                 <a href="#">{link}</a>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                             </div>
//                         </div>

//                         {/* Copyright */}
//                         <div className="copyright">
//                             <div className="row">
//                                 <div className="col-md-12">
//                                     <p>
//                                         &copy; Copyright © {currentYear}. 
//                                         All Rights Reserved.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import { useEffect, useState } from "react";
import axios from "axios";

const footerLinks = [
    "About NEICO",
    "Vision & Mission",
    "Values",
    "Organization Chart",
    "Code of Conduct",
    "Dedicated Customer Service",
    "Marketing",
    "Technical Services",
    "Sourcing",
    "Facilities & Logistics",
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
                                                <a href="#">{link}</a>
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
