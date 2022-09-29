import React, { useState } from 'react';
import words from './db';

function App() {
  const [english, setEnglish] = useState('');
  const [russian, setRussian] = useState('');

  const handleEnglish = (event) => {
    event.preventDefault();

    let word = english;

    if (words.hasOwnProperty(word)) {
      setRussian(words[word]);
    } else {
      console.log('no word');
    }
  };

  const handleRussian = (event) => {
    event.preventDefault();

    let keys = Object.keys(words).filter((k) => words[k] === russian);
    if (words.hasOwnProperty(keys)) {
      setEnglish(keys);
    } else {
      console.log('Нету такого');
    }
  };

  return (
    <form className="form-translater">
      <h3>Переводчик</h3>
      <div className="inp-btn">
        <input
          value={english}
          onChange={(event) => setEnglish(event.target.value)}
          type="text"
          placeholder="Enter english word!"
        />
        <button type="submit" onClick={handleEnglish}>
          Translate
        </button>
      </div>
      <div className="inp-btn">
        <input
          value={russian}
          onChange={(event) => setRussian(event.target.value)}
          type="text"
          placeholder="Введите слово!"
        />
        <button type="submit" onClick={handleRussian}>
          Перевод
        </button>
      </div>
    </form>
  );
}

export default App;
