import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { fetchRoomId } from '../../redux/thunks/fetchRooms';
import CalculateRating from '../../utils/CalculateRating';
import ModalRoot from '../Modal/ModalRoot';
import ModalService from '../Modal/ModalService';
import MakeReservation from '../Reservations/MakeReservation';

function ShowRoom() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const room = useSelector((state) => state.petRooms.data);
  useEffect(() => {
    dispatch(fetchRoomId(id));
  }, [dispatch, id]);

  let makeResProps = {};
  if (!room.isLoading) {
    makeResProps = {
      roomId: room.id,
    };
  }
  const openModalMakeReservation = () => {
    ModalService.open(MakeReservation, makeResProps);
  };

  return (
    <div className="container">
      <div id="liveAlertPlaceholder" />
      <div className="row border justify-content-around">
        <div className="col-sm-6">
          <img src={room.image_url} alt="room-img" className="img-fluid" />
        </div>
        <div key={room.id} to={`pet_room/${room.id}`} className="col-sm-6 p-1">
          <h2>{room.name}</h2>
          <h2>
            Room ID:
            {room.id}
          </h2>
          <p>{`Type of pet living here: ${room.type_of_pet}`}</p>
          <p>{`Max sized accepted: ${room.max_size_accepted}`}</p>
          <p>{`User Owner: ${room.user_id}`}</p>
          <span>
            <p>Rating:</p>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={room.rating ? CalculateRating(room.rating) : null}
              activeColor="#ffd700"
            />
          </span>
        </div>
      </div>
      <button id="make-reservation-button" onClick={openModalMakeReservation} type="button" className="btn btn-primary m-4">Make Reservation</button>
      <ModalRoot />
      <div />
    </div>
  );
}

export default ShowRoom;
