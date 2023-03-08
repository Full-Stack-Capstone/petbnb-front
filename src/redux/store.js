import { configureStore } from '@reduxjs/toolkit';
import petRoomsReducer from './slices/petRoomsSlice';
import checkStatusReducer from './slices/navLoginSlice';

const store = configureStore({
  reducer: {
    petRooms: petRoomsReducer,
    checkStatus: checkStatusReducer,
  },
});

export default store;
