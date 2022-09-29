import React, { useState } from 'react';

const Reverse = () => {
  const [word, setWord] = useState('');
  const [rever, setRever] = useState('');

  const handleReverse = () => {
    let res = word.split('').reverse().join('');
    setRever(res);
  };

  return (
    <div className="minute">
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleReverse}>Reverse</button>
      <div>{rever && <h3>{rever}</h3>}</div>
    </div>
  );
};

export default Reverse;
