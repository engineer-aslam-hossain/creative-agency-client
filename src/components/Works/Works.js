import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Works.css";
const Works = () => {
  const [Sliders, SetSlider] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getSliderData")
      .then(res => res.json())
      .then(getSlider => {
        SetSlider(getSlider);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='works'>
      <h3
        className='text-center'
        style={{
          fontWeight: "500",
          fontSize: "36px",
          marginBottom: "3rem",
          color: "white",
        }}>
        Here are some of <span style={{ color: "#7AB259" }}>our works</span>{" "}
      </h3>

      <div>
        <Slider {...settings}>
          {Sliders.map(slider => (
            <div key={slider._id}>
              <img className='sliderImg' src={slider.img} alt='' />
            </div>
          ))}
        </Slider>
      </div>

      {/* <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={50}
        pagination
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        autoplay>
        {Slider.map(slider => (
          <SwiperSlide key={slider._id}>
            <img src={slider.img} alt='' />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};

export default Works;