import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import AllRooms from './PetRooms/AllRooms';
import MyRooms from './PetRooms/MyRooms';
import MyPets from './Pets/MyPets';
import MyReservations from './Reservations/MyReservations';
import Home from './Home/Home';
import LoginForm from './Login/LoginForm';
import SignUpForm from './Signup/SignupForm';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/all-rooms" element={<AllRooms />} />
        <Route path="/my-rooms" element={<MyRooms />} />
        <Route path="/my-pets" element={<MyPets />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
    </div>
  );
}

export default App;
