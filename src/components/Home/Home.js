import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../redux/slices/petRoomsSlice';
import MyNavbar from '../Extra/NavJustTest';

function Home() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.publicPetRooms.data);
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  const renderedRooms = rooms.map((room) => (
    <div key={room.id} className="col-sm-4">
      <h2>{room.name}</h2>
      <p>{`Type of pet living here: ${room.type_of_pet}`}</p>
      <p>{`Max sized accepted: ${room.max_size_accepted}`}</p>
      <p>{`User Owner: ${room.user_id}`}</p>
      <p>{`Rating: ${room.rating[4]}`}</p>
    </div>
  ));
  return (
    <div>
      <MyNavbar />
      <div className="row">
        {renderedRooms}
      </div>
    </div>
  );
}

export default Home;
