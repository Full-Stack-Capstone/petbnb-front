import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPets } from '../../redux/thunks/petThunks';
import { createReservation } from '../../redux/thunks/reservationsThunks';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';
import ModalService from '../Modal/ModalService';
import AddPet from '../Pets/AddPet';
import './MakeReservation.css';

function MakeReservation(props) {
  const dispatch = useDispatch();
  const { close, roomId } = props;
  const petsState = useSelector((state) => state.pets);
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

  // get all pets of the current user
  useEffect(() => {
    dispatch(fetchPets());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // create a function to handle the click event of the button on the modal footer
  const CreateReservation = () => {
    const requestBody = {
      pet_room_id: roomId,
      start_date: document.getElementById('start_date').value,
      end_date: document.getElementById('end_date').value,
      pet_id: document.getElementById('pet_id').value,
    };
    dispatch(createReservation(requestBody)).then((response) => {
      if (response.error) {
        responseMessage(response.error.message, 'danger');
      } else {
        responseMessage('Pet room reserved succesfully', 'success');
      }
      close();
    });
  };

  const openModalAddPet = () => {
    ModalService.open(AddPet);
  };

  return (
    <Modal>
      <ModalHeader title="Room: My Awesome Room Title" close={close} />
      <ModalBody>
        <p>Select the dates of your pet stay:</p>
        <p>Drop-off</p>
        <input id="start_date" type="date" />
        <p>Pick-up</p>
        <input id="end_date" type="date" />
        <p>Select your pet:</p>
        <select id="pet_id">
          {petsState.data.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.name}
            </option>
          ))}
        </select>
        <button onClick={openModalAddPet} type="button" className="btn btn-primary m-4">New Pet</button>
      </ModalBody>
      <ModalFooter buttonName="Reserve" buttonFunc={CreateReservation} />
    </Modal>
  );
}

export default MakeReservation;

MakeReservation.propTypes = {
  close: PropTypes.func.isRequired,
  roomId: PropTypes.number.isRequired,
};
