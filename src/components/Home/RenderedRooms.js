import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CalculateRating from '../../utils/CalculateRating';
import petroomImage from '../../images/petroom.jpg';
import { fetchUsers } from '../../redux/thunks/fetchUser';

function RenderedRooms({ rooms }) {
  const dispatch = useDispatch();

  const hash = {};
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // users.map((user) => hash[user.id] = user.name);
  users.map((user) => Object.assign(hash, { [user.id]: user.name }));
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
          <p>{`Max size accepted: ${room.max_size_accepted}`}</p>
          <p>{`Owner Name: ${hash[room.user_id]}`}</p>
          <p>{`Rating: ${CalculateRating(room.rating)}`}</p>
          <p>{`Price: $${room.price}`}</p>
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

RenderedRooms.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RenderedRooms;
