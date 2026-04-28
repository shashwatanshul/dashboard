import React from 'react';
import { 
  Search, 
  ChevronDown, 
  Bell, 
  Menu 
} from 'lucide-react';
import '../../styles/Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <h1>Dashboard</h1>
      </div>

      <div className="header-search">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>

      <div className="header-right">
        <div className="lang-selector">
          <img src="https://flagcdn.com/w20/us.png" alt="US Flag" width="20" />
          <span>Eng (US)</span>
          <ChevronDown size={16} />
        </div>

        <button className="notification-btn">
          <Bell size={20} />
          <span className="dot"></span>
        </button>

        <div className="user-profile">
          <img src="https://i.pravatar.cc/150?u=musfiq" alt="Profile" className="profile-img" />
          <div className="user-info">
            <span className="user-name">Musfiq</span>
            <span className="user-role">Admin</span>
          </div>
          <ChevronDown size={16} className="profile-chevron" />
        </div>
      </div>
    </header>
  );
};

export default Header;
