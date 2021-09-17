import React, { useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import { Trans } from "react-i18next";

const Slidercase2 = () => {
  const content = [
    {
      title: <Trans i18nKey={"mainpictures2.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures2.desc1"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/mick/mick-2.jpg",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc2"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/mick/mick-1.jpg",
    },
  ];

  useEffect(() => {}, [content]);

  return (
    <Slider className="slider-wrapper" autoplay={6000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >

        </div>
      ))}
    </Slider>
  );
};

export default Slidercase2;
