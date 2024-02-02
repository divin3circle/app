import React from 'react';
import './Sidebar.css';
import { useContext } from 'react';
import profile from '../../assets/profile.jpg';
import { navigationLinks } from '../../data';
import {
  SidebarContext,
  initialState,
  sidebarState,
} from '../../context/SidebarContext';

type TFinalDataProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
  };
};

function Sidebar({ finalData }: TFinalDataProps) {
  const [activeLinkIdx] = React.useState(1);
  const [sidebarClass, setSidebarClass] = React.useState('');
  const { isSidebarOpen } = useContext(SidebarContext);
  console.log(initialState);

  React.useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`${sidebarClass} sidebar rounded-tl-lg rounded-bl-lg`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={profile} alt="profile" />
        </div>
        <span className="info-name text-white">
          {finalData.username === '' ? '....' : finalData.username}
        </span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
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
