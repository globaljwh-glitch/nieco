import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//import React, { useState, useEffect, useRef } from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const TopBar = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const searchRef = useRef(null); 

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setResults([]); // hide dropdown
                // const searchInput = document.getElementById("siteSearchBar");
                // if (searchInput) {
                //     searchInput.value = "";
                // }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = async (value) => {

        setSearch(value);

        if (value.length < 2) {
            setResults([]);
            return;
        }

        try {
            const response = await axios.get(`/search-products?q=${value}`);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="topBar greyBg d-flex">
            <div className="container">
                <div className="row">
                    <div className="d-flex align-items-center justify-content-end">
                        <ul className="topInfoList d-flex mb-0 p-0">
                            <li><a href="/careers">Careers</a></li>
                            {/* <li><a href="/samples">Samples</a></li> */}
                            <li><Link to="/contact">Inquiries</Link></li>
                        </ul>

                        <div className="d-flex align-items-center justify-content-end">
                            <div className="searchSite d-flex">
                                <label
                                    className="screen-reader-text"
                                    htmlFor="searchSite"
                                ></label>

                                {/* <input
                                    type="text"
                                    className="search-field"
                                    name="searchSite"
                                    id="searchSite"
                                    placeholder="Search..."
                                    autoComplete="off"
                                /> */}
                                <div className="searchSite d-flex ms-auto position-relative" ref={searchRef}>
                                <input
                                    type="text"
                                    id="siteSearchBar"
                                    className="search-field"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => handleSearch(e.target.value)}
                                />

                                <button
                                    id="searchsubmit"
                                    className="search-submit"
                                    type="button"
                                >
                                    {/* <i className="fa-solid fa-search"></i> */}
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                {results.length > 0 && (
                                    <ul className="searchDropdown">
                                        {results.map((product) => (
                                            <li key={product.id}>
                                                <a href={`/product/${product.slug}`}>
                                                    {product.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
