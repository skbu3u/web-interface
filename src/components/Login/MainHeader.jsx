import React from 'react';
import Usermenu from '../UI/User/Usermenu';

export const MainHeader = (props) => {
  return (
    <header className="flex items-center justify-between h-20 py-0 px-8 fixed top-0 left-0 w-full">
      <h1></h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

const Navigation = (props) => {
  return (
    <nav className>
      <ul className>
        {props.isLoggedIn && (
          <li>
            <Usermenu isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
          </li>
        )}
      </ul>
    </nav>
  );
};


