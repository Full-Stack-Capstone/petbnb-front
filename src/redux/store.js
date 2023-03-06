import { configureStore } from '@reduxjs/toolkit';
import { petRoomsReducer } from './slices/petRoomsSlice';

const store = configureStore({
  reducer: {
    publicPetRooms: petRoomsReducer,
  },
});

export default store;
