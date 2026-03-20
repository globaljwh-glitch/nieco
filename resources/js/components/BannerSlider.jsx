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

