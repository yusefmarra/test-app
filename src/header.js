import React, { Component } from 'react';
import Signup from './signup';
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="left-container">
          <img className="logo" src={this.props.img} alt={this.props.logo_alt || 'A La Carte TV'} />
          <span className="subtitle">{this.props.subtitle}</span>
        </div>
        <span>{this.props.children}</span>
      </nav>
    );
  }
}

Header.defaultProps = {
  img: 'defaultImg.png',
  subtitle: 'A La Carte TV',
  children: <Signup />
}

export default Header;
