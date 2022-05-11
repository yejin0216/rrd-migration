import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Nav = () => {
  const [, , clearAuthToken] = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    clearAuthToken();
    navigate('/login');
  };

  return (
    <ul>
      <li>
        <NavLink to='/'>Main</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <button type='button' onClick={handleSignOut}>
          Sign Out
        </button>
      </li>
    </ul>
  );
};

export default Nav;
