import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../redux/thunks/userThunks';
import { createPet } from '../../redux/thunks/petThunks';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';

function AddPet(props) {
  const { close } = props;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.data);
  const [typeOfPet, setTypeOfPet] = useState([]);
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

  // get current user info
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // create a function to handle the response message
  const responseMessage = (message, status) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-${status} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');

    alertPlaceholder.append(wrapper);
  };

  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const size = document.getElementById('pet-size').value;
    const breed = document.getElementById('breed').value;
    const gender = document.getElementById('gender').value;
    const hairLength = document.getElementById('hair-length').value;
    const allergies = document.getElementById('allergies').value;
    const extraInformation = document.getElementById('extra-information').value;
    const image = document.getElementById('image').files[0];

    const formData = new FormData();
    formData.append('pet[name]', name);
    formData.append('pet[pet_type]', typeOfPet);
    formData.append('pet[date_of_birth]', dateOfBirth);
    formData.append('pet[size]', size);
    formData.append('pet[breed]', breed);
    formData.append('pet[gender]', gender);
    formData.append('pet[hair_length]', hairLength);
    formData.append('pet[allergies]', allergies);
    formData.append('pet[extra_information]', extraInformation);
    formData.append('pet[image]', image);
    formData.append('pet[user_id]', currentUser.id);
    dispatch(createPet(formData)).then((response) => {
      if (response.error) {
        responseMessage(response.error.message, 'danger');
      } else {
        responseMessage('Pet room reserved succesfully', 'success');
      }
      close();
    });
  };

  return (
    <Modal>
      <ModalHeader title="Add Pet" close={close} />
      <ModalBody>
        <div>
          <p>Name:</p>
          <input id="name" type="text" />
          <p>Type:</p>
          {/* give size options to user */}
          <select id="pet-type">
            <option>Select type</option>
            {['dog', 'cat'].map((petType) => (
              <option key={petType} value={petType}>
                {petType}
              </option>
            ))}
          </select>
          <p>Date of birth:</p>
          <input id="date-of-birth" type="date" />
          <p>Size:</p>
          {/* give size options to user */}
          <select id="pet-size">
            {['small', 'medium', 'large'].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p>breed:</p>
          <input id="breed" type="text" />
          <p>gender:</p>
          <select id="gender" onChange={setTypeOfPet}>
            {['male', 'female'].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p>Hair Length:</p>
          <input id="hair-length" type="text" />
          <p>allergies:</p>
          <input id="allergies" type="text" />
          <p>Extra Information:</p>
          <input id="extra-information" type="text" />

          {/* upload image */}
          <input id="image" type="file" accept="image/*" />
        </div>
      </ModalBody>
      <ModalFooter buttonName="Add Pet" buttonFunc={handleSubmit} close={close} />
    </Modal>
  );
}

AddPet.propTypes = {
  close: PropTypes.func.isRequired,
};

export default AddPet;
