import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';

function MakeReservation(props) {
  const { close } = props;
  return (
    <Modal>
      <ModalHeader>
        <p>Room: My Awesome Room Title</p>
        <button onClick={close} type="button" className="btn btn-primary">X</button>
      </ModalHeader>
      <ModalBody>
        <p>Select the dates of your pet stay:</p>
        <input id="date" type="date" />
      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-primary">Reserve</button>
      </ModalFooter>
    </Modal>
  );
}

MakeReservation.propTypes = {
  close: PropTypes.func.isRequired,
};

export default MakeReservation;
