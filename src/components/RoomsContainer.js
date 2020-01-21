import React from "react";
import PropTypes from "prop-types";

import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
	const { loading, sortedRooms, rooms } = context;
	return loading ? (
		<Loading />
	) : (
		<>
			<RoomsFilter rooms={rooms} />
			<RoomsList rooms={sortedRooms} />
		</>
	);
}

RoomsContainer.propTypes = {};

export default withRoomConsumer(RoomsContainer);
