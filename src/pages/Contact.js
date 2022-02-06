import React from "react";
import { Trans } from "react-i18next";
import { withRouter } from "react-router-dom";
import emailjs from "emailjs-com";

import Reveal from "react-reveal/Reveal";

import SimpleMap from "../components/Map";
import Footer from "../components/Footer";

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";


const Contact = ({ history }) => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ox8d4b",
        "template_o4xpsnp",
        e.target,
        "user_tuwpO7hafDjTCo5W3PoTr"
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
                <p><Trans i18nKey={"Contact.1867"}></Trans> 

                </p>
                <div className="address">
                  <div className="heading">Alfa Design Studio</div>
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    Finnestadveien, 1880, Indre Østfold
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope-o"></i>
                    <a
                      href="mailto:studio@alfadesign.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      studio@alfadesign.no
                    </a>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    +47 947 12 654
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-side">
                <form className="formcontact" onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                  <label>Message</label>
                  <textarea name="message" required />
                  <label>Tel</label>
                  <input type="tel" 
            placeholder="Enter phone number" name="telephone" required/>
                  <label>Promocode</label>
                  <input type="text" name="promocode" />
                  <div id="success" className="hide">
                    Your message has been sent...
                  </div>
                  <div id="failed" className="hide">
                    Message failed...
                  </div>
                  <button type="submit" id="buttonsent">
                    <span className="shine"></span>
                    <span>Send</span>
                  </button>
                </form>
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
