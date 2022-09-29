import React, { useState } from 'react';

const MinAndMax = () => {
  const [num, setNum] = useState('');
  const [newArr, setNewArr] = useState('');

  const handleMinMax = () => {
    let arr = num.split(' ');
    let res = arr.sort((a, b) => a - b);
    setNewArr(res);
  };

  return (
    <div className="minute">
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={handleMinMax}>Min and max</button>
      <div>
        <ul>{newArr && newArr.map((e, index) => <li key={index + e}>{e}</li>)}</ul>
      </div>
    </div>
  );
};

export default MinAndMax;
