import React, { Component } from 'react';
import { Button } from 'antd';
import { HeaderWrapper } from '../../styles/Header';
import logoImg from '../../assets/images/logo-100.png';

export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="header__left">
          <img className="logo-img" src={logoImg}/>
          <h3 className="logo-label">SMOVIES</h3>
        </div>
        <div className="header__right">
          <Button type="primary" icon="search">Search</Button>
          <Button>Sign in</Button>
        </div>
      </HeaderWrapper>
    );
  }
}