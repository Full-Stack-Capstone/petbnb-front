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

    <div key={d.attributes.id} className="card mb-3 col-sm-5 col-11">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={d.attributes.image_url} alt="room-img" className="img-fluid rounded-start" />
        </div>
        <div className="col-md-6 ps-1">
          <h5 className="card-title">{d.attributes.name}</h5>
          <p className="card-text">
            Price:
            {d.attributes.price}
          </p>
          <p className="card-text">
            Pet type:
            {d.attributes.type_of_pet}
          </p>
          <p className="card-text">
            Pet size:
            {d.attributes.max_size_accepted}
          </p>
          <p className="card-text"><small className="text-muted">Rating:</small></p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <button onClick={openModalAddRoom} type="button" className="btn btn-primary m-4">Add room</button>
      <h2>My Rooms</h2>
      <div className="d-flex flex-wrap justify-content-around p-2">{renderedRooms}</div>
      <ModalRoot />
    </div>
  );
}

export default MyRooms;
