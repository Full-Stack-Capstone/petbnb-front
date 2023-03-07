import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';

function AddRoom({ close }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [typeOfPet, setTypeOfPet] = useState([]);
  const [maxSize, setMaxSize] = useState('');
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const roomInfo = {
      pet_room: {
        name,
        price,
        type_of_pet: typeOfPet,
        max_size_accepted: maxSize,
      },
    };
    console.log(roomInfo);
    // dispatch(loginUser(roomInfo));
  };

  const checkBoxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTypeOfPet([...typeOfPet, value]);
    } else {
      setTypeOfPet(typeOfPet.filter((e) => e !== value));
    }
  };

  return (
    <Modal>
      <ModalHeader title="Add new room" close={close} />
      <ModalBody>
        <p className="mb-1">Room name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mb-1">Price:</p>
        <input
          type="number"
          step="5"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p className="mb-1">Type of pet:</p>
        <div onChange={checkBoxChange}>
          <input type="checkbox" value="dog" name="typeOfPet" />
          Dog
          <input type="checkbox" value="cat" name="typeOfPet" className="ms-2" />
          Cat
        </div>
        <p className="mb-1">Max pet size accepted:</p>
        <div onChange={(e) => setMaxSize(e.target.value)}>
          <input type="radio" value="small" name="max_size_accepted" />
          Small
          <input type="radio" value="medium" name="max_size_accepted" />
          Medium
          <input type="radio" value="large" name="max_size_accepted" className="ms-2" />
          Large
        </div>
      </ModalBody>
      <ModalFooter buttonName="Add room" buttonFunc={handleSubmit} />
    </Modal>
  );
}

export default AddRoom;

AddRoom.propTypes = {
  close: PropTypes.func.isRequired,
};
