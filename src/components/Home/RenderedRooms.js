import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CalculateRating from '../../utils/CalculateRating';
import { fetchUsers } from '../../redux/thunks/userThunks';

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
        key={room.attributes.id}
        to={`pet_room/${room.attributes.id}`}
        className="card m-3 col-sm-5 border no-style-link"
      >
        <div className="row g-0">
          <div className="col-md-5">
            <img src={room.attributes.image_url} alt="room-img" className="img-fluid" />
          </div>
          <div className="col-md-7 p-3">
            <h5 className="card-title">{room.attributes.name}</h5>
            <p className="card-text">{`Type of pet living here: ${room.attributes.type_of_pet}`}</p>
            <p className="card-text">{`Max size accepted: ${room.attributes.max_size_accepted}`}</p>
            <p className="card-text">{`Owner Name: ${hash[room.attributes.user_id]}`}</p>
            <p className="card-text">{`Rating: ${CalculateRating(room.attributes.rating)}`}</p>
            <p className="card-text">{`Price: $${room.attributes.price}`}</p>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {renderedRooms}
    </div>
  );
}

RenderedRooms.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RenderedRooms;
