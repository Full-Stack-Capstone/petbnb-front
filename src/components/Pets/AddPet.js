import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../redux/thunks/userThunks';
import { createPet, fetchPets } from '../../redux/thunks/petThunks';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';

function AddPet(props) {
  const { close } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.data);
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
    const typeOfPet = document.getElementById('pet-type').value;
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
        responseMessage('Pet created succesfully', 'success');
        dispatch(fetchPets());
      }
      close();
      // make component reload by navigating back to the component in case user is in path /my-pets
      if (window.location.pathname === '/my-pets') {
        navigate('/my-pets');
      } else {
        // click on make reservation button to get back to the modal
        document.getElementById('make-reservation-button').click();
      }
    });
  };

  return (
    <Modal>
      <ModalHeader title="Add Pet" close={close} />
      <ModalBody>
        <div>
          <p className="m-0">Name:</p>
          <input className="mb-2" id="name" type="text" />
          <p className="m-0">Type:</p>
          {/* give size options to user */}
          <select className="mb-2" id="pet-type">
            <option className="mb-2">Select type</option>
            {['dog', 'cat'].map((petType) => (
              <option key={petType} value={petType}>
                {petType}
              </option>
            ))}
          </select>
          <p className="m-0">Date of birth:</p>
          <input className="mb-2" id="date-of-birth" type="date" />
          <p className="m-0">Size:</p>
          {/* give size options to user */}
          <select className="mb-2" id="pet-size">
            {['small', 'medium', 'large'].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p className="m-0">Breed:</p>
          <input className="mb-2" id="breed" type="text" />
          <p className="m-0">Gender:</p>
          <select className="mb-2" id="gender">
            {['male', 'female'].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p className="m-0">Hair Length:</p>
          <input className="mb-2" id="hair-length" type="text" />
          <p className="m-0">Allergies:</p>
          <input className="mb-2" id="allergies" type="text" />
          <p className="m-0">Extra Information:</p>
          <input className="mb-2" id="extra-information" type="text" />

          <p className="m-0">Upload image:</p>
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
