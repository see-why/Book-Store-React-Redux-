import React from 'react';
import propTypes from 'prop-types';

const CategoryOptions = ({ value, content }) => <option value={value}>{content}</option>;

CategoryOptions.propTypes = {
  value: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default CategoryOptions;
