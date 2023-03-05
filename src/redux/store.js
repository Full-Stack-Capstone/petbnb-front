import { configureStore } from '@reduxjs/toolkit';
import { petRoomsReducer } from './slices/petRoomsSlice';
import { myRoomsReducer } from './slices/myRoomsSlice';

const store = configureStore({
  reducer: {
    petRooms: petRoomsReducer,
    myRooms: myRoomsReducer,
  },
});

export default store;
