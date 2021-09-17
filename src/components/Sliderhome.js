import React, { useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import { Trans } from "react-i18next";

const SliderHome = () => {
  const content = [
    {
      title: <Trans i18nKey={"mainpictures.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures.desc1"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/bg-1.jpg",
    },
    {
      title: <Trans i18nKey={"mainpictures.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc2"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/bg-2.jpg",
    },
    {
      title: <Trans i18nKey={"mainpictures.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/bg-3.jpg",
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
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderHome;
