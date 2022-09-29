import React, { useState } from 'react';

const MaxValue = () => {
  const [num, setNum] = useState('');
  const [res, setRes] = useState('');

  const handleMax = () => {
    let arr = num.split(' ');
    let res = Math.max.apply(null, arr);
    setRes(res);
  };

  return (
    <div className="minute">
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={handleMax}>Result</button>
      <div>{res && <h3>{res}</h3>}</div>
    </div>
  );
};

export default MaxValue;
