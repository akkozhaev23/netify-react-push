import React from 'react';
import { useContext } from 'react';
import NameContext from './contexts';

const Context = () => {
  const name = useContext(NameContext);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Context;
