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
      image: "./img/front/sandvika.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures.desc1"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/front/front.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures.desc1"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/front/salonGlm.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc2"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/front/gorlice.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/front/naszsalon.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/front/mjondalen.webp",
    },

    {
      title: <Trans i18nKey={"mainpictures.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/front/aleksandra.webp",
    },
  ];

  useEffect(() => {}, [content]);

  return (
    <Slider className="slider-wrapper" autoplay={2000} buttonsDisabled={true}>
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
