import React, { useState } from 'react';

const Dublicat = () => {
  const [word, setWord] = useState('');
  const [dublicat, setDublicat] = useState('');

  const handleDublicat = () => {
    let arr = word.split(' ');
    let res = Array.from(new Set(arr));
    setDublicat(res);
  };

  return (
    <div className="minute">
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleDublicat}>Dublicat</button>
      <div>
        <ul>{dublicat && dublicat.map((e, index) => <li key={index + e}>{e}</li>)}</ul>
      </div>
    </div>
  );
};

export default Dublicat;
