import { configureStore } from '@reduxjs/toolkit';
import petReducer from './slices/petSlice';
import petsReducer from './slices/petsSlice';
import petRoomsReducer from './slices/petRoomsSlice';
import petRoomReducer from './slices/petRoomSlice';
import userReducer from './slices/userSlice';
import reservationsReducer from './slices/reservationsSlice';
import createReservationReducer from './slices/createReservationSlice';

const store = configureStore({
  reducer: {
    createReservation: createReservationReducer,
    pet: petReducer,
    pets: petsReducer,
    petRooms: petRoomsReducer,
    petRoom: petRoomReducer,
    reservations: reservationsReducer,
    user: userReducer,
  },
});

export default store;
