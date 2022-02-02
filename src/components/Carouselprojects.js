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
              src="./img/detailcase/front.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1596"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1597"}></Trans></div>
          </div>
          <LinkWrap active={toCase === "/detailcase"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/detailcase")}
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
              src="./img/detailcase1/front1.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1598"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1599"}></Trans></div>
          </div>

          <LinkWrap active={toCase === "/detailcase1"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/detailcase1")}
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
              src="./img/detailcase2/front2.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1601"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1602"}></Trans></div>
          </div>

          <LinkWrap active={toCase === "/detailcase2"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/detailcase2")}
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
              src="./img/detailcase3/front3.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1605"}></Trans></div>
          </div>
          <LinkWrap active={toCase === "/detailcase3"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/detailcase3")}
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
              src="./img/detailcase7/front7.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </div>
          <div className="desc">
            <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
            <div className="name"><Trans i18nKey={"Carouselprojects.1607"}></Trans></div>
          </div>
          <LinkWrap active={toCase === "/detailcase7"}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/detailcase7")}
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
