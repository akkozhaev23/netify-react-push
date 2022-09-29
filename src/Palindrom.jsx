import React, { useState } from 'react';

const Palindrom = () => {
  const [word, setWord] = useState('');
  const [polindrom, setPolindrom] = useState('');

  const handlePalindrome = () => {
    let low = word.toLowerCase();
    let res = low.split('').reverse().join('');
    if (low === res) {
      setPolindrom('Palindrome');
    } else {
      setPolindrom('Not Palindrome');
    }
  };

  return (
    <div className="minute">
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handlePalindrome}>Polindrom</button>
      <div>{polindrom && <h3>{polindrom}</h3>}</div>
    </div>
  );
};

export default Palindrom;
