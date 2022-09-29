import React from 'react';
import { useState } from 'react';

const MinutAndSecond = () => {
  const [minute, setMinute] = useState('');
  const [secund, setSecund] = useState('');

  const Convert = () => {
    setSecund(Number(minute) * 60);
  };

  return (
    <div className="minute">
      <input value={minute} onChange={(e) => setMinute(e.target.value)} />
      <button onClick={Convert}>Convert</button>
      <div>{secund && <h3>{secund} seconds</h3>}</div>
    </div>
  );
};

export default MinutAndSecond;
