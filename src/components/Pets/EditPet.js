import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../redux/thunks/userThunks';
import { editPet, fetchPets } from '../../redux/thunks/petThunks';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';

const EditPet = (props) => {
  const dispatch = useDispatch();
  const { close, pet } = props;
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

    const petId = pet.id;
    dispatch(editPet({ formData, petId })).then((response) => {
      if (response.error) {
        responseMessage(response.error.message, 'danger');
      } else {
        responseMessage('Pet edited succesfully', 'success');
      }
      close();
      dispatch(fetchPets());
    });
  };

  return (
    <Modal>
      <ModalHeader title="Edit Pet" close={close} />
      <ModalBody>
        <div>
          <p>Name:</p>
          <input id="name" type="text" value={pet.name} placeholder={pet.name} />
          <p>Type:</p>
          {/* give size options to user */}
          <input id="pet-type" value={pet.pet_type} hidden />
          <p>Date of birth:</p>
          <input id="date-of-birth" type="date" value={pet.date_of_birth} placeholder={pet.date_of_birth} />
          <p>Size:</p>
          {/* give size options to user */}
          <select id="pet-size">
            <option value={pet.size}>{pet.size}</option>
            {['small', 'medium', 'large'].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p>breed:</p>
          <input id="breed" type="text" value={pet.breed} placeholder={pet.breed} />
          <p>gender:</p>
          <select id="gender">
            <option value={pet.date_of_birth}>{pet.date_of_birth}</option>
            {['male', 'female'].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p>Hair Length:</p>
          <input id="hair-length" type="text" value={pet.hair_length} placeholder={pet.hair_length} />
          <p>allergies:</p>
          <input id="allergies" type="text" value={pet.allergies} placeholder={pet.allergies} />
          <p>Extra Information:</p>
          <input id="extra-information" type="text" value={pet.extra_information} placeholder={pet.extra_information} />

          {/* upload image */}
          <input id="image" type="file" value={pet.image} accept="image/*" />
        </div>
      </ModalBody>
      <ModalFooter buttonName="Confirm" buttonFunc={handleSubmit} close={close} />
    </Modal>
  );
};

EditPet.propTypes = {
  close: PropTypes.func.isRequired,
  pet: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    pet_type: PropTypes.string,
    date_of_birth: PropTypes.string,
    size: PropTypes.string,
    breed: PropTypes.string,
    hair_length: PropTypes.string,
    allergies: PropTypes.string,
    extra_information: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default EditPet;
