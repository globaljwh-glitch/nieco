import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

const BannerSlider = () => {

  const [banner, setBanner] = useState(null);

  useEffect(() => {
    axios.get("/front/banner")
      .then(res => setBanner(res.data))
      .catch(err => console.error(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (!banner) return null;

  return (
    // <section class="mainBanner p-0">
    //      <div class="bannerSliderHome">
    //         <div><img src="images/banner/banner-01.jpg" class="imgResponsive" /></div>
    //         <div><img src="images/banner/banner-02.jpg" class="imgResponsive" /></div>
    //         <div><img src="images/banner/banner-03.jpg" class="imgResponsive" /></div>
    //         <div><img src="images/banner/banner-04.jpg" class="imgResponsive" /></div>
    //         <div><img src="images/banner/banner-05.jpg" class="imgResponsive" /></div>
    //      </div>
    //      <div class="bannerContent">
    //         <h1>Northeast Ingredients Company (NEICO) is the World’s Leading Formulator, Blender, Pre-Mixer,Compounder, Processor, Contract Manufacturer and Packaging Services Provider</h1>
    //         <p>We Provide Dry Mixes and Liquid Compounds with Customers’ Formulations. Contact us with your commercial needs and technical requirements. We are strictly compliant but easy to deal with. We Will Work on Your Requirements Immediately or with Shortest Possible Lead Time!</p>
    //      </div>
    //   </section>
    <section className="mainBanner p-0">

      <Slider {...settings}>
        {banner.images?.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="imgResponsive"
              alt="banner"
            />
          </div>
        ))}
      </Slider>

      <div className="bannerContent">
        <h1>
          {banner.title}{" "}
          <span>
            {banner.subtitle}
          </span>
        </h1>

        <p
            dangerouslySetInnerHTML={{ __html: banner.content }}
        />
      </div>

    </section>
  );
};

export default BannerSlider;

