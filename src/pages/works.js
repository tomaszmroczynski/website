import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

import { LinkWrap, Overlay } from "../styles/Work.styles";

import Footer from "../components/Footer";
import { Trans } from "react-i18next";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const Works = ({ history }) => {
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-12">
              <h1 className="heading mt-5">
                Find design ideas from our design gallery
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-md-6 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/salonGlm"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/salonGlm")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/salonGlm/front.webp"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag"><Trans i18nKey={"Carouselprojects.1596"}></Trans></div>
                          <div className="name"><Trans i18nKey={"Carouselprojects.1597"}></Trans></div>
                        </div>
                        <div className="icon">
                          <span><Trans i18nKey={"Carouselprojects.1595"}></Trans></span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/studioGdynia"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/studioGdynia")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/studioGdynia/front1.webp"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag"><Trans i18nKey={"Carouselprojects.1598"}></Trans></div>
                          <div className="name"><Trans i18nKey={"Carouselprojects.1599"}></Trans></div>
                        </div>
                        <div className="icon">
                        <span><Trans i18nKey={"Carouselprojects.1595"}></Trans></span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/houseEidsberg"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/houseEidsberg")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/houseEidsberg/front2.webp"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag"><Trans i18nKey={"Carouselprojects.1601"}></Trans></div>
                          <div className="name"><Trans i18nKey={"Carouselprojects.1602"}></Trans></div>
                        </div>
                        <div className="icon">
                          <span><Trans i18nKey={"Carouselprojects.1595"}></Trans></span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/flat-gorlice-poland"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/flat-gorlice-poland")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/flat-gorlice-poland/front3.webp"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag"><Trans i18nKey={"Carouselprojects.1604"}></Trans></div>
                          <div className="name"><Trans i18nKey={"Carouselprojects.1605"}></Trans></div>
                        </div>
                        <div className="icon">
                        <span><Trans i18nKey={"Carouselprojects.1595"}></Trans></span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>





            <div className="col-12">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <div className="page-link">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                </li>
                <li className="page-item">
                  <div className="page-link active">1</div>
                </li>
                <li className="page-item">
                  <div className="page-link">2</div>
                </li>
                <li className="page-item">
                  <div className="page-link">3</div>
                </li>
                <li className="page-item">
                  <div className="page-link">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(Works);
