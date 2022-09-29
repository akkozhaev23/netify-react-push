import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/task1">Task 1</NavLink>
      <NavLink to="task2">Task 2</NavLink>
      <NavLink to="/task3">Task 3</NavLink>
      <NavLink to="/task4">Task 4</NavLink>
      <NavLink to="/task5">Task 5</NavLink>
      <NavLink to="/task6">Task 6</NavLink>
    </nav>
  );
};

export default NavBar;
