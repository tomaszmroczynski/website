import React from "react";
import { Trans } from "react-i18next";

const Abouthome = ({ pageTitle = false }) => {
  const HeadingTag = pageTitle ? "h1" : "h2";

  return (
    <>
      <section className="container-fluid pb-0">
        <div className="row m-2-hor">
          <div className="col-md-4">
            <HeadingTag>
              <Trans i18nKey={"About.1795"} />
            </HeadingTag>
          </div>
          <div className="col-md-8">
            <div className="content">
              <Trans i18nKey={"About.1796"} />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row m-2-hor">
          <div className="col-md-6 pt-5">
            <div className="col-home">
              <div className="thumb">
                <img
                  src="./img/home.webp"
                  className="img-fluid"
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="dflex-center">
              <div className="col-home mt-md-0 mt-5">
                <div className="heading">
                  <Trans i18nKey={"Abouthome.1296"} />
                </div>
                <div className="content">
                  <Trans i18nKey={"Abouthome.1297"} />
                </div>
                <ul className="list-home">
                  <li>
                    <Trans i18nKey={"Abouthome.1298"} />
                  </li>
                  <li>
                    <Trans i18nKey={"Abouthome.1299"} />
                  </li>
                  <li>
                    <Trans i18nKey={"Abouthome.1822"} />
                  </li>
                  <li>
                    <Trans i18nKey={"Abouthome.1867"} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Abouthome;
