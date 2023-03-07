import { configureStore } from '@reduxjs/toolkit';
import petReducer from './slices/petSlice';
import petRoomsReducer from './slices/petRoomsSlice';
import petRoomReducer from './slices/petRoomSlice';
import userReducer from './slices/userSlice';
import reservationsReducer from './slices/reservationsSlice';

const store = configureStore({
  reducer: {
    pet: petReducer,
    petRooms: petRoomsReducer,
    petRoom: petRoomReducer,
    reservations: reservationsReducer,
    user: userReducer,
  },
});

export default store;
