import React, { Component, createRef, Fragment } from "react";
import Slider from "../components/Slidercase2";
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
            <Reveal effect="fadeIn">
            
              <Hero
                className="mainhero"
               
                ><Slider />
                <div className="herocaption" >
                  <BackButton
                    className="backdetail"
                    onClick={() =>
                      this.setState({ toBack: true, hasBackground: false })
                    }
                    toBack={this.state.toBack}
                    hasBackground={this.state.hasBackground}
                  >
                    <BackArrow src="./img/back.png" alt="Back to Projects" />
                    <span><Trans i18nKey={"detailCase2.2137"}></Trans></span>
                  </BackButton>
                  <ClientTag><Trans i18nKey={"detailCase2.2213"}></Trans></ClientTag>
                  <Title><Trans i18nKey={"detailCase2.2260"}></Trans></Title>
                  <TechniqueTitle><Trans i18nKey={"detailCase2.2321"}></Trans></TechniqueTitle>
                </div>
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject" >
              <div className="row m-2-hor" >
                <div className="col-md-8">
                  <p className="content"><span className="color"><Trans i18nKey={"detailCase2.2917"}></Trans></span><Trans i18nKey={"detailCase2.2918"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"detailCase2.3404"}></Trans></span><Trans i18nKey={"detailCase2.3405"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"detailCase2.3407"}></Trans></span><Trans i18nKey={"detailCase2.3406"}></Trans></p>
                </div>
                <div className="col-md-4 sticky">
                  <ul className="detailproject">
                    <li>
                      <span className="tile"><Trans i18nKey={"detailCase2.3912"}></Trans></span>
                      <span><Trans i18nKey={"detailCase2.3960"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"detailCase2.4076"}></Trans></span>
                      <span><Trans i18nKey={"detailCase2.4120"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"detailCase2.4242"}></Trans></span>
                      <span><Trans i18nKey={"detailCase2.4289"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"detailCase2.4409"}></Trans></span>
                      <span><Trans i18nKey={"detailCase2.4459"}></Trans></span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="tags">
                    <span className="heading"><Trans i18nKey={"detailCase2.4692"}></Trans></span>
                    <span className="content"><Trans i18nKey={"detailCase2.4753"}></Trans></span>
                    <span className="content"><Trans i18nKey={"detailCase2.4819"}></Trans></span>
                    <span className="content"><Trans i18nKey={"detailCase2.4883"}></Trans></span>
                    <span className="content"><Trans i18nKey={"detailCase2.4946"}></Trans></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading"><Trans i18nKey={"detailCase2.5146"}></Trans></span>
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
