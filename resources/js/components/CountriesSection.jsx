// const countries = [
//     "USA", "Argentina", "Australia", "Belgium", "Brazil",
//     "Cambodia", "Canada", "Chile", "China", "Colombia",
//     "Czech Republic", "Egypt", "Estonia", "France", "French Guiana",
//     "Germany", "Guyana", "Hong Kong", "India", "Indonesia",
//     "Israel", "Italy", "Japan", "Malaysia", "Mexico",
//     "Myanmar", "Netherlands", "New Zealand", "Norway", "Pakistan",
//     "Peru", "Philippines", "Russia", "Saudi Arabia", "Singapore",
//     "South Africa", "South Korea", "Spain", "Switzerland",
//     "Taiwan of China", "Thailand", "Turkey", "UAE", "UK",
//     "Ukraine", "Uruguay", "Venezuela", "Vietnam"
// ];

// const CountriesSection = () => {
//     return (
//         <section>
//             <div className="location-content">

//                 {/* Heading */}
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12 text-center">
//                             <h2 className="text-uppercase">
//                                 Countries We Serve
//                             </h2>
//                             <p>
//                                 NEICO has various distribution facilities reaching 
//                                 more than 1,000 customers worldwide.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Map + Country List */}
//                 <div className="countryList">
//                     <div className="container">
//                         <div className="row">

//                             {/* Map Image */}
//                             <div className="col-lg-6 mapBg flexCol justify-content-center">
//                                 <img
//                                     src="/images/ufc-map.png"
//                                     alt="Global Distribution Map"
//                                     className="imgResponsive"
//                                 />
//                             </div>

//                             {/* Countries */}
//                             <div className="col-lg-6 flexCol">
//                                 <ul className="countryListWedoBussiness">
//                                     {countries.map((country, index) => (
//                                         <li key={index}>{country}</li>
//                                     ))}
//                                 </ul>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CountriesSection;
import { useEffect, useState } from "react";
import axios from "axios";

const countries = [
    "USA", "Argentina", "Australia", "Belgium", "Brazil",
    "Cambodia", "Canada", "Chile", "China", "Colombia",
    "Czech Republic", "Egypt", "Estonia", "France", "French Guiana",
    "Germany", "Guyana", "Hong Kong", "India", "Indonesia",
    "Israel", "Italy", "Japan", "Malaysia", "Mexico",
    "Myanmar", "Netherlands", "New Zealand", "Norway", "Pakistan",
    "Peru", "Philippines", "Russia", "Saudi Arabia", "Singapore",
    "South Africa", "South Korea", "Spain", "Switzerland",
    "Taiwan of China", "Thailand", "Turkey", "UAE", "UK",
    "Ukraine", "Uruguay", "Venezuela", "Vietnam"
];

const CountriesSection = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("/front/countries")
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!data) return null;

    return (
        <section>
            <div className="location-content">

                {/* Dynamic Heading */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="text-uppercase">
                                {data.title}
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: data.content
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Map + Country List */}
                <div className="countryList">
                    <div className="container">
                        <div className="row">

                            {/* Dynamic Map Image */}
                            <div className="col-lg-6 mapBg flexCol justify-content-center">
                                {data.image && (
                                    <img
                                        src={data.image}
                                        alt="Global Distribution Map"
                                        className="imgResponsive"
                                    />
                                )}
                            </div>

                            {/* Static Country List */}
                            <div className="col-lg-6 flexCol">
                                <ul className="countryListWedoBussiness">
                                    {countries.map((country, index) => (
                                        <li key={index}>{country}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CountriesSection;
