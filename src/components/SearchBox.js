import React from 'react';

const SearchBox = ({ onSearchField }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-light-blue'
        type='text'
        placeholder='SearchRobot'
        onChange={onSearchField}
      />
    </div>
  );
};
export default SearchBox;
