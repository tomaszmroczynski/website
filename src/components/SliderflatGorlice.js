import React, { useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import { Trans } from "react-i18next";

const SliderflatGorlice = () => {
  const content = [

    {
      title: <Trans i18nKey={"mainpictures2.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc2"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/flat-gorlice-poland/2.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/flat-gorlice-poland/3.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/flat-gorlice-poland/4.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/flat-gorlice-poland/5.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/flat-gorlice-poland/6.webp",
    },    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/flat-gorlice-poland/7.webp",
    },    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/flat-gorlice-poland/8.webp",
    },
  ];

  useEffect(() => {}, [content]);

  return (
    <Slider className="slider-wrapper" autoplay={1000}>
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

export default SliderflatGorlice;
