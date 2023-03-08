import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../redux/slices/myRoomsSlice';
import ModalService from '../Modal/ModalService';
import ModalRoot from '../Modal/ModalRoot';
import AddRoom from './AddRoom';
import petroomImage from '../../images/petroom.jpg';

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

    <div key={d.id} className="card mb-3" style={{ width: '40%' }}>
      <div className="row g-0">
        <div className='col-md-6'>
          <img src={petroomImage} alt="room-img" className='img-fluid rounded-start'/>
        </div>
        <div className='col-md-6 ps-1'>
          <h5 className='card-title'>{d.name}</h5>
          <p className='card-text'>Price: {d.price}</p>
          <p className='card-text'>Pet type: {d.type_of_pet}</p>
          <p className='card-text'>Pet size: {d.max_size_accepted}</p>
          <p className="card-text"><small class="text-muted">Rating:</small></p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className='vw-100 d-flex flex-wrap justify-content-around row-gap-2'>{renderedRooms}</div>
      <button onClick={openModalAddRoom} type="button" className="btn btn-primary m-4">Add room</button>
      <ModalRoot />
    </div>
  );
}

export default MyRooms;
