import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
	    <RoomsContainer />
    </React.Fragment>
  );
};

Rooms.propTypes = {};

export default Rooms;
