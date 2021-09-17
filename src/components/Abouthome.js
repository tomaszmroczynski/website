import React from "react";
import { Trans } from "react-i18next";

export default () => (
  <section className="container-fluid">
    <div className="row m-2-hor">
      <div className="col-md-6 pt-5">
        <div className="col-home">
          <div className="thumb">
            <img src="./img/home.jpg" className="img-fluid" alt="#" />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="dflex-center">
          <div className="col-home mt-md-0 mt-5">
            <div className="heading">
            <Trans i18nKey={"Abouthome.1296"}></Trans>
            </div>
            <div className="content">
            <Trans i18nKey={"Abouthome.1297"}></Trans>
            </div>
            <ul className="list-home">
              <li><Trans i18nKey={"Abouthome.1298"}></Trans></li>
              <li><Trans i18nKey={"Abouthome.1299"}></Trans></li>
              <li><Trans i18nKey={"Abouthome.1822"}></Trans></li>
              <li><Trans i18nKey={"Abouthome.1867"}></Trans></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
