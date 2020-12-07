import React from 'react';

const Cards = ({ id, name, username, email }) => {
  return (
    <div className='tc bg-light-green dib br3 ma2 pa3 grow shadow-5'>
      <img alt='robort' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <span>
          <p>{username}</p>
          <p>{email}</p>
        </span>
      </div>
    </div>
  );
};
export default Cards;
