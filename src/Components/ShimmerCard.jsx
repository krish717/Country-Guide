// ShimmerCard.jsx
import React from 'react';
import './ShimmerCard.css'; // Ensure to import the CSS file for shimmer styles
import useTheme from '../Hooks/useTheme';

const ShimmerCard = () => {
  const [isdark] = useTheme();
  return (
    <div className={`shimmer-card ${isdark ? 'dark' : ''}`}>
      <div className="shimmer-wrapper">
        <div className="shimmer shimmer-img"></div>
        <div className="shimmer shimmer-text" style={{ width: '60%' }}></div>
        <div className="shimmer shimmer-text" style={{ width: '40%' }}></div>
        <div className="shimmer shimmer-text" style={{ width: '50%' }}></div>
        <div className="shimmer shimmer-text" style={{ width: '70%' }}></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
