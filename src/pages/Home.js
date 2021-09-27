import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";
import Slider from "../components/Sliderhome";
import Abouthome from "../components/Abouthome";
import Expertness from "../pages/expertness";
import Carouselprojects from "../components/Carouselprojects";
import { Trans } from "react-i18next";
import Footer from "../components/Footer";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const Home = ({ history }) => {
  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
          <Slider />
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Abouthome />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading"><Trans i18nKey={"About.1798"}></Trans></div>
            </div>
            <div className="col-12">
              <Expertness />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid bggray py-0">
          <div className="row m-2-hor">
            <div className="col-12"></div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">My Projects</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Carouselprojects />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading"></div>
            </div>
            <div className="col-12"></div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp"></Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid pt-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading"></div>
            </div>
            <div className="col-12"></div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(Home);
