import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../redux/slices/petRoomsSlice';

function Home() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.publicPetRooms.data);
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  const handleShowDetails = ((r) => {
    console.log('asd', r);
  });
  const renderedRooms = rooms.map((room) => (
    <div
      key={room.id}
      role="button"
      tabIndex={0}
      onClick={() => handleShowDetails(room.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleShowDetails(room.id);
        }
      }}
      className="col-sm-3 border m-1"
    >
      <h2>{room.name}</h2>
      <p>{`Type of pet living here: ${room.type_of_pet}`}</p>
      <p>{`Max sized accepted: ${room.max_size_accepted}`}</p>
      <p>{`User Owner: ${room.user_id}`}</p>
      <p>{`Rating: ${room.rating[4]}`}</p>
    </div>
  ));
  return (
    <div className="container">
      <div className="row justify-content-around">
        {renderedRooms}
      </div>
    </div>
  );
}

export default Home;
