import React from 'react';
import Context from './Context';
import NameContext from './contexts';

const Elementr = () => {
  const name = 'Adam';

  return (
    <NameContext.Provider value={name}>
      <Context />
    </NameContext.Provider>
  );
};

export default Elementr;
