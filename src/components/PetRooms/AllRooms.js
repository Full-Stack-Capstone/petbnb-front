import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { fetchRooms } from '../../redux/thunks/fetchRooms';
import { fetchUsers } from '../../redux/thunks/userThunks';
import CalculateRating from '../../utils/CalculateRating';
import petroomImage from '../../images/petroom.jpg';
import RenderedRooms from '../Home/RenderedRooms';
import RoomFilters from '../Home/Filter';
import SearchBar from '../Home/SearchBar';

function AllRooms() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.petRooms.data);
  const users = useSelector((state) => state.users.data);

  const [typeOfPetFilter, setTypeOfPetFilter] = useState('');
  const [sizeOfPetFilter, setSizeOfPetFilter] = useState('');

  const [searchText, setSearchText] = useState('');

  const hash = {};
  users.map((user) => Object.assign(hash, { [user.id]: user.name }));

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const carouselRooms = rooms.filter(
    (room) => CalculateRating(room.rating) > 3,
  );

  let renderedRooms = [];
  if (Array.isArray(rooms)) {
    renderedRooms = carouselRooms.map((room) => (
      <Carousel.Item key={room.id}>
        <div className="d-flex justify-content-center align-items-center">
          <img src={petroomImage} alt="room-img" className="img-fluid w-50" />
          <Carousel.Caption>
            <h2>{room.name}</h2>
            <p>{`Type of pet living here: ${room.type_of_pet}`}</p>
            <p>{`Max size accepted: ${room.max_size_accepted}`}</p>
            <p>{`Owner Name: ${hash[room.user_id]}`}</p>
            <p>{`Rating: ${CalculateRating(room.rating)}`}</p>
            <p>{`Price: $${room.price}`}</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    ));
  }

  let filteredRooms = rooms;
  if (typeOfPetFilter) {
    filteredRooms = filteredRooms.filter(
      (room) => room.type_of_pet === typeOfPetFilter,
    );
  }

  if (sizeOfPetFilter) {
    filteredRooms = filteredRooms.filter(
      (room) => room.max_size_accepted === sizeOfPetFilter,
    );
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  if (Array.isArray(rooms)) {
    filteredRooms = filteredRooms.filter(
      (room) => room.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  return (
    <div>
      <h1>Rooms with more than 3 of rating</h1>
      <Carousel>{renderedRooms}</Carousel>
      <div className="d-flex flex-column">
        <div className="d-flex gap-5 align-items-center m-3">
          <SearchBar onChange={handleSearch} />
          <RoomFilters
            typeOfPetFilter={typeOfPetFilter}
            setTypeOfPetFilter={setTypeOfPetFilter}
            sizeOfPetFilter={sizeOfPetFilter}
            setSizeOfPetFilter={setSizeOfPetFilter}
          />
        </div>
        <div className="row justify-content-around">
          <RenderedRooms rooms={filteredRooms} />
        </div>
      </div>
    </div>
  );
}

export default AllRooms;
