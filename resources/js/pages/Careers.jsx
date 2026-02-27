import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Marketing = () => {
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
                  <div class="productTable">
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
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
};

export default Marketing;
