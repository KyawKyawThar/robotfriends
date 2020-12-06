import React from 'react';
import Cards from './Cards';

const CardList = ({ robots }) => {
  const cardArray = robots.map((users, i) => {
    return (
      <Cards
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
