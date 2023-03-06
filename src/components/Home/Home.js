import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRooms } from '../../redux/thunks/fetchRooms';
import './home.css';
import RoomFilters from '../Extra/Filter';
import CalculateRating from '../Extra/CalculateRating';

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
      <Link key={room.id} to={`pet_room/${room.id}`} className="col-sm-3 border m-1 no-style-link">
        <h2>{room.name}</h2>
        <p>{`Type of pet living here: ${room.type_of_pet}`}</p>
        <p>{`Max sized accepted: ${room.max_size_accepted}`}</p>
        <p>{`User Owner: ${room.user_id}`}</p>
        <p>{`Rating: ${CalculateRating(room.rating)}`}</p>
        <p>{`Price: ${room.price}`}</p>
      </Link>
    ));
  }
  return (
    <div className="container">
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
