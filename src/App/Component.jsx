import React from 'react';
import AppBar from 'material-ui/AppBar';
import VolleyballIcon from './../components/icons/Volleyball';
import FootballIcon from './../components/icons/Football';
import BasketballIcon from './../components/icons/Basketball';
import './styles.css';

export default ({ children }) => (
  <div className="root-container">
    <AppBar
      title="Playgrounds"
      iconElementLeft={
        <div className="logo-container">
          <VolleyballIcon />
          <FootballIcon />
          <BasketballIcon />
        </div>
      }
    />
    {children}
  </div>
);
