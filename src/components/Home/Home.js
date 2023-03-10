import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { fetchRooms } from '../../redux/thunks/fetchRooms';
import { fetchUsers } from '../../redux/thunks/userThunks';
import CalculateRating from '../../utils/CalculateRating';
import petroomImage from '../../images/petroom.jpg';
import RenderedRooms from './RenderedRooms';
import RoomFilters from './Filter';
import SearchBar from './SearchBar';
import './home.css';

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
    (room) => CalculateRating(room.attributes.rating) > 3,
  );

  let renderedRooms = [];
  if (Array.isArray(rooms)) {
    renderedRooms = carouselRooms.map((room) => (
      <Carousel.Item key={room.id}>
        <div className="d-flex align-items-stretch">
          <div className="w-50">
            <img src={petroomImage} alt="room-img" className="img-fluid" />
          </div>
          <div className="w-50 bg-carousel d-flex flex-column justify-content-center p-5">
            <h2>{room.attributes.name}</h2>
            <p className="mb-2">{`Type of pet living here: ${room.attributes.type_of_pet}`}</p>
            <p className="mb-2">{`Max size accepted: ${room.attributes.max_size_accepted}`}</p>
            <p className="mb-2">{`Owner Name: ${hash[room.attributes.user_id]}`}</p>
            <p className="mb-2">{`Rating: ${CalculateRating(room.attributes.rating)}`}</p>
            <p className="mb-2">{`Price: $${room.attributes.price}`}</p>
          </div>
        </div>
      </Carousel.Item>
    ));
  }

  let filteredRooms = rooms;
  if (typeOfPetFilter) {
    filteredRooms = filteredRooms.filter(
      (room) => room.attributes.type_of_pet.includes(typeOfPetFilter),
    );
  }

  if (sizeOfPetFilter) {
    filteredRooms = filteredRooms.filter(
      (room) => room.attributes.max_size_accepted === sizeOfPetFilter,
    );
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  if (Array.isArray(rooms)) {
    filteredRooms = filteredRooms.filter(
      (room) => room.attributes.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  return (
    <>
      <h1 className="text-center">Rooms with more than 3 of rating</h1>
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
        <div className="container-xl p-2">
          <RenderedRooms rooms={filteredRooms} />
        </div>
      </div>
    </>
  );
}

export default AllRooms;
