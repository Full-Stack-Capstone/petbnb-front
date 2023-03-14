/* eslint-disable react/prop-types */
/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
import React from 'react';

function RoomFilters({
  typeOfPetFilter, setTypeOfPetFilter, sizeOfPetFilter, setSizeOfPetFilter,
}) {
  return (
    <div className="col-sm-7 d-flex justify-content-center row">
      <div className="col-6">
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
      </div>

      <div className="col-6">
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

    </div>
  );
}

export default RoomFilters;
