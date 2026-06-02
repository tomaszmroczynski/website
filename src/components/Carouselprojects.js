import React, { Component } from "react";
import { Trans, useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../data/projects";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

const Carouselprojects = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 3000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="slick slickproject">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <CustomSlide className="itm" index={index + 1} key={project.path}>
            <Link to={project.path}>
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
            </Link>
          </CustomSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Carouselprojects;
