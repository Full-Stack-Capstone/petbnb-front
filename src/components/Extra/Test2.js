import React, { useState } from 'react';
import {
  Button, Form, Modal, Toast,
} from 'react-bootstrap';

function MyComponent() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formValue, setFormValue] = useState('');

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  const handleFormChange = (event) => {
    setFormValue(event.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleButtonClick}>
        Show Modal
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formValue}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">
                We never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Toast show={showToast} onClose={handleToastClose}>
        <Toast.Header>
          <strong className="mr-auto">Bootstrap Toast</strong>
        </Toast.Header>
        <Toast.Body>
          Your email address
          {' '}
          {formValue}
          {' '}
          has been submitted.
        </Toast.Body>
      </Toast>
    </>
  );
}

export default MyComponent;
