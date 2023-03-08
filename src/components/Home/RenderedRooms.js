/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CalculateRating from '../../utils/CalculateRating';
import petroomImage from '../../images/petroom.jpg';

function RenderedRooms({ rooms }) {
  let renderedRooms = [];
  if (Array.isArray(rooms)) {
    renderedRooms = rooms.map((room) => (
      <Link
        key={room.id}
        to={`pet_room/${room.id}`}
        className="col-sm-5 mb-2 border no-style-link d-flex"
      >
        <div className="w-50">
          <h2>{room.name}</h2>
          <p>{`Type of pet living here: ${room.type_of_pet}`}</p>
          <p>{`Max sized accepted: ${room.max_size_accepted}`}</p>
          <p>{`User Owner: ${room.user_id}`}</p>
          <p>{`Rating: ${CalculateRating(room.rating)}`}</p>
          <p>{`Price: ${room.price}`}</p>
        </div>
        <div className="w-50">
          <img src={petroomImage} alt="room-img" className="img-fluid" />
        </div>
      </Link>
    ));
  }

  return (
    <div className="row justify-content-around">
      {renderedRooms}
    </div>
  );
}

export default RenderedRooms;
