import React from 'react';
import '../../styles/TopProducts.css';

const TopProducts = () => {
  const products = [
    { id: '01', name: 'Home Decor Range', popularity: 45, color: '#0095FF', bg: '#F0F9FF' },
    { id: '02', name: 'Disney Princess Pink Bag 18"', popularity: 29, color: '#00E096', bg: '#F0FFF8' },
    { id: '03', name: 'Bathroom Essentials', popularity: 18, color: '#C5A8FF', bg: '#FBFAFF' },
    { id: '04', name: 'Apple Smartwatches', popularity: 25, color: '#FFCF00', bg: '#FFFCF0' },
  ];

  return (
    <div className="top-products-container">
      <table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td className="product-name">{product.name}</td>
              <td>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${product.popularity}%`,
                      backgroundColor: product.color
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <span 
                  className="sales-pill" 
                  style={{ 
                    color: product.color, 
                    backgroundColor: product.bg,
                    borderColor: product.color
                  }}
                >
                  {product.popularity}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
