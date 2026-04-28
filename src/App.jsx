import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import UserTable from './components/UserTable/UserTable'
import './styles/App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="app-container">
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <main className="main-content">
        <Header toggleSidebar={toggleSidebar} />
        
        <div className="content-area">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'users' && <UserTable />}
          {activeTab !== 'dashboard' && activeTab !== 'users' && (
            <div className="placeholder-content">
              <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section</h2>
              <p>This section is under development for the {activeTab} view.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
  )
}

export default App
