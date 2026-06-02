import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";
import { Trans, useTranslation } from "react-i18next";

import { LinkWrap, Overlay } from "../styles/Work.styles";
import Footer from "../components/Footer";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";
import projects from "../data/projects";

const ProjectCard = ({ project, toCase, setCoords, handleCaseSwap }) => {
  const { t } = useTranslation();

  return (
  <div className="col-md-6 slick slickproject p-3">
    <div className="slick-slide d-block">
      <div>
        <div className="itm">
          <LinkWrap active={toCase === project.path}>
            <Overlay
              active={!!toCase}
              onMouseDown={(e) => setCoords(e.nativeEvent.x)}
              onMouseUp={(e) => handleCaseSwap(e.nativeEvent, project.path)}
            >
              <div className="bg">
                <img
                  src={project.image}
                  className="img-fluid"
                  alt={t(project.altKey)}
                  loading="lazy"
                />
              </div>
              <div className="desc">
                <div className="tag">
                  <Trans i18nKey={project.tagKey} />
                </div>
                <div className="name">
                  <Trans i18nKey={project.nameKey} />
                  {project.locationKey && (
                    <>
                      <br />
                      <Trans i18nKey={project.locationKey} />
                    </>
                  )}
                </div>
              </div>
              <div className="icon">
                <span>
                  <Trans i18nKey={"Carouselprojects.1595"} />
                </span>
              </div>
            </Overlay>
          </LinkWrap>
        </div>
      </div>
    </div>
  </div>
  );
};

const Works = ({ history }) => {
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-12">
              <h1 className="heading mt-5">
                <Trans i18nKey={"Work.heading"} />
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            {projects.map((project) => (
              <ProjectCard
                key={project.path}
                project={project}
                toCase={toCase}
                setCoords={setCoords}
                handleCaseSwap={handleCaseSwap}
              />
            ))}
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(Works);
