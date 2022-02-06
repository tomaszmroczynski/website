import React, { useState, useEffect, Component } from "react";
import { Trans } from "react-i18next";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
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
    
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    
    slidesToScroll: 1,
    
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          rows: 2,
          slidesPerRow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          
          rows: 2,
          slidesPerRow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
          <div className="bg">
            <img
              src="./img/domDrammen/front.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1596"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1597"}></Trans></div>
          </div>
          <LinkWrap active={toCase === "/domDrammen"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/domDrammen")}
            >
              <div className="icon">
                <span><Trans i18nKey={"Carouselprojects.1595"}></Trans></span>
              </div>
            </Overlay>
          </LinkWrap>
        </CustomSlide>

        <CustomSlide className="itm" index={2}>
          <div className="bg">
            <img
              src="./img/studioGdynia/front1.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1598"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1599"}></Trans></div>
          </div>

          <LinkWrap active={toCase === "/studioGdynia"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/studioGdynia")}
            >
              <div className="icon">
                <span><Trans i18nKey={"Carouselprojects.1600"}></Trans></span>
              </div>
            </Overlay>
          </LinkWrap>
        </CustomSlide>

        <CustomSlide className="itm" index={3}>
          <div className="bg">
            <img
              src="./img/houseEidsberg/front2.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1601"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1602"}></Trans></div>
            
          </div>

          <LinkWrap active={toCase === "/houseEidsberg"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/houseEidsberg")}
            >
              <div className="icon">
                <span><Trans i18nKey={"Carouselprojects.1603"}></Trans></span>
              </div>
            </Overlay>
          </LinkWrap>
        </CustomSlide>

        <CustomSlide className="itm" index={4}>
          <div className="bg">
            <img
              src="./img/flatGorlice/front3.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1605"}></Trans></div>
          </div>
          <LinkWrap active={toCase === "/flatGorlice"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/flatGorlice")}
            >
              <div className="icon">
                <span><Trans i18nKey={"Carouselprojects.1606"}></Trans></span>
              </div>
            </Overlay>
          </LinkWrap>
        </CustomSlide>

        <CustomSlide className="itm" index={5}>
          <div className="bg">
            <img
              src="./img/salonSandvika/front7.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1607"}></Trans></div>
          </div>
          <LinkWrap active={toCase === "/salonSandvika"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/salonSandvika")}
            >
              <div className="icon">
                <span><Trans i18nKey={"Carouselprojects.1608"}></Trans></span>
              </div>
            </Overlay>
          </LinkWrap>
        </CustomSlide>


      </Slider>
     
    </div>
  );
};

export default withRouter(Carouselprojects);
