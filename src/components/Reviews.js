import React from "react";
import Slider from "react-slick";
import Icon from "./Icon";
import { Trans, useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const REVIEW_KEYS = ["review1", "review2", "review3"];
const STAR_COUNT = 5;

const StarRating = ({ label }) => (
  <div className="review-stars" role="img" aria-label={label}>
    {Array.from({ length: STAR_COUNT }, (_, i) => (
      <Icon key={i} name="star" />
    ))}
  </div>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  arrows: false,
  speed: 600,
};

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section className="container-fluid reviews-section" id="anmeldelser">
      <div className="row m-2-hor">
        <div className="col-12">
          <h2 className="heading">
            <Trans i18nKey="Reviews.title" />
          </h2>
        </div>
        <div className="col-12">
          <div className="reviews-slider-wrap">
            <Slider {...sliderSettings}>
              {REVIEW_KEYS.map((key) => (
                <div key={key}>
                  <blockquote className="content review-quote">
                    <StarRating label={t("Reviews.stars_label")} />
                    <p>
                      <Trans i18nKey={`Reviews.${key}_text`} />
                    </p>
                    <footer>
                      — <Trans i18nKey={`Reviews.${key}_author`} />
                    </footer>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
