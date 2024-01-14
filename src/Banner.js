import React, { useState } from "react";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="image_container">
      <div className="image_list">
        <Slider {...settings}>
          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/71Xm716d+GL.jpg" />
          </div>
          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/61W9hWEIlZL.jpg" />
          </div>
          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/61FebIKnd3L.jpg" />
          </div>
          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/71KRo-Md-FL.jpg" />
          </div>
          <div className="image_item">
            <img src="  https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710Q61rv7mL._SX3000_.jpg" />
          </div>
          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/71XNpZbNWNL._SX3000_.jpg" />
          </div>
          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" />
          </div>

          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg" />
          </div>

          <div className="image_item">
            <img src="https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg" />
          </div>
        </Slider>
      </div>
      <div className="button_img_container"></div>
    </div>
  );
};

export default Banner;
