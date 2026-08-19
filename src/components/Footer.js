import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { Trans } from "react-i18next";


const Footer = () => (
  <footer className="container-fluid black_more">
    <div className="bg-footer">
      <img src="./img/footer-img.png" alt="" loading="lazy" aria-hidden="true" />
    </div>
    <div className="row m-2-hor">
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading">
            <h2><Trans i18nKey={"Footer.1396"}></Trans></h2>
          </div>
          <div className="content">
            <p>
            <Trans i18nKey={"Footer.1397"}></Trans>
            </p>
          </div>

          <div className="address">
            Limes Interiør – Anna Rasinska
          </div>
          <div className="address">
            Finnestadveien 371, 1880 Eidsberg
          </div>
          <div className="address">
            Org.nr 925 621 102
          </div>
          <div className="link-call">
            <a href="tel:+4794712654">
              <Icon name="phone" /> +47 947 12 654
            </a>
          </div>
          <div className="link-call">
            <a href="mailto:studio@limes-interior.no">
              <Icon name="envelope" /> studio@limes-interior.no
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
          <div className="heading">
            <Trans i18nKey={"Footer.1400"}></Trans>
          </div>
          <div className="content">
            <div className="address"><Trans i18nKey={"Footer.1401"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1402"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1403"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1404"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1405"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1406"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1407"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1408"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1409"}></Trans></div>
            <div className="address"><Trans i18nKey={"Footer.1410"}></Trans></div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-col">
        <picture>
<img src="/logo_LIMES INTERIOR_Anna_Rasinska.webp" alt="Limes Interiør Anna Rasinska – interiørarkitekt" width="100%" height="auto" loading="lazy"/>
</picture>
          <div className="heading"><Trans i18nKey={"Footer.1398"}></Trans></div>

          <div className="content">
            <p><Trans i18nKey={"Footer.1399"}></Trans>
            </p>
            <a
              href="https://www.facebook.com/limesinterior.annarasinska/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="socialicon">
                <span className="shine"></span>
                <Icon name="facebook" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/anna-rasi%C5%84ska-81083413b/?locale=no_NO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="socialicon">
                <span className="shine"></span>
                <Icon name="linkedin" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="subfooter">
      <div className="row m-2-hor">
        <div className="col-md-6">
          <div className="content">
            © {new Date().getFullYear()} Limes Interiør Anna Rasinska.{" "}
            <Link to="/personvern">
              <Trans i18nKey={"Footer.privacy"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
