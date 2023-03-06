import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRooms } from '../../redux/slices/myRoomsSlice';

function MyRooms() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myRooms.data);
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  const renderedRooms = data.map((d) => (
    <div key={d.id} className='text-primary'>
      <h2>{d.name}</h2>
      <p>Pet accepted: {d.max_size_accepted} {d.type_of_pet}</p>
      <p>Price: {d.price}</p>
      <p>Rating:</p>
    </div>
  ));
  return (
    <div>
      <div>{renderedRooms}</div>

    </div>
  );
}

export default MyRooms;
