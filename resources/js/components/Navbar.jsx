import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img
                            src="/images/logo.png"
                            alt="NEICO"
                            className="imgResponsive"
                        />
                    </Link>

                    {/* Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/about"
                                >
                                    About
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/vision">
                                            Vision & Mission
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/strategies">
                                            Strategies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/organization-chart">
                                            Organization Chart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/code-of-conduct">
                                            Code of Conduct
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Ingredients Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Industries Served
                                </a>

                                {/* <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Agricultural</a></li>
                                    <li><a className="dropdown-item" href="#">Animal Nutrition &amp; Feed</a></li>
                                    <li><a className="dropdown-item" href="#">Cosmetics, Fragrance &amp; Personal Care</a></li>
                                    <li><a className="dropdown-item" href="#">Household &amp; Commercial Cleaning</a></li>
                                    <li><a className="dropdown-item" href="#">Electronic</a></li>
                                    <li><a className="dropdown-item" href="#">Food &amp; Beverage</a></li>
                                    <li><a className="dropdown-item" href="#">Pharmaceutical &amp; Fine Ingredients</a></li>
                                </ul> */}
                                <ul className="dropdown-menu">
                                    {categories.map((cat) => (
                                        <li key={cat.id}>
                                            <a
                                                className="dropdown-item"
                                                href={`/category/${cat.slug}`}
                                            >
                                                {cat.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* Services Dropdown */}
                            {/* <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/technical-services"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Technical Services
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/dedicated-customer-service">
                                            Dedicated Customer Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/marketing">
                                            Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/sourcing">
                                            Sourcing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/facility-and-logistics">
                                            Facilities & Logistics
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}

                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/technical-services"
                                >
                                    Technical Services
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/dedicated-customer-service">
                                            Dedicated Customer Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/marketing">
                                            Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/sourcing">
                                            Sourcing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/facility-and-logistics">
                                            Facilities & Logistics
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/media">
                                    Media &amp; Trade Shows
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/partnerships">
                                    Partnerships
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
