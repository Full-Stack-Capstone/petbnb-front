import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchRooms = createAsyncThunk('rooms/fetch', async () => {
  const response = await axios.get('http://localhost:3005/user/1/pet_rooms');
  
  return response.data;
});

export { fetchRooms };