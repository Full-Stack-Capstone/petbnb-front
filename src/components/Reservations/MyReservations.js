import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/thunks/reservationsThunks';
import Reservation from './Reservation';
import './MyReservations.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.data);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className=".container-fluid text-center">
      <h1 className="my-5">My Reservations</h1>
      <ul className="container-xl">
        {reservations.map((reservation) => (
          <Reservation key={reservation.id} reservation={reservation} />
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
