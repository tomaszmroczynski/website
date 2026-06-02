import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import Footer from "../components/Footer";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const NotFound = () => (
  <div>
    <Efect />
    <Efect1 />
    <Efect2 />
    <div className="jumbotron head" />
    <section className="container-fluid">
      <div className="row m-2-hor">
        <div className="col-12 text-center py-5">
          <h1 className="heading">
            <Trans i18nKey="NotFound.title" />
          </h1>
          <p className="content">
            <Trans i18nKey="NotFound.message" />
          </p>
          <p className="content">
            <Link to="/">
              <Trans i18nKey="NotFound.home" />
            </Link>
            {" · "}
            <Link to="/contact">
              <Trans i18nKey="NotFound.contact" />
            </Link>
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default NotFound;
