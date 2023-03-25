import React from "react";
import { Trans } from "react-i18next";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

import Abouthome from "../components/Abouthome";

import Carouselprojects from "../components/Carouselprojects";
import Footer from "../components/Footer";

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const About = ({ history }) => {
  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeIn">
        <section className="jumbotron imgtop">
          <img src="./img/imgabout.jpg" className="img-fluid" alt="#" />
        </section>
      </Reveal>

      {/* <Reveal effect="fadeIn">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-4">
              <h1><Trans i18nKey={"About.1795"}></Trans></h1>
            </div>
            <div className="col-md-8">
              <div className="content"><Trans i18nKey={"About.1796"}></Trans>

              </div>
            </div>
          </div>
        </section>
      </Reveal> */}

      <Reveal effect="fadeIn">
        <Abouthome />
      </Reveal>

      
      <Reveal effect="fadeInUp"></Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading" style={{ paddingTop: 30 }}><Trans i18nKey={"About.1797"}></Trans>
               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Carouselprojects />
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(About);
