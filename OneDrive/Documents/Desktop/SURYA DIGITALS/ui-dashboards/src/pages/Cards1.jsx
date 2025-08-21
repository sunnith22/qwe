// src/pages/Cards1.jsx
import React from 'react';
import './Cards.css';

const data = [
  { title: "Total Orders", value: 862, timestamp: 1754476592000 },
  { title: "Ordered Items This Week", value: 156, timestamp: 1754641532000 },
  { title: "Return Orders", value: 12, timestamp: 1754562992000 },
  { title: "Fulfilled Orders This Week", value: 124, timestamp: 1754627132000 }
];

const InfoCard = ({ title, value, timestamp }) => {
  const formattedDate = new Date(timestamp).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="info-card">
      <p className="card-title">{title}</p>
      <p className="card-value">{value.toLocaleString()}</p>
      <p className="card-timestamp">as of {formattedDate}</p>
    </div>
  );
};

const Cards1 = () => {
  return (
    <div className="page-container">
      {data.map(item => (
        <InfoCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Cards1;