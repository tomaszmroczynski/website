import React, { useState, useEffect, Component } from "react";
import { Trans } from "react-i18next";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkWrap, Overlay } from "../styles/Work.styles";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

const Carouselprojects = ({ history }) => {
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 3000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);
  return (
    <div className="slick slickproject">
      <Slider {...settings}>
        <CustomSlide className="itm" index={1}>
          <Link to="/salonGlm">
            <div className="bg">
              <img
                src="./img/salonGlm/front.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1596"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1597"}></Trans><br /><Trans i18nKey={"Carouselprojects.15971"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
        <CustomSlide className="itm" index={2}>
          <Link to="/lazMoss">
            <div className="bg">
              <img
                src="./img/lazMoss/front.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1596"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1594"}></Trans><br /><Trans i18nKey={"Carouselprojects.1591"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
        <CustomSlide className="itm" index={3}>
          <Link to="/studioGdynia">
            <div className="bg">
              <img
                src="./img/studioGdynia/front1.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1598"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1599"}></Trans><br /><Trans i18nKey={"Carouselprojects.15991"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
        <CustomSlide className="itm" index={4}>
          <Link to="/houseEidsberg">
            <div className="bg">
              <img
                src="./img/houseEidsberg/front2.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1601"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1602"}></Trans><br /><Trans i18nKey={"Carouselprojects.16021"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
        <CustomSlide className="itm" index={5}>
          <Link to="/flat-gorlice-poland">
            <div className="bg">
              <img
                src="./img/flat-gorlice-poland/front.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1605"}></Trans><br /><Trans i18nKey={"Carouselprojects.16051"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
        <CustomSlide className="itm" index={6}>
          <Link to="/salonSandvika">
            <div className="bg">
              <img
                src="./img/salonSandvika/front7.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1607"}></Trans><br /><Trans i18nKey={"Carouselprojects.16071"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
        <CustomSlide className="itm" index={7}>
          <Link to="/mjondalen">
            <div className="bg">
              <img
                src="./img/mjondalen/front.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1596"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1590"}></Trans><br /><Trans i18nKey={"Carouselprojects.1589"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
        <CustomSlide className="itm" index={8}>
          <Link to="/salonSandvika">
            <div className="bg">
              <img
                src="./img/salonSandvika/front7.webp"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
              <div className="name"><Trans i18nKey={"Carouselprojects.1607"}></Trans><br /><Trans i18nKey={"Carouselprojects.16071"}></Trans></div>
            </div>
          </Link>
        </CustomSlide>
      </Slider>
    </div>
  );
};

export default Carouselprojects;

