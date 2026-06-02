import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import { Trans } from "react-i18next";
import AnimatedSliderSlide from "./AnimatedSliderSlide";

const SliderInteriorArchitecture = () => {
  const content = [
    {
      title: <Trans i18nKey={"mainpictures2.title1"}></Trans>,
      description:  <Trans i18nKey={"mainpictures2.desc1"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/feature/interiorArchitecture/1.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title2"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc2"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/feature/interiorArchitecture/2.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/feature/interiorArchitecture/3.webp",
    },
    {
      title: <Trans i18nKey={"mainpictures2.title3"}></Trans>,
      description: <Trans i18nKey={"mainpictures2.desc3"}></Trans>,
      //button: "More Detail",
      //link: "/#",
      image: "./img/feature/interiorArchitecture/4.webp",
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

export default SliderInteriorArchitecture;
