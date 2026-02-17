import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    return (
        <div className="topBar greyBg d-flex">
            <div className="container">
                <div className="row">
                    <div className="d-flex align-items-center justify-content-end">
                        <ul className="topInfoList d-flex mb-0 p-0">
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/samples">Samples</a></li>
                            <li><Link to="/contact">Inquiries</Link></li>
                        </ul>

                        <div className="d-flex align-items-center justify-content-end">
                            <div className="searchSite d-flex">
                                <label
                                    className="screen-reader-text"
                                    htmlFor="searchSite"
                                ></label>

                                <input
                                    type="text"
                                    className="search-field"
                                    name="searchSite"
                                    id="searchSite"
                                    placeholder="Search..."
                                    autoComplete="off"
                                />

                                <button
                                    id="searchsubmit"
                                    className="search-submit"
                                    type="button"
                                >
                                    {/* <i className="fa-solid fa-search"></i> */}
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
