import React from 'react';
import propTypes from 'prop-types';
import ModalService from '../Modal/ModalService';
import EditPet from './EditPet';

function Pet({ pet }) {
  const openModalEditPet = () => {
    ModalService.open(EditPet, { pet });
  };

  return (
    <li className="card mb-3 text-startc col-sm-5 col-12">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={pet.image_url} className="img-fluid rounded-start" alt="..." />
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
