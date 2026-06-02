import React from "react";

const AnimatedSliderSlide = ({
  image,
  index,
  hero = false,
  children,
  className = "",
}) => (
  <div className={["slider-content", className].filter(Boolean).join(" ")}>
    <img
      src={image}
      alt=""
      aria-hidden="true"
      className="slider-content__bg"
      loading={index === 0 ? "eager" : "lazy"}
      fetchPriority={hero && index === 0 ? "high" : undefined}
      decoding={index === 0 ? "sync" : "async"}
    />
    {children}
  </div>
);

export default AnimatedSliderSlide;
