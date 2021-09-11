import './Header.scss';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className='App-header'>
        <nav>
          <div className='logo'>
            <img
              src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
              alt=''
            />
          </div>
          <div className='search'>
            <span class='material-icons'>search</span>
            <span>Search</span>
          </div>
          <ul className='navbar'>
            <li>
              <a href='#'>
                <span class='material-icons'>home</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span class='material-icons-outlined'>chat</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span class='material-icons-outlined'>add_circle_outline</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span class='material-icons-outlined'>explore</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span class='material-icons-outlined'>favorite_border</span>
              </a>
            </li>
            <li className='avatar'>
              <a href='#'>
                <img
                  src='https://pbs.twimg.com/profile_images/1426300590095847427/9XQQZ5BI_400x400.jpg'
                  alt=''
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
