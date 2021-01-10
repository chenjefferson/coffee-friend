import React, { Component, Fragment } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        {this.props.nickname.length ? (
          <p>Hello, {this.props.nickname}</p>
        ) : (
          <Fragment />
        )}
        <ul>
          <li>About</li>
          <li>Sign Up</li>
          <li>Home</li>
        </ul>
      </header>
    );
  }
}

export default Header;
