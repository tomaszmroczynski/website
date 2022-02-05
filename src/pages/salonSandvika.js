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
import Slider from "../components/Slidercase7";
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
                    <span><Trans i18nKey={"salonSandvika.2133"}></Trans></span>
                  </BackButton>
                  <ClientTag><Trans i18nKey={"salonSandvika.2209"}></Trans></ClientTag>
                  <Title><Trans i18nKey={"salonSandvika.2256"}></Trans></Title>
                  <TechniqueTitle></TechniqueTitle>
                </div>
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject">
              <div className="row m-2-hor">
                <div className="col-md-8">
                <p className="content"><Trans i18nKey={"salonSandvika.2313"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"salonSandvika.2910"}></Trans></span></p>
                  
                  <ul className="detailproject">
                    <li>
                      
                      <span ><Trans i18nKey={"salonSandvika.3403"}></Trans></span>
                    </li>
                    <li>
                      
                      <span><Trans i18nKey={"salonSandvika.3404"}></Trans></span>
                    </li>
                    <li>                   
                      <span><Trans i18nKey={"salonSandvika.3405"}></Trans></span>
                    </li>
                    <li>
                     
                      <span><Trans i18nKey={"salonSandvika.3406"}></Trans></span>
                    </li>
                    <li>
                      
                      <span ><Trans i18nKey={"salonSandvika.3407"}></Trans></span>
                    </li>
                    <li>
                      
                      <span><Trans i18nKey={"salonSandvika.3408"}></Trans></span>
                    </li>
                  
                 

                  </ul>
                  <p className="content"><span className="color"><Trans i18nKey={"salonSandvika.3411"}></Trans></span></p>
                </div>
                 <div className="col-md-4 sticky">
                  <ul className="detailproject">
                    <li>
                      <span className="tile"><Trans i18nKey={"homeStaging.3904"}></Trans></span>
                      <span><Trans i18nKey={"homeStaging.3952"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"homeStaging.4068"}></Trans></span>
                      <span><Trans i18nKey={"homeStaging.4112"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"homeStaging.4234"}></Trans></span>
                      <span><Trans i18nKey={"homeStaging.4281"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"homeStaging.4401"}></Trans></span>
                      <span><Trans i18nKey={"homeStaging.4451"}></Trans></span>
                    </li>
                  </ul>
                </div> 
                <div className="col-md-12">
                   <div className="tags">
                    <span className="heading"><Trans i18nKey={"homeStaging.4684"}></Trans></span>
                    <span className="content"><Trans i18nKey={"homeStaging.4745"}></Trans></span>
                    <span className="content"><Trans i18nKey={"homeStaging.4811"}></Trans></span>
                    <span className="content"><Trans i18nKey={"homeStaging.4875"}></Trans></span>
                    <span className="content"><Trans i18nKey={"homeStaging.4938"}></Trans></span>
                  </div> 
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading"><Trans i18nKey={"salonSandvika.5138"}></Trans></span>
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
