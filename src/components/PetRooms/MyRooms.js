import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRooms } from '../../redux/slices/myRoomsSlice';

function MyRooms() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myRooms.data);
  useEffect(() => {

    dispatch(fetchRooms());
  }, [dispatch]);
  return (
    <div>
      <h1>MyRooms</h1>
    </div>
  );
}

export default MyRooms;
