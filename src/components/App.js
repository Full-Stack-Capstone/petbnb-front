import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import SignUpForm from './Signup/SignupForm';
import LoginForm from './Login/LoginForm';
import Home from './Home/Home';
import MyRooms from './PetRooms/MyRooms';
import MyPets from './Pets/MyPets';
import MyReservations from './Reservations/MyReservations';
import ShowRoom from './PetRooms/ShowRoom';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div id="liveAlertPlaceholder" />
      <NavBar />
      <div className="ontoggle ontoggle-close">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
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
