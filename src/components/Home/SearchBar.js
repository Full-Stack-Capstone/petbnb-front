import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onChange }) => (
  <>
    <input type="text" placeholder="Search..." onChange={onChange} className="col-sm-5 col-10" />
  </>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
