import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchReservations from '../../redux/thunks/fetchReservations';
import Reservation from './Reservation';
import './MyReservations.css';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.data);

  useEffect(() => {
    if (!reservations.length) {
      dispatch(fetchReservations());
    }
  });

  return (
    <div>
      <h1>My Reservations</h1>
      {reservations.map((reservation) => (
        <Reservation key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}

export default MyReservations;
