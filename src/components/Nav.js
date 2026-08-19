import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import {
  Wrapper,
  Container,
  Body,
  Page,
  LinkTag,
  SocialContainer,
  Overlaybg,
} from "../styles/Navigation.styles";
import { withRouter } from "react-router";
import Icon from "./Icon";
import NavButton from "./NavButton";

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const { t } = useTranslation();
  const [isOn, setState] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [linking, setLink] = useState("");

  useEffect(() => {
    !!linking &&
      setTimeout(() => {
        switch (linking) {
          case "home":
            history.push("/");
            setState(false);
            setLink("");
            break;
          case "about":
            history.push("/about");
            setState(false);
            setLink("");
            break;
          case "work":
            history.push("/work");
            setState(false);
            setLink("");
            break;

          case "contact":
            history.push("/contact");
            setState(false);
            setLink("");
            break;
          default:
            setLink("");
        }
        setBackground(false);
        window.scrollTo(0, 0);
      }, 0);
  }, [linking, history, setBackground]);

  useEffect(() => {
    shouldAnimate &&
      !isOn &&
      setTimeout(() => {
        setShouldAnimate(false);
      }, 0);
  }, [shouldAnimate, isOn]);

  const closeHandler = () => {
    setShouldAnimate(true);
    setState(!isOn);
  };

  const setLinkHandler = (text) => {
    setShouldAnimate(true);
    setLink(text);
  };

  useEffect(() => {
    const header = document.getElementById("header");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky + 0) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <header>
      <div id="header"></div>
      <div className="logo">
        <Link to="/" className="logo-brand" aria-label={t("Nav.1496")}>
          <img
            src="./img/logowhite.png"
            className="portret"
            alt=""
            aria-hidden="true"
          />
          <img
            src="./img/logowhite3.png"
            className="podpis"
            alt="Limes Interiør Anna Rasinska"
          />
        </Link>

        <a className="callus" href="tel:+4794712654">
          <Trans i18nKey={"Nav.1501"}></Trans>: (+47) 947 12 654
        </a>
        <a className="callus" href="mailto:studio@limes-interior.no">
          e-mail: studio@limes-interior.no
        </a>
      </div>
      <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
        <Overlaybg
          open={isOn}
          shouldAnimate={shouldAnimate}
          onClick={closeHandler}
        />
        <Container
          open={isOn}
          onClick={closeHandler}
          hasBackground={hasBackground}
        >
          <NavButton open={isOn} />
        </Container>
        <Body className="midwrpr" open={isOn} shouldAnimate={shouldAnimate}>
          <div className="conPage">
            <Page
              className="mainBtn"
              variant="home"
              onClick={() => setLinkHandler("home")}
            >
              <LinkTag><Trans i18nKey={"Nav.1496"}></Trans></LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("about")}
            >
              <LinkTag><Trans i18nKey={"Nav.1497"}></Trans></LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="work"
              onClick={() => setLinkHandler("work")}
            >
              <LinkTag><Trans i18nKey={"Nav.1498"}></Trans></LinkTag>
            </Page>

            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("contact")}
            >
              <LinkTag><Trans i18nKey={"Nav.1499"}></Trans></LinkTag>
            </Page>
          </div>

          <div className="info nav-contact">
            <span>Limes Interiør – Anna Rasinska</span>
            <span>Finnestadveien 371, 1880 Eidsberg</span>
            <a href="tel:+4794712654">(+47) 947 12 654</a>
            <a className="link" href="mailto:studio@limes-interior.no">
              studio@limes-interior.no
            </a>
            <span>Org.nr 925 621 102</span>
          </div>
        </Body>
        <SocialContainer className="soc-icon" open={isOn}>
          <span><Trans i18nKey={"Nav.1500"}></Trans></span>

          <a
            href="https://www.facebook.com/limesinterior.annarasinska/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socicon">
              <Icon name="facebook" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/anna-rasi%C5%84ska-81083413b/?locale=no_NO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socicon">
              <Icon name="linkedin" />
            </span>
          </a>
        </SocialContainer>
      </Wrapper>
    </header>
  );
};

export default withRouter(NavigationMenu);
