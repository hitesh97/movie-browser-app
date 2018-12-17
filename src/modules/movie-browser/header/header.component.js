import React from 'react';
import './header.scss';

const Header = props => (
  <nav className="header navbar navbar-dark bg-dark">
    <div className="container">
      <div className="row m-auto">
        <i className="fa fa-film fa-2x text-white my-auto" />
        <div className="h3 ml-3 my-auto text-light" href="/">
          {props.title}
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
