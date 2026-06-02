import React from "react";

import { withRouter } from "react-router-dom";

import Reveal from "react-reveal/Reveal";

import Slider from "../components/Sliderhome";

import Abouthome from "../components/Abouthome";

import Expertness from "../pages/expertness";

import Carouselprojects from "../components/Carouselprojects";

import { Trans } from "react-i18next";

import Reviews from "../components/Reviews";

import Footer from "../components/Footer";

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";



const Home = () => {

  return (

    <div>

      <h1 className="sr-only">

        <Trans i18nKey={"Home.pageTitle"} />

      </h1>

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

              <h2 className="heading">

                <Trans i18nKey={"Home.1798"} />

              </h2>

            </div>

            <div className="col-12">

              <Expertness />

            </div>

          </div>

        </section>

      </Reveal>



      <Reveal effect="fadeInUp">

        <section className="container-fluid">

          <div className="row m-2-hor">

            <div className="col-12">

              <h2 className="heading">

                <Trans i18nKey={"Home.1799"} />

              </h2>

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

        <Reviews />

      </Reveal>



      <Footer />

    </div>

  );

};



export default withRouter(Home);

