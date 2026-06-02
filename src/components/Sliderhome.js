import React, { useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import { Trans } from "react-i18next";
import AnimatedSliderSlide from "./AnimatedSliderSlide";

const SliderHome = () => {
  const content = [
    {
      title: <Trans i18nKey={"mainpictures.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures.desc1"}></Trans>,
      image: "./img/front/sandvika.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures.desc1"}></Trans>,
      image: "./img/front/front.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures.desc1"}></Trans>,
      image: "./img/front/salonGlm.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc2"}></Trans>,
      image: "./img/front/gorlice.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc3"}></Trans>,
      image: "./img/front/naszsalon.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc3"}></Trans>,
      image: "./img/front/mjondalen.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures.desc3"}></Trans>,
      image: "./img/front/aleksandra.webp",
    },
  ];

  useEffect(() => {}, [content]);

  return (
    <Slider className="slider-wrapper" autoplay={2000} buttonsDisabled={true}>
      {content.map((item, index) => (
        <AnimatedSliderSlide key={index} image={item.image} index={index} hero>
          <div className="inner">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </AnimatedSliderSlide>
      ))}
    </Slider>
  );
};

export default SliderHome;
