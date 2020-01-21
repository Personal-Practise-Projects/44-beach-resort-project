import React from "react";
import PropTypes from "prop-types";

import Room from "./Room";

export default function RoomsList({ rooms }) {
  return rooms.length === 0 ? (
    <div className="empty-search">
      <h3>unfortunately no rooms matched your search parameters</h3>
    </div>
  ) : (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
}

RoomsList.propTypes = {};
