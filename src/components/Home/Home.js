import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRooms } from '../../redux/thunks/fetchRooms';
import './home.css';
import RoomFilters from './Filter';
import CalculateRating from '../../utils/CalculateRating';
import petroomImage from '../../images/petroom.jpg';

function Home() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.petRooms.data);

  const [typeOfPetFilter, setTypeOfPetFilter] = useState('');
  const [sizeOfPetFilter, setSizeOfPetFilter] = useState('');

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  let filteredRooms = rooms;
  if (typeOfPetFilter) {
    filteredRooms = filteredRooms.filter((room) => room.type_of_pet === typeOfPetFilter);
  }

  if (sizeOfPetFilter) {
    filteredRooms = filteredRooms.filter((room) => room.max_size_accepted === sizeOfPetFilter);
  }

  let renderedRooms = [];
  if (Array.isArray(rooms)) {
    renderedRooms = filteredRooms.map((room) => (
      <Link key={room.id} to={`pet_room/${room.id}`} className="col-sm-5 mb-2 border no-style-link d-flex">
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
    <div className="container-fluid">
      <RoomFilters
        typeOfPetFilter={typeOfPetFilter}
        setTypeOfPetFilter={setTypeOfPetFilter}
        sizeOfPetFilter={sizeOfPetFilter}
        setSizeOfPetFilter={setSizeOfPetFilter}
      />
      <div className="row justify-content-around">
        {renderedRooms}
      </div>
    </div>
  );
}

export default Home;
