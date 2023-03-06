/* eslint-disable react/prop-types */
import React from 'react';

function RoomFilters({
  typeOfPetFilter, setTypeOfPetFilter, sizeOfPetFilter, setSizeOfPetFilter,
}) {
  return (
    <div>
      <label htmlFor="typeOfPet">Type of Pet:</label>
      <select
        id="typeOfPet"
        value={typeOfPetFilter}
        onChange={(e) => setTypeOfPetFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      <label htmlFor="sizeOfPet">Size of Pet:</label>
      <select
        id="sizeOfPet"
        value={sizeOfPetFilter}
        onChange={(e) => setSizeOfPetFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
}

export default RoomFilters;
