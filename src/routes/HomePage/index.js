import React from 'react';
import DeltaImg from '../../assets/Delta.png';
import './style.less';

const HomeView = () => (
  <div className="home-page-style">
    <img alt="This is DRC starter kit!" className="delta-img" src={DeltaImg} />
    <div className="welcome">
      <span>Hello !Welcome to DRC Starter Kit</span>
    </div>
  </div>
);

export default HomeView;
