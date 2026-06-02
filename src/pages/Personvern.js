import React from "react";
import { Trans } from "react-i18next";
import Footer from "../components/Footer";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const Personvern = () => (
  <div>
    <Efect />
    <Efect1 />
    <Efect2 />
    <div className="jumbotron head" />
    <section className="container-fluid">
      <div className="row m-2-hor">
        <div className="col-md-10 mx-auto">
          <h1 className="heading mt-5">
            <Trans i18nKey="Personvern.title" />
          </h1>
          <div className="content">
            <p><Trans i18nKey="Personvern.intro" /></p>
            <h2><Trans i18nKey="Personvern.data_title" /></h2>
            <p><Trans i18nKey="Personvern.data_text" /></p>
            <h2><Trans i18nKey="Personvern.cookies_title" /></h2>
            <p><Trans i18nKey="Personvern.cookies_text" /></p>
            <h2><Trans i18nKey="Personvern.rights_title" /></h2>
            <p><Trans i18nKey="Personvern.rights_text" /></p>
            <h2><Trans i18nKey="Personvern.contact_title" /></h2>
            <p><Trans i18nKey="Personvern.contact_text" /></p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Personvern;
