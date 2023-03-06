import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalFooter from '../Modal/ModalFooter';

function MakeReservation({ close }) {
  // create a function to handle the click event of the button on the modal footer
  const MakeReservation = () => {
    // here is where we would dispatch an action to post to the API
    console.log('MakeReservation button clicked');
  };

  return (
    <Modal>
      <ModalHeader title="Room: My Awesome Room Title" close={close} />
      <ModalBody>
        <p>Select the dates of your pet stay:</p>
        <input id="date" type="date" />
      </ModalBody>
      <ModalFooter buttonName="Reserve" buttonFunc={MakeReservation} />
    </Modal>
  );
}

export default MakeReservation;

MakeReservation.propTypes = {
  close: PropTypes.func.isRequired,
};
