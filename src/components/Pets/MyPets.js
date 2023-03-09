import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalService from '../Modal/ModalService';
import AddPet from './AddPet';
import ModalRoot from '../Modal/ModalRoot';
import Pet from './Pet';
import { fetchPets } from '../../redux/thunks/petThunks';

function MyPets() {
  const dispatch = useDispatch();
  const myPets = useSelector((state) => state.pets.data);

  useEffect(() => {
    if (!myPets.length) {
      dispatch(fetchPets());
    }
  });

  const openModalAddPet = () => {
    ModalService.open(AddPet);
  };

  return (
    <div>
      <button onClick={openModalAddPet} type="button" className="btn btn-primary m-4">New Pet</button>
      <h1>My Pets</h1>
      <ul className="container-xl">
        {myPets.map((pet) => (
          <Pet key={pet.id} pet={pet} />
        ))}
      </ul>
      <ModalRoot />
    </div>
  );
}

export default MyPets;
