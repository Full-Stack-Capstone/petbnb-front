import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';
// import addRoomThunk from '../../redux/thunks/addRoomThunk';

function AddRoom({ close }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [typeOfPet, setTypeOfPet] = useState([]);
  const [maxSize, setMaxSize] = useState('');
  const [image, setImage] = useState(null);
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('type_of_pet', typeOfPet);
    formData.append('max_size_accepted', maxSize);
    formData.append('image', image);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }
    // dispatch(addRoomThunk(formData));
  };

  const checkBoxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTypeOfPet([...typeOfPet, value]);
    } else {
      setTypeOfPet(typeOfPet.filter((e) => e !== value));
    }
  };

  const onImageChange = (e) => {
    console.log(e.target.files);
    setImage({ image: e.target.files[0] });
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
          className="mb-2"
          type="number"
          step="5"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p className="m-0">Type of pet:</p>
        <div onChange={checkBoxChange}>
          <input type="checkbox" value="dog" name="typeOfPet" />
          Dog
          <input type="checkbox" value="cat" name="typeOfPet" className="ms-2 mb-2" />
          Cat
        </div>
        <p className="mb-0">Max pet size accepted:</p>
        <div className="mb-2" onChange={(e) => setMaxSize(e.target.value)}>
          <input type="radio" value="small" name="max_size_accepted" />
          Small
          <input className="ms-2" type="radio" value="medium" name="max_size_accepted" />
          Medium
          <input type="radio" value="large" name="max_size_accepted" className="ms-2" />
          Large
        </div>
        <div>
          <input type="file" name="image" onChange={onImageChange} />
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
