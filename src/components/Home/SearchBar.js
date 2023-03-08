import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onChange }) => (
  <div>
    <input type="text" placeholder="Search..." onChange={onChange} />
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.isRequired,
};

export default SearchBar;
