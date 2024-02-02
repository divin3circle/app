import React from 'react';
import './ContentTop.css';
import { useContext } from 'react';
import { SidebarContext } from '../../../context/SidebarContext';
import { iconsImgs } from '../../../assets/images';

function ContentTop() {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="menu" />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btns">
        <button type="button" className="search-btn content-top-btn">
          <img src={iconsImgs.search} alt="search" />
        </button>
        <button type="button" className="notification-btn content-top-btn">
          <img src={iconsImgs.bell} alt="bell" />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
}

export default ContentTop;
