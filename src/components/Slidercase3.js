import React, { useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import { Trans } from "react-i18next";

const Slidercase3 = () => {
  const content = [

    {
      title: <Trans i18nKey={"mainpictures2.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc2"}></Trans>,
      //button: "More Detail",
      //link: "/#",
<<<<<<< HEAD
      image: "./img/detailcase3/2.jpg",
=======
      image: "./img/flatGorlice/2.jpg",
>>>>>>> 4486cfc3cad03f0741d45ede3c62344a56a6f251
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
<<<<<<< HEAD
      image: "./img/detailcase3/3.jpg",
=======
      image: "./img/flatGorlice/3.jpg",
>>>>>>> 4486cfc3cad03f0741d45ede3c62344a56a6f251
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
<<<<<<< HEAD
      image: "./img/detailcase3/4.jpg",
=======
      image: "./img/flatGorlice/4.jpg",
>>>>>>> 4486cfc3cad03f0741d45ede3c62344a56a6f251
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
<<<<<<< HEAD
      image: "./img/detailcase3/5.jpg",
=======
      image: "./img/flatGorlice/5.jpg",
>>>>>>> 4486cfc3cad03f0741d45ede3c62344a56a6f251
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
<<<<<<< HEAD
      image: "./img/detailcase3/6.jpg",
=======
      image: "./img/flatGorlice/6.jpg",
>>>>>>> 4486cfc3cad03f0741d45ede3c62344a56a6f251
    },    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
<<<<<<< HEAD
      image: "./img/detailcase3/7.jpg",
=======
      image: "./img/flatGorlice/7.jpg",
>>>>>>> 4486cfc3cad03f0741d45ede3c62344a56a6f251
    },    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
<<<<<<< HEAD
      image: "./img/detailcase3/8.jpg",
=======
      image: "./img/flatGorlice/8.jpg",
>>>>>>> 4486cfc3cad03f0741d45ede3c62344a56a6f251
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

export default Slidercase3;
