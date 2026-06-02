import React, { Component, createRef, Fragment } from "react";
import Icon from "../components/Icon";
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
import Slider from "../components/SliderStudioGdynia";
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
          
          {/* <div className="videocontainer">
                  <video
                    className="video"
                    autoPlay
                    loop
                    muted
                    poster={"./img/projects/big/img2.webp"}
                  >
                    <source
                      src={"./img/projects/big/film.mp4"}
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
                    <span><Trans i18nKey={"studioGdynia.2467"}></Trans></span>
                  </BackButton>
                  <ClientTag><Trans i18nKey={"studioGdynia.2543"}></Trans></ClientTag>
                  <Title><Trans i18nKey={"studioGdynia.2544"}></Trans></Title>
                  <TechniqueTitle><Trans i18nKey={"studioGdynia.2679"}></Trans></TechniqueTitle>
                </div>
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject">
              <div className="row m-2-hor">
                <div className="col-md-8">
    
                  <p className="content"><span className="color"><Trans i18nKey={"studioGdynia.2680"}></Trans> </span><Trans i18nKey={"studioGdynia.3681"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"studioGdynia.3682"}></Trans> </span><Trans i18nKey={"studioGdynia.3683"}></Trans></p>
                  <p className="content"><span className="color"><Trans i18nKey={"studioGdynia.3684"}></Trans> </span><Trans i18nKey={"studioGdynia.3685"}></Trans></p>
                </div>
                <div className="col-md-4 sticky">
                  <ul className="detailproject">
                    <li>
                      <span className="tile"><Trans i18nKey={"studioGdynia.4270"}></Trans></span>
                      <span><Trans i18nKey={"studioGdynia.4318"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"studioGdynia.4434"}></Trans></span>
                      <span><Trans i18nKey={"studioGdynia.4478"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"studioGdynia.4600"}></Trans></span>
                      <span><Trans i18nKey={"studioGdynia.4647"}></Trans></span>
                    </li>
                    <li>
                      <span className="tile"><Trans i18nKey={"studioGdynia.4767"}></Trans></span>
                      <span><Trans i18nKey={"studioGdynia.4817"}></Trans></span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="tags">
                    <span className="heading"><Trans i18nKey={"studioGdynia.5050"}></Trans></span>
                    <span className="content"><Trans i18nKey={"studioGdynia.5111"}></Trans></span>
                    <span className="content"><Trans i18nKey={"studioGdynia.5177"}></Trans></span>
                    <span className="content"><Trans i18nKey={"studioGdynia.5241"}></Trans></span>
                    <span className="content"><Trans i18nKey={"studioGdynia.5304"}></Trans></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading"><Trans i18nKey={"studioGdynia.5504"}></Trans></span>
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
