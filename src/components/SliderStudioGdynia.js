import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import { Trans } from "react-i18next";
import AnimatedSliderSlide from "./AnimatedSliderSlide";

const SliderStudioGdynia = () => {
  const content = [
    {
      title: <Trans i18nKey={"mainpictures2.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures2.desc1"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/studioGdynia/1.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc2"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/studioGdynia/2.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/studioGdynia/3.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/studioGdynia/4.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/studioGdynia/5.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/studioGdynia/6.webp",
    },    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/studioGdynia/7.webp",
    },
  ];

  return (
    <Slider className="slider-wrapper" autoplay={1000}>
      {content.map((item, index) => (
        <AnimatedSliderSlide key={index} image={item.image} index={index} />
      ))}
    </Slider>
  );
};

export default SliderStudioGdynia;
