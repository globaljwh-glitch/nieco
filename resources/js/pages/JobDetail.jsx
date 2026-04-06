import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const JobDetail = () => {

  const { id } = useParams();
  const recaptchaRef = useRef();

  const [job, setJob] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState(null);
    const [serverError, setServerError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    resume: null,
  });
  

  // Fetch job
  useEffect(() => {
    axios.get(`/jobs/${id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error("Error fetching job:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!captchaToken) newErrors.captcha = "Please verify captcha";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }
    //data.append("resume", formData.resume);
    data.append("captcha", captchaToken);

    try {
        // const response = await axios.post(`/jobs/${id}/apply`, data, {
        //     headers: { "Content-Type": "multipart/form-data" }
        // });
        for (let pair of data.entries()) {
  console.log(pair[0], pair[1]);
}
        //const response = await axios.post(`/jobs/${id}/apply`, data);

        const response = await axios.post(`/jobs/${id}/apply`, data, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          transformRequest: (data) => data
        });

        setServerMessage(response.data.message || "Application submitted successfully");
        setServerError(null);

        setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            resume: null,
        });

        recaptchaRef.current.reset();
        setCaptchaToken(null);
        setErrors({});

    } catch (error) {
        console.error(error);

        if (error.response) {
            setServerError(error.response.data.message || "Submission failed");
        } else {
            setServerError("Network error. Please try again.");
        }

        setServerMessage(null);
    }

    setLoading(false);
  };

  if (!job) return <div className="text-center mt-5">Loading...</div>;

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="innerBanner p-0">
        <div className="bannerImage">
          <img src="/images/banner/team.jpg" className="imgHeightResponsive" />
          <div className="overlay"></div>
        </div>
        <div className="bannerContentOuter">
          <div className="container">
            <div className="bannerContent text-center m-auto">
              <h1>{job.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h3>Job Description</h3>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      </section>

{/* original start */}
<section className="greyBg">
         <div className="">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 text-center">
                     <div className="paddingLR200">
                        <h2>Apply Now.</h2>
                        <h3>Fill out the form below to connect with a IPC.</h3>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-12 m-auto">
                     <div className="formBlockOuter mt-5">
                        {serverMessage && (
                            <div className="alert alert-success">
                                {serverMessage}
                            </div>
                        )}

                        {serverError && (
                            <div className="alert alert-danger">
                                {serverError}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>Name <span>*</span></label>
                                 <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    />
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                              </div>
                              <div className="form-group">
                                 <label>Phone Number <span>*</span></label>
                                 <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    />
                                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>Email Address <span>*</span></label>
                                 <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                              </div>
                              <div className="form-group">
                                 <label>Subject <span>*</span></label>
                                 <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="form-control"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    />
                                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-group">
                                 <label>Upload Resume  <span>*</span></label>
                                 <input
                                    type="file"
                                    name="resume"
                                    className="form-control"
                                    onChange={handleChange}
                                    />
                                    {errors.resume && <small className="text-danger">{errors.resume}</small>}
                              </div>
                           </div>
                           <div className="col-md-6 form-group">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                    onChange={(token) => setCaptchaToken(token)}
                                    />
                                    {errors.captcha && <small className="text-danger">{errors.captcha}</small>}
                            </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <div className="text-end">
                                    <button
                                        type="submit"
                                        className="btn customBtn01"
                                        disabled={loading}
                                        >
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>    
                                </div>
                              </div>
                           </div>
                        </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
{/* original end */}
      {/* <section className="greyBg">
        <div className="container">
          <h2 className="text-center">Apply Now</h2>

          <form onSubmit={handleSubmit} className="mt-4">

            <div className="row">

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <small className="text-danger">{errors.subject}</small>}
              </div>

              <div className="col-md-12 mb-3">
                <input
                  type="file"
                  name="resume"
                  className="form-control"
                  onChange={handleChange}
                />
                {errors.resume && <small className="text-danger">{errors.resume}</small>}
              </div>

              <div className="col-md-12 mb-3">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                />
                {errors.captcha && <small className="text-danger">{errors.captcha}</small>}
              </div>

              <div className="col-md-12 text-end">
                <button
                  type="submit"
                  className="btn customBtn01"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

            </div>

          </form>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default JobDetail;