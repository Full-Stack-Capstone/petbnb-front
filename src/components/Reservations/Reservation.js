// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import fetchPetRoom from '../../redux/thunks/fetchPetRoom';
import { fetchPet } from '../../redux/thunks/petThunks';
import fetchUser from '../../redux/thunks/fetchUser';
import './Reservation.css';

function Reservation({ reservation }) {
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.pet.data);
  const petRoom = useSelector((state) => state.petRoom.data);
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchPet(reservation.pet_id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchPetRoom(reservation.pet_room_id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!petRoom.isLoading) {
      dispatch(fetchUser(petRoom.user_id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li className="card mb-3 text-start" style={{ 'max-width': '400px' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img src={pet.img} className="img-fluid rounded-start bg-grey" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">
              {petRoom.name}
            </h5>
            <div className="card-text d-flex gap-3">
              <p>Host image</p>
              <p>{user.name}</p>
            </div>
            <div className="card-text d-flex gap-3">
              <p>Pet icon</p>
              <p>{pet.name}</p>
            </div>
            <div className="card-text">
              <p className="text-muted m-0">
                {`Drop-off: ${reservation.start_date}`}
              </p>
              <p className="text-muted m-0">
                {`Pick-up: ${reservation.end_date}`}
              </p>
            </div>
          </div>
          <div className="card-footer text-muted text-center">
            <a href="/" className="text-decoration-none">
              Review
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Reservation;

Reservation.propTypes = {
  reservation: propTypes.shape({
    id: propTypes.number.isRequired,
    start_date: propTypes.string.isRequired,
    end_date: propTypes.string.isRequired,
    pet_id: propTypes.number.isRequired,
    pet_room_id: propTypes.number.isRequired,
  }).isRequired,
};
