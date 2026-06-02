import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from "react-i18next";

import { LinkWrap, Overlay } from "../styles/Work.styles";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}
const Expertness = ({ history }) => {
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          autoplay: true,
          speed: 4000,
    autoplaySpeed: 4000,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          autoplay: true,
          speed: 4000,
    autoplaySpeed: 4000,
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="slick">
      <Slider {...settings}>
        <LinkWrap active={toCase === "/interiorArchitecture"}>
          <Overlay
            active={!!toCase}
            onMouseDown={(e) => setCoords(e.nativeEvent.x)}
            onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/interiorArchitecture")}
          >
            <CustomSlide className="itm" index={1}>
              <div className="bg">
                <img
                  src="./img/feature/1.webp"
                  className="img-fluid"
                  alt="Interior Architecture"
                  loading="lazy"
                />
              </div>
              <div className="desc">
                <div className="namet"></div>
                <div className="content">
                <h3 className="namet"><Trans i18nKey="expertness.1800"></Trans></h3>
                </div>
                <div className="icon">
                  <span><Trans i18nKey="expertness.1802"></Trans></span>
                </div>
              </div>
            </CustomSlide>
          </Overlay>
        </LinkWrap>
        <LinkWrap active={toCase === "/dekorasjon-av-arrangementer"}>
          <Overlay
            active={!!toCase}
            onMouseDown={(e) => setCoords(e.nativeEvent.x)}
            onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/dekorasjon-av-arrangementer")}
          >
            <CustomSlide className="itm" index={2}>
              <div className="bg">
                <img
                  src="./img/feature/dekorasjon-av-arrangementer.webp"
                  className="img-fluid"
                  alt="dekorasjon-av-arrangementer"
                  loading="lazy"
                />
              </div>
              <div className="desc">
                <div className="namet"></div>
                <div className="content"><h3 className="namet"><Trans i18nKey="expertness.1809"></Trans></h3>
                  
                </div>
                <div className="icon">
                  <span><Trans i18nKey="expertness.1808"></Trans></span>
                </div>
              </div>
            </CustomSlide>
          </Overlay>
        </LinkWrap>

        <LinkWrap active={toCase === "/decoration"}>
          <Overlay
            active={!!toCase}
            onMouseDown={(e) => setCoords(e.nativeEvent.x)}
            onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/decoration")}
          >
            <CustomSlide className="itm" index={3}>
              <div className="bg">
                <img
                  src="./img/feature/img2.webp"
                  className="img-fluid"
                  alt="decoration"
                  loading="lazy"
                />
              </div>
              <div className="desc">
                <div className="namet"></div>
                <div className="content"><h3 className="namet"><Trans i18nKey="expertness.1803"></Trans></h3>
                 
                </div>
                <div className="icon">
                  <span><Trans i18nKey="expertness.1805"></Trans></span>
                </div>
              </div>
            </CustomSlide>
          </Overlay>
        </LinkWrap>

        <LinkWrap active={toCase === "/home-staging"}>
          <Overlay
            active={!!toCase}
            onMouseDown={(e) => setCoords(e.nativeEvent.x)}
            onMouseUp={(e) => handleCaseSwap(e.nativeEvent, "/home-staging")}
          >
            <CustomSlide className="itm" index={4}>
              <div className="bg">
                <img
                  src="./img/feature/img5.webp"
                  className="img-fluid"
                  alt="home-staging"
                  loading="lazy"
                />
              </div>
              <div className="desc">
                <div className="namet"></div>
                <div className="content"><h3 className="namet"><Trans i18nKey="expertness.1806"></Trans></h3>
                  
                </div>
                <div className="icon">
                  <span><Trans i18nKey="expertness.1808"></Trans></span>
                </div>
              </div>
            </CustomSlide>
          </Overlay>
        </LinkWrap>

      </Slider>
    </div>
  );
};

export default withRouter(Expertness);
