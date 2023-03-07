import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../redux/slices/myRoomsSlice';
import ModalService from '../Modal/ModalService';
import ModalRoot from '../Modal/ModalRoot';
import AddRoom from './AddRoom';

function MyRooms() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myRooms.data);
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  const openModalAddRoom = () => {
    ModalService.open(AddRoom);
  };
  const renderedRooms = data.map((d) => (
    <div key={d.id} className="text-primary">
      <h2>{d.name}</h2>
      <p>
        Pet accepted:
        {d.max_size_accepted}
        {d.type_of_pet}
      </p>
      <p>
        Price:
        {d.price}
      </p>
      <p>
        Rating:
      </p>
    </div>
  ));
  return (
    <div>
      <div>{renderedRooms}</div>
      <button onClick={openModalAddRoom} type="button" className="btn btn-primary m-4">Add room</button>
      <ModalRoot />
    </div>
  );
}

export default MyRooms;
