import React from 'react';
import { useState } from 'react';
import names from './users.json';

const SearchFilter = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div>SearchFilter</div>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      {names
        .filter((name) => {
          if (value === '') {
            return name;
          } else if (name.toLowerCase().includes(value.toLowerCase())) {
            return name;
          }
        })
        .map((name) => (
          <div key={name}>{name}</div>
        ))}
    </div>
  );
};

export default SearchFilter;
