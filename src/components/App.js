import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModalService from './Modal/ModalService';
import NavBar from './NavBar/NavBar';
import ModalRoot from './Modal/ModalRoot';
import SignUpForm from './Signup/SignupForm';
import LoginForm from './Login/LoginForm';
import Home from './Home/Home';
import AllRooms from './PetRooms/AllRooms';
import MyRooms from './PetRooms/MyRooms';
import MyPets from './Pets/MyPets';
import MyReservations from './Reservations/MyReservations';
import MakeReservation from './Reservations/MakeReservation';
import ShowRoom from './PetRooms/ShowRoom';

function App() {
  const openModalMakeReservation = () => {
    ModalService.open(MakeReservation);
  };
  return (
    <div className="app">
      <NavBar />
      <button onClick={openModalMakeReservation} type="button" className="btn btn-primary m-4">Make Reservation</button>
      <ModalRoot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/all-rooms" element={<AllRooms />} />
        <Route path="/pet_room/:id" element={<ShowRoom />} />
        <Route path="/my-rooms" element={<MyRooms />} />
        <Route path="/my-pets" element={<MyPets />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
    </div>
  );
}

export default App;
