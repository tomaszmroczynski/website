import React from "react";
import { Trans } from "react-i18next";

export default () => (
  <footer className="container-fluid black_more">
    <div className="bg-footer">
      <img src="./img/footer-img.png" alt="bg-footer" />
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
          <div
            className="link-call"
            onClick={() => window.open("mailto:studio@alfadesign.no", "_self")}
          >
            studio@alfadesign.no
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
          {/*
          <div className='heading'>
            Usefull link
          </div>
          <div className='content'>
             <div className='link'>Frequently Asked</div>
             <div className='link'>Terms & Conditions</div>
             <div className='link'>Help Center</div>
             <div className='link'>Contact Us</div>
          </div>
        */}
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
          {/*
          <div className='heading'>
            Features
          </div>
          <div className='content'>
            <div className='link'>Career</div>
            <div className='link'>Brand Identity</div>
            <div className='link'>Investment</div>
            <div className='link'>Agency Patner</div>
          </div>
        */}
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading"><Trans i18nKey={"Footer.1398"}></Trans></div>
          <div className="content">
            <p><Trans i18nKey={"Footer.1399"}></Trans>
             
            </p>
            <a
              href="https://www.facebook.com/alfadesignstudio.annarasinska/"
              target="blank"
            >
              <div className="socialicon">
                <span className="shine"></span>
                <i className="fa fa-facebook-f"></i>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/anna-rasi%C5%84ska-81083413b/?locale=no_NO"
              target="blank"
            >
              <div className="socialicon">
                <span className="shine"></span>
                <i className="fa fa-linkedin"></i>
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
            © Copyrights 2021 Complet Software Tomasz Mroczynski All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);
