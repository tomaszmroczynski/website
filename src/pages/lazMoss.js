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

import Footer from "../components/Footer";
import { Efectr, Efectr1, Efectr2 } from "../styles/effect.styles";
import Slider from "../components/SliderLazMoss";


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

          {/* <div className="videocontainer">
                  <video
                    className="video"
                    autoPlay
                    loop
                    muted
                    poster={"./img/projects/big/img1.jpg"}
                  >
                    <source
                      src={"./img/projects/big/filmw.mp4"}
                      type="video/mp4"
                    />
                  </video>
                  </div> */}
            <Reveal effect="fadeIn">

              <Hero className="mainhero">
              <Slider />
            
                
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
                    <span><Trans i18nKey={"lazMoss.2428"}></Trans></span>
                  </BackButton>
                  <ClientTag><Trans i18nKey={"lazMoss.2504"}></Trans></ClientTag>
                  <Title><Trans i18nKey={"lazMoss.2551"}></Trans></Title>
                  <TechniqueTitle><Trans i18nKey={"lazMoss.2613"}></Trans></TechniqueTitle>
                </div>
                
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject">

              <div className="row m-2-hor">
                <div className="col-md-8">
                  
                  <p className="content"><span className="color"><Trans i18nKey={"lazMoss.3209"}></Trans> </span><Trans i18nKey={"lazMoss.3210"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"lazMoss.3696"}></Trans> </span><Trans i18nKey={"lazMoss.3697"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"lazMoss.3699"}></Trans> </span><Trans i18nKey={"lazMoss.3698"}></Trans></p>
                </div>
                <div className="col-md-4 sticky">
                  <ul className="detailproject">
                    <li>
                      <span className="tile"><Trans i18nKey={"lazMoss.4204"}></Trans></span>
                      <span><Trans i18nKey={"lazMoss.4252"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"lazMoss.4368"}></Trans></span>
                      <span><Trans i18nKey={"lazMoss.4412"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"lazMoss.4534"}></Trans></span>
                      <span><Trans i18nKey={"lazMoss.4581"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"lazMoss.4701"}></Trans></span>
                      <span><Trans i18nKey={"lazMoss.4751"}></Trans></span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="tags">
                    <span className="heading"><Trans i18nKey={"lazMoss.4984"}></Trans></span>
                    <span className="content"><Trans i18nKey={"lazMoss.5045"}></Trans></span>
                    <span className="content"><Trans i18nKey={"lazMoss.5111"}></Trans></span>
                    <span className="content"><Trans i18nKey={"lazMoss.5175"}></Trans></span>
                    <span className="content"><Trans i18nKey={"lazMoss.5238"}></Trans></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading"><Trans i18nKey={"lazMoss.5438"}></Trans></span>
                    <span className="content">
                      <i className="fa fa-facebook-f"></i>
                    </span>
                    <span className="content">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <span className="content">
                      <i className="fa  fa-instagram"></i>
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
