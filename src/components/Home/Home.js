import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../redux/thunks/fetchRooms';
import './home.css';
import RoomFilters from './Filter';
import SearchBar from './SearchBar';
import RenderedRooms from './RenderedRooms';

function Home() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.petRooms.data);

  const [typeOfPetFilter, setTypeOfPetFilter] = useState('');
  const [sizeOfPetFilter, setSizeOfPetFilter] = useState('');

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

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
    <div className="container-fluid">
      <RoomFilters
        typeOfPetFilter={typeOfPetFilter}
        setTypeOfPetFilter={setTypeOfPetFilter}
        sizeOfPetFilter={sizeOfPetFilter}
        setSizeOfPetFilter={setSizeOfPetFilter}
      />
      <SearchBar onChange={handleSearch} />
      <div className="row justify-content-around">
        <RenderedRooms rooms={filteredRooms} />
      </div>
    </div>
  );
}

export default Home;
