import React from "react";
import { Trans } from "react-i18next";
import { withRouter } from "react-router-dom";
import emailjs from "emailjs-com";

import Reveal from "react-reveal/Reveal";

import SimpleMap from "../components/Map";
import Footer from "../components/Footer";
import { CONTACT_EMAIL, EMAILJS } from "../config/contact";
import Icon from "../components/Icon";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Finnestadveien+371,+1880+Eidsberg,+Norway";

const Contact = ({ history }) => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    const form = e.target;
    const templateParams = {
      to_email: CONTACT_EMAIL,
      to_name: "Limes Interiør Anna Rasinska",
      reply_to: form.user_email.value,
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
      telephone: form.telephone.value,
    };

    emailjs
      .send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        templateParams,
        EMAILJS.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
          button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log(error.text);
          failed.classList.add("show");
        }
      );
  }

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h1>
              <Trans i18nKey={"Contact.1296"}></Trans> <br />
              <Trans i18nKey={"Contact.1297"}></Trans> <span className="color"><Trans i18nKey={"Contact.1298"}></Trans></span> <Trans i18nKey={"Contact.1299"}></Trans>
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container pt-0">
          <div className="row">
            <div className="col-12">
              <SimpleMap />
            </div>
            <div className="col-md-6">
              <div className="text-side">
                <h3 className="heading"><Trans i18nKey={"Contact.1822"}></Trans> </h3>
                <p><Trans i18nKey={"Contact.1867"}></Trans></p>
                <div className="address">
                  <div className="heading">Limes Interiør – Anna Rasinska</div>
                  <div className="list">
                    <Icon name="mapMarker" />
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Finnestadveien 371, 1880 Eidsberg, Norge
                    </a>
                  </div>
                  <div className="list">
                    <Icon name="envelope" />
                    <a
                      href="mailto:studio@limes-interior.no"
                      rel="noopener noreferrer"
                    >
                      studio@limes-interior.no
                    </a>
                  </div>
                  <div className="list">
                    <Icon name="phone" />
                    <a href="tel:+4794712654">+47 947 12 654</a>
                  </div>
                  <div className="list">
                    <Icon name="building" />
                    Org.nr 925 621 102
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-side">
                <form className="formcontact" onSubmit={sendEmail}>
                  <label><Trans i18nKey={"Contact.form_name"}></Trans></label>
                  <input type="text" name="user_name" required />
                  <label><Trans i18nKey={"Contact.form_email"}></Trans></label>
                  <input type="email" name="user_email" required />
                  <label><Trans i18nKey={"Contact.form_message"}></Trans></label>
                  <textarea name="message" required />
                  <label><Trans i18nKey={"Contact.form_tel"}></Trans></label>
                  <input type="tel" name="telephone" required />
                  <div id="success" className="hide">
                    <Trans i18nKey={"Contact.form_success"}></Trans>
                  </div>
                  <div id="failed" className="hide">
                    <Trans i18nKey={"Contact.form_failed"}></Trans>
                  </div>
                  <button type="submit" id="buttonsent">
                    <span className="shine"></span>
                    <span><Trans i18nKey={"Contact.form_send"}></Trans></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid" id="omrader">
          <div className="row m-2-hor">
            <div className="col-12">
              <h2 className="heading"><Trans i18nKey={"Omrader.title"}></Trans></h2>
            </div>
            <div className="col-md-6">
              <div className="content">
                <p><Trans i18nKey={"Omrader.intro"}></Trans></p>
                <p><Trans i18nKey={"Omrader.body"}></Trans></p>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="list-home">
                <li><Trans i18nKey={"Omrader.indreOstfold"}></Trans></li>
                <li><Trans i18nKey={"Omrader.mysen"}></Trans></li>
                <li><Trans i18nKey={"Omrader.askim"}></Trans></li>
                <li><Trans i18nKey={"Omrader.eidsberg"}></Trans></li>
                <li><Trans i18nKey={"Omrader.moss"}></Trans></li>
                <li><Trans i18nKey={"Omrader.drammen"}></Trans></li>
                <li><Trans i18nKey={"Omrader.mjondalen"}></Trans></li>
                <li><Trans i18nKey={"Omrader.sandvika"}></Trans></li>
                <li><Trans i18nKey={"Omrader.baerum"}></Trans></li>
                <li><Trans i18nKey={"Omrader.oslo"}></Trans></li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0" id="faq">
          <div className="row m-2-hor">
            <div className="col-12">
              <h2 className="heading"><Trans i18nKey={"Faq.title"}></Trans></h2>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h3><Trans i18nKey={"Faq.q1"}></Trans></h3>
                <p><Trans i18nKey={"Faq.a1"}></Trans></p>
                <h3><Trans i18nKey={"Faq.q2"}></Trans></h3>
                <p><Trans i18nKey={"Faq.a2"}></Trans></p>
                <h3><Trans i18nKey={"Faq.q3"}></Trans></h3>
                <p><Trans i18nKey={"Faq.a3"}></Trans></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h3><Trans i18nKey={"Faq.q4"}></Trans></h3>
                <p><Trans i18nKey={"Faq.a4"}></Trans></p>
                <h3><Trans i18nKey={"Faq.q5"}></Trans></h3>
                <p><Trans i18nKey={"Faq.a5"}></Trans></p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(Contact);
