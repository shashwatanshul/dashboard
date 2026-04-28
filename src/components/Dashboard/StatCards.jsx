import React from 'react';
import { 
  PlusCircle, 
  Settings, 
  BarChart2, 
  UserPlus, 
  FileText,
  Download
} from 'lucide-react';
import '../../styles/StatCards.css';

const StatCards = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: '$1k',
      change: '+8% from yesterday',
      icon: <BarChart2 size={24} />,
      color: 'red',
    },
    {
      title: 'Total Order',
      value: '300',
      change: '+5% from yesterday',
      icon: <FileText size={24} />,
      color: 'orange',
    },
    {
      title: 'Product Sold',
      value: '5',
      change: '+1.2% from yesterday',
      icon: <PlusCircle size={24} />,
      color: 'green',
    },
    {
      title: 'New Customers',
      value: '8',
      change: '0.5% from yesterday',
      icon: <UserPlus size={24} />,
      color: 'purple',
    },
  ];

  return (
    <div className="stat-container">
      <div className="stat-header">
        <div className="header-info">
          <h3>Today's Sales</h3>
          <p>Sales Summary</p>
        </div>
        <button className="export-btn">
          <Download size={16} />
          <span>Export</span>
        </button>
      </div>
      
      <div className="stat-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card card-${stat.color}`}>
            <div className={`icon-wrapper icon-${stat.color}`}>
              {stat.icon}
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-change">{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCards;
