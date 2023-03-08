/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({ onChange }) => (
  <div>
    <input type="text" placeholder="Search..." onChange={onChange} />
  </div>
);

export default SearchBar;
