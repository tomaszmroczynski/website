import React, { Component, createRef, Fragment } from "react";
import { Trans } from "react-i18next";
import {
  Hero,
  Title,
  TechniqueTitle,
  ClientTag,
  CaseWrapper,
  BackButton,
  BackArrow,
} from "../styles/Case.styles";

import Reveal from "react-reveal/Reveal";
import { withRouter } from "react-router";
import Slider from "../components/SliderHomeStaging";
import Footer from "../components/Footer";
import { Efectr, Efectr1, Efectr2 } from "../styles/effect.styles";

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

class Case extends Component {
  constructor(props) {
    super(props);
    this.introRef = createRef();

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: "",
    };
  }

 
  shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  };

  shareOnX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Sprawdź tę dekorację!");
    window.open(`https://x.com/intent/tweet?url=${url}&text=${text}`, "_blank");
  };

  shareOnPinterest = () => {
    const url = encodeURIComponent(window.location.href);
    const media = encodeURIComponent("https://yourwebsite.com/path-to-image.jpg"); // Podmień na poprawny URL obrazka
    const description = encodeURIComponent("Zobacz tę dekorację!");
    window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`, "_blank");
  };

  shareOnInstagram = () => {
    alert("Instagram nie obsługuje bezpośredniego udostępniania linków. Dodaj post ręcznie.");
  };

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push("/");
      }, 400);
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push(this.state.animateCase);
        window.scrollTo(0, 0);
      }, 400);
    }
  }

  render() {
    return (
      <Fragment>
        <Efectr />
        <Efectr1 />
        <Efectr2 />
        <ScrollTop>
          <CaseWrapper>
            <Reveal effect="fadeIn">
              <Hero
                className="mainhero"

              >
                <Slider/>
                <div className="herocaption">
                  <BackButton
                    className="backdetail"
                    onClick={() =>
                      this.setState({ toBack: true, hasBackground: false })
                    }
                    toBack={this.state.toBack}
                    hasBackground={this.state.hasBackground}
                  >
                    <BackArrow src="./img/back.png" alt="Back to Projects" />
                    <span><Trans i18nKey={"home-staging.2133"}></Trans></span>
                  </BackButton>
                  <ClientTag><Trans i18nKey={"home-staging.2209"}></Trans></ClientTag>
                  <Title><Trans i18nKey={"home-staging.2256"}></Trans></Title>
                  <TechniqueTitle></TechniqueTitle>
                </div>
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject">
              <div className="row m-2-hor">
                <div className="col-md-8">
                <p className="content"><Trans i18nKey={"home-staging.2313"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"home-staging.2910"}></Trans></span></p>
                  
                  <ul className="detailproject">
                    <li>
                      
                      <span ><Trans i18nKey={"home-staging.3403"}></Trans></span>
                    </li>
                    <li>
                      
                      <span><Trans i18nKey={"home-staging.3404"}></Trans></span>
                    </li>
                    <li>                   
                      <span><Trans i18nKey={"home-staging.3405"}></Trans></span>
                    </li>
                    <li>
                     
                      <span><Trans i18nKey={"home-staging.3406"}></Trans></span>
                    </li>
                    <li>
                      
                      <span ><Trans i18nKey={"home-staging.3407"}></Trans></span>
                    </li>
                    <li>
                      
                      <span><Trans i18nKey={"home-staging.3408"}></Trans></span>
                    </li>
                  
                 

                  </ul>
                  <p className="content"><span className="color"><Trans i18nKey={"interiorArchitecture.3411"}></Trans></span></p>
                </div>
                {/* <div className="col-md-4 sticky">
                  <ul className="detailproject">
                    <li>
                      <span className="tile"><Trans i18nKey={"home-staging.3904"}></Trans></span>
                      <span><Trans i18nKey={"home-staging.3952"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"home-staging.4068"}></Trans></span>
                      <span><Trans i18nKey={"home-staging.4112"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"home-staging.4234"}></Trans></span>
                      <span><Trans i18nKey={"home-staging.4281"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"home-staging.4401"}></Trans></span>
                      <span><Trans i18nKey={"home-staging.4451"}></Trans></span>
                    </li>
                  </ul>
                </div> */}
                <div className="col-md-12">
                  {/* <div className="tags">
                    <span className="heading"><Trans i18nKey={"home-staging.4684"}></Trans></span>
                    <span className="content"><Trans i18nKey={"home-staging.4745"}></Trans></span>
                    <span className="content"><Trans i18nKey={"home-staging.4811"}></Trans></span>
                    <span className="content"><Trans i18nKey={"home-staging.4875"}></Trans></span>
                    <span className="content"><Trans i18nKey={"home-staging.4938"}></Trans></span>
                  </div> */}
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading"><Trans i18nKey={"home-staging.5138"}></Trans></span>
          <span className="content" onClick={this.shareOnFacebook} style={{ cursor: "pointer" }}>
            <i className="fa fa-facebook-f"></i>
          </span>

          <span className="content" onClick={this.shareOnX} style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-x-twitter"></i>
          </span>

          <span className="content" onClick={this.shareOnPinterest} style={{ cursor: "pointer" }}>
            <i className="fa fa-pinterest"></i>
          </span>

          <span className="content" onClick={this.shareOnInstagram} style={{ cursor: "pointer" }}>
            <i className="fa fa-instagram"></i>
          </span>
                  </div>
                </div>
              </div>
            </section>
          </CaseWrapper>
        </ScrollTop>

        <Reveal effect="fadeInUp"></Reveal>

        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(Case);
