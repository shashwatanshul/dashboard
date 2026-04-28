import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  ShoppingCart, 
  ShoppingBag, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut,
  Users,
  X
} from 'lucide-react';
import '../../styles/Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'users', label: 'Users', icon: <Users size={20} /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <BarChart3 size={20} /> },
    { id: 'order', label: 'Order', icon: <ShoppingCart size={20} /> },
    { id: 'products', label: 'Products', icon: <ShoppingBag size={20} /> },
    { id: 'reports', label: 'Sales Report', icon: <FileText size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">
          <div className="logo-square">
            <span>😎</span>
          </div>
        </div>
        <h2>Dabang</h2>
        <button className="mobile-close" onClick={toggleSidebar}>
          <X size={24} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth <= 768) toggleSidebar();
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="pro-card">
          <div className="pro-icon">
            <div className="pro-square">
              <span>&#10024;</span>
            </div>
          </div>
          <h3>Dabang Pro</h3>
          <p>Get access to all features on tetumbas</p>
          <button className="pro-button">Get Pro</button>
        </div>
        
        <button className="nav-item sign-out">
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
