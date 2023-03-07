import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createReservation } from '../../redux/thunks/reservationsThunks';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';
import './MakeReservation.css';

function MakeReservation(props) {
  const dispatch = useDispatch();
  const { close, roomId } = props;

  // create a function to handle the response message
  const responseMessage = (response) => {
    const message = document.getElementById('message');
    message.innerHTML = response;
  };

  // create a function to handle the click event of the button on the modal footer
  const MakeReservation = () => {
    const requestBody = {
      start_date: document.getElementById('start_date').value,
      end_date: document.getElementById('end_date').value,
      pet_room_id: roomId,
      pet_id: 1,
    };
    dispatch(createReservation(requestBody)).then(() => {
      responseMessage();
      close();
    });
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
      </ModalBody>
      <ModalFooter buttonName="Reserve" buttonFunc={MakeReservation} />
    </Modal>
  );
}

export default MakeReservation;

MakeReservation.propTypes = {
  close: PropTypes.func.isRequired,
  roomId: PropTypes.number.isRequired,
};
