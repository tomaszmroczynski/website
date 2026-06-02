import React, { Component, createRef, Fragment } from "react";
import Icon from "../components/Icon";
import Slider from "../components/SliderDomEidsberg";
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
                    <span><Trans i18nKey={"houseEidsberg.2137"}></Trans></span>
                  </BackButton>
                  <ClientTag><Trans i18nKey={"houseEidsberg.2213"}></Trans></ClientTag>
                  <Title><Trans i18nKey={"houseEidsberg.2260"}></Trans></Title>
                  <TechniqueTitle><Trans i18nKey={"houseEidsberg.2321"}></Trans></TechniqueTitle>
                </div>
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject" >
              <div className="row m-2-hor" >
                <div className="col-md-8">
                  <p className="content"><span className="color"><Trans i18nKey={"houseEidsberg.2917"}></Trans></span><Trans i18nKey={"houseEidsberg.2918"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"houseEidsberg.3404"}></Trans></span><Trans i18nKey={"houseEidsberg.3405"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"houseEidsberg.3407"}></Trans></span><Trans i18nKey={"houseEidsberg.3406"}></Trans></p>
                </div>
                <div className="col-md-4 sticky">
                  <ul className="detailproject">
                    <li>
                      <span className="tile"><Trans i18nKey={"houseEidsberg.3912"}></Trans></span>
                      <span><Trans i18nKey={"houseEidsberg.3960"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"houseEidsberg.4076"}></Trans></span>
                      <span><Trans i18nKey={"houseEidsberg.4120"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"houseEidsberg.4242"}></Trans></span>
                      <span><Trans i18nKey={"houseEidsberg.4289"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"houseEidsberg.4409"}></Trans></span>
                      <span><Trans i18nKey={"houseEidsberg.4459"}></Trans></span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="tags">
                    <span className="heading"><Trans i18nKey={"houseEidsberg.4692"}></Trans></span>
                    <span className="content"><Trans i18nKey={"houseEidsberg.4753"}></Trans></span>
                    <span className="content"><Trans i18nKey={"houseEidsberg.4819"}></Trans></span>
                    <span className="content"><Trans i18nKey={"houseEidsberg.4883"}></Trans></span>
                    <span className="content"><Trans i18nKey={"houseEidsberg.4946"}></Trans></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading"><Trans i18nKey={"houseEidsberg.5146"}></Trans></span>
          <span className="content" onClick={this.shareOnFacebook} style={{ cursor: "pointer" }}>
            <Icon name="facebook" />
          </span>

          <span className="content" onClick={this.shareOnX} style={{ cursor: "pointer" }}>
            <Icon name="x" />
          </span>

          <span className="content" onClick={this.shareOnPinterest} style={{ cursor: "pointer" }}>
            <Icon name="pinterest" />
          </span>

          <span className="content" onClick={this.shareOnInstagram} style={{ cursor: "pointer" }}>
            <Icon name="instagram" />
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
