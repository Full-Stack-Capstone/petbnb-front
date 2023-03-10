import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import SignUpForm from './Signup/SignupForm';
import LoginForm from './Login/LoginForm';
import Home from './Home/Home';
import AllRooms from './PetRooms/AllRooms';
import MyRooms from './PetRooms/MyRooms';
import MyPets from './Pets/MyPets';
import MyReservations from './Reservations/MyReservations';
import ShowRoom from './PetRooms/ShowRoom';
import './NavBar/NavBar.css';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <NavBar />
      <div className="ontoggle ontoggle-close main">
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
    </div>
  );
}

export default App;
