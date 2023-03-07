import { configureStore } from '@reduxjs/toolkit';
import petRoomsReducer from './slices/petRoomsSlice';
import petRoomReducer from './slices/petRoomSlice';
import reservationsReducer from './slices/reservationsSlice';

const store = configureStore({
  reducer: {
    petRooms: petRoomsReducer,
    petRoom: petRoomReducer,
    reservations: reservationsReducer,
  },
});

export default store;
