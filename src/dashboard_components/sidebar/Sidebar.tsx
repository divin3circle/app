import React from 'react';
import './Sidebar.css';

import profile from '../../assets/profile.jpg';
import { navigationLinks } from '../../data';
import {
  SidebarContext,
  initialState,
  sidebarState,
} from '../../context/SidebarContext';
import { DataContext } from '../../context/DataContext';
import { backend } from '../../declarations/backend';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { signOut } from '@junobuild/core';

type TFinalDataProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
  };
};

function Sidebar({ finalData }: TFinalDataProps) {
  const { userData, setUserData } = useContext(DataContext);
  console.log(userData);
  const [activeLinkIdx] = React.useState(1);
  const [sidebarClass, setSidebarClass] = React.useState('');
  const { isSidebarOpen } = useContext(SidebarContext);
  const [displayName, setDisplayName] = React.useState('');

  // console.log(initialState);
  const getUserInfo = async () => {
    const userKeyFromStorage = localStorage.getItem('userKey');
    // const userKey = userData.id;
    // if (userKey === undefined)
    //   return toast.error('An error occurred, sign in again');
    if (userKeyFromStorage !== null) {
      const currentUser = await backend.getUser(userKeyFromStorage);
      console.log(currentUser[0]);
      if (currentUser.length !== 0) {
        setDisplayName(currentUser[0].username);
      }
    }
  };
  getUserInfo();

  React.useEffect(() => {
    //get data from backend
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`${sidebarClass} sidebar`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={profile} alt="profile" />
        </div>
        <span className="info-name text-white">
          Hi👋, {displayName !== '' ? displayName : '❌'}
        </span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                onClick={navigationLink.id === 11 ? () => signOut() : () => {}}
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? 'active' : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  alt={navigationLink.title}
                  className="nav-link-icon"
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
