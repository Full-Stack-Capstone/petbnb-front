import { configureStore } from '@reduxjs/toolkit';
import petRoomsReducer from './slices/petRoomsSlice';

const store = configureStore({
  reducer: {
    petRooms: petRoomsReducer,
  },
});

export default store;
