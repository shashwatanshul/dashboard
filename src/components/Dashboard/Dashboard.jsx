import React from 'react';
import StatCards from './StatCards';
import VisitorInsights from '../Charts/VisitorInsights';
import TotalRevenue from '../Charts/TotalRevenue';
import CustomerSatisfaction from '../Charts/CustomerSatisfaction';
import TargetVsReality from '../Charts/TargetVsReality';
import TopProducts from './TopProducts';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-grid fade-in">
      <div className="section-today-sales">
        <StatCards />
      </div>
      
      <div className="section-visitor-insights">
        <div className="card chart-card">
          <h3>Visitor Insights</h3>
          <div className="chart-container">
            <VisitorInsights />
          </div>
        </div>
      </div>

      <div className="section-total-revenue">
        <div className="card chart-card">
          <h3>Total Revenue</h3>
          <div className="chart-container">
            <TotalRevenue />
          </div>
        </div>
      </div>

      <div className="section-customer-satisfaction">
        <div className="card chart-card">
          <h3>Customer Satisfaction</h3>
          <div className="chart-container">
            <CustomerSatisfaction />
          </div>
        </div>
      </div>

      <div className="section-target-reality">
        <div className="card chart-card">
          <h3>Target vs Reality</h3>
          <div className="chart-container">
            <TargetVsReality />
          </div>
        </div>
      </div>

      <div className="section-top-products">
        <div className="card list-card">
          <h3>Top Products</h3>
          <TopProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
