import React from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchPet } from '../../redux/thunks/fetchPet';
// import { fetchPetRoom } from '../../redux/thunks/fetchPetRoom';
import propTypes from 'prop-types';
import './Reservation.css';

function Reservation({ reservation }) {
  // const dispatch = useDispatch();
  // const { pet } = useSelector((state) => state.pet.data);
  // const { petRoom } = useSelector((state) => state.petRoom.data);

  // useEffect(() => {
  //   if (!pet.length) {
  //     dispatch(fetchPet());
  //   }
  // });

  // useEffect(() => {
  //   if (!petRoom.length) {
  //     dispatch(fetchPetRoom());
  //   }
  // });

  return (
    <div>
      <h2>reservation single</h2>
      <ul>
        <li>{reservation.start_date}</li>
        <li>{reservation.pet_id}</li>
        <li>{reservation.pet_room_id}</li>
      </ul>
    </div>
  );
}

export default Reservation;

Reservation.propTypes = {
  reservation: propTypes.shape({
    start_date: propTypes.string.isRequired,
    pet_id: propTypes.number.isRequired,
    pet_room_id: propTypes.number.isRequired,
  }).isRequired,
};
