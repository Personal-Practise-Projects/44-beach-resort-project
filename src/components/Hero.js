import React from "react";
import PropTypes from "prop-types";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.propTypes = {};

Hero.defaultProps = {
  hero: "defaultHero"
};
