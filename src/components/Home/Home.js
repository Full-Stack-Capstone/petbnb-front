import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../redux/slices/petRoomsSlice';
import MyNavbar from '../Extra/NavJustTest';
import MyComponent from '../Extra/Test2';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.petRooms.data);
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  const renderedRooms = data.map((d) => (
    <div key={d.id}>
      <div>
        {d.name}
      </div>
    </div>
  ));
  return (
    <div>
      <MyNavbar />
      <MyComponent />
      <h1>{renderedRooms}</h1>
    </div>
  );
}

export default Home;
