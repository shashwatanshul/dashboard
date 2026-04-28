import React, { useState, useEffect, useMemo } from 'react';
import { fetchUsers } from '../../services/userService';
import { 
  Search, 
  ArrowUpDown, 
  Filter, 
  MoreVertical,
  Loader2,
  AlertCircle
} from 'lucide-react';
import '../../styles/UserTable.css';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch user data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const cities = useMemo(() => {
    const allCities = users.map(user => user.address.city);
    return [...new Set(allCities)].sort();
  }, [users]);

  const filteredAndSortedUsers = useMemo(() => {
    let result = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterCity) {
      result = result.filter(user => user.address.city === filterCity);
    }

    result.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === 'asc') {
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      } else {
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      }
    });

    return result;
  }, [users, searchTerm, sortOrder, filterCity]);

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  if (loading) {
    return (
      <div className="table-state-container">
        <Loader2 className="animate-spin" size={40} color="var(--primary-color)" />
        <p>Fetching amazing users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-state-container error">
        <AlertCircle size={40} color="#ff4d4f" />
        <p>{error}</p>
        <button onClick={loadUsers} className="retry-btn">Retry</button>
      </div>
    );
  }

  return (
    <div className="user-table-container fade-in">
      <div className="table-controls">
        <div className="control-search">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="control-filters">
          <div className="filter-select-wrapper">
            <Filter size={16} className="filter-icon" />
            <select 
              value={filterCity} 
              onChange={(e) => setFilterCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          <button className="sort-btn" onClick={toggleSort}>
            <ArrowUpDown size={16} />
            <span className="sort-text-desktop">Sort by Name: </span>
            <span className="sort-text-mobile">Sort: </span>
            <span>{sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th onClick={toggleSort} className="sortable">
                Name <ArrowUpDown size={14} />
              </th>
              <th>Email</th>
              <th>Company Name</th>
              <th>City</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedUsers.length > 0 ? (
              filteredAndSortedUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-name-cell">
                      <div className="user-avatar">
                        {user.name.charAt(0)}
                      </div>
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                  <td>
                    <span className="city-tag">{user.address.city}</span>
                  </td>
                  {/* <td>
                    <button className="action-btn">
                      <MoreVertical size={18} />
                    </button>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-results">
                  No users found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
