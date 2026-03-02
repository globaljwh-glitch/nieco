import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {

    const [careers, setCareers] = useState([]);
    const [search, setSearch] = useState("");

    const fetchJobs = (searchValue = "") => {
        axios.get("/jobs", {
            params: { search: searchValue }
        })
        .then(response => {
            setCareers(response.data);
        })
        .catch(error => {
            console.error("Error fetching jobs:", error);
        });
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchJobs(search);
    };

  return (
    <>
      <TopBar />
      <Navbar />

      <section class="innerBanner p-0">
         <div class="bannerImage">
            <img src="images/banner/team.jpg" class="imgHeightResponsive" />
            <div class="overlay"></div>
         </div>
         <div class="bannerContentOuter">
            <div class="container">
               <div class="bannerContent text-center m-auto">
                  <h1>Careers</h1>
               </div>
            </div>
         </div>
      </section>
      <section class="">
         <div class="container">
            <div class="row">
               <div class="col-lg-12 text-center">
                  <h2 class="text-uppercase">WE ARE HIRING!</h2>
                  <p class="paddingLR150">We are looking for people who are passionate, talented and have a Can-do attitude. People who possess these skills are welcomed with open arms. We provide a dynamic, growth-oriented, and supportive work environment where you can excel.</p>
               </div>
               <div class="col-md-12">
                  {/* <div class="productTable">
                     <div class="searchProduct d-flex">
                        <div class="searchSite d-flex ms-auto">
                           <label class="screen-reader-text" for="searchProduct"></label><input type="text" class="search-field" value="" name="searchProduct" id="searchProduct" placeholder="Seach..." autocomplete="off" /><button id="searchsubmit" class="search-submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                     </div>
                     <table class="table table-striped tableResponsive jobListTable">
                        <thead>
                           <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Department</th>
                              <th scope="col">Status</th>
                              <th scope="col" class="text-end">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td data-label="Title"><a href="/job-detail">Junior Analytical Chemist & Sourcing Associate</a></td>
                              <td data-label="Department">Internship Opportunity</td>
                              <td data-label="Status">Active</td>
                              <td class="text-end"><a href="/job-detail" class="customBtn01 applyBtn m-0">Apply</a></td>
                           </tr>
                           <tr>
                              <td data-label="Title"><a href="/job-detail">Analytical Chemist, Compliance & Sourcing Associate</a></td>
                              <td data-label="Department">Sales</td>
                              <td data-label="Status">Active</td>
                              <td class="text-end"><a href="/job-detail" class="customBtn01 applyBtn m-0">Apply</a></td>
                           </tr>
                           <tr>
                              <td data-label="Title"><a href="/job-detail">Sales & Sourcing Associate</a></td>
                              <td data-label="Department">Sales and Sourcing</td>
                              <td data-label="Status">Active</td>
                              <td class="text-end"><a href="/job-detail" class="customBtn01 applyBtn m-0">Apply</a></td>
                           </tr>
                           <tr>
                              <td data-label="Title"><a href="/job-detail">Administrative Assistant for Reception and Clerical Duties</a></td>
                              <td data-label="Department">Admin</td>
                              <td data-label="Status">Active</td>
                              <td class="text-end"><a href="/job-detail" class="customBtn01 applyBtn m-0">Apply</a></td>
                           </tr>
                        </tbody>
                     </table>
                  </div> */}
                  <div className="productTable">

            <div className="searchProduct d-flex">
                <div className="searchSite d-flex ms-auto">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-field"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="search-submit">
                            <i className="fa-solid fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>

            <table className="table table-striped tableResponsive jobListTable">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th className="text-end">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {careers.length === 0 && (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No jobs available
                            </td>
                        </tr>
                    )}

                    {careers.map((job, index) => (
                        <tr key={index}>
                            <td data-label="Title">
                                <a href={`/job-detail/${job.id}`}>
                                    {job.title}
                                </a>
                            </td>

                            <td data-label="Department">
                                {job.department}
                            </td>

                            <td data-label="Status">
                                {job.status === 1 ? "Active" : "Closed"}
                            </td>

                            <td className="text-end">
                                <a
                                    href={`/job-detail/${job.id}`}
                                    className="customBtn01 applyBtn m-0"
                                >
                                    Apply
                                </a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
