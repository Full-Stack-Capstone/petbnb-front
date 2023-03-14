import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import ModalService from '../Modal/ModalService';
import EditPet from './EditPet';
import { deletePet } from '../../redux/thunks/petThunks';

function Pet({ pet }) {
  const dispatch = useDispatch();
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

  const openModalEditPet = () => {
    ModalService.open(EditPet, { pet });
  };

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

  const handleDeletePet = () => {
    dispatch(deletePet(pet.id)).then((response) => {
      if (response.status === 200) {
        responseMessage('Pet deleted!', 'success');
      } else {
        responseMessage(response.error.message, 'danger');
      }
    });
  };

  return (
    <li className="card mb-3 text-start" style={{ 'max-width': '400px' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img src={pet.image_url} className="img-fluid rounded-start bg-grey" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">
              {pet.name}
            </h5>
            <div className="card-text d-flex gap-3">
              <p>breed</p>
              <p>{pet.breed}</p>
            </div>
            <div className="card-text d-flex gap-3">
              <p>date of birth</p>
              <p>{pet.date_of_birth}</p>
            </div>
          </div>
          <div className="card-footer text-muted text-center">
            <button onClick={openModalEditPet} type="button" className="btn btn-primary m-4">Edit pet</button>
            <button onClick={handleDeletePet} type="button" className="btn btn-primary m-4">Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Pet;

Pet.propTypes = {
  pet: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image_url: propTypes.string.isRequired,
    date_of_birth: propTypes.string.isRequired,
    breed: propTypes.string.isRequired,
  }).isRequired,
};
