// src/pages/Charts.jsx
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './Charts.css';

const salesData = [
  { name: 'Jan', Mobile: 80, Desktop: 100 },
  { name: 'Feb', Mobile: 70, Desktop: 90 },
  { name: 'Mar', Mobile: 60, Desktop: 70 },
  { name: 'Apr', Mobile: 85, Desktop: 95 },
  { name: 'May', Mobile: 80, Desktop: 100 },
];

const revenueData = [
  { name: 'Jan', value: 18000 },
  { name: 'Feb', value: 28000 },
  { name: 'Mar', value: 12000 },
  { name: 'Apr', value: 22000 },
  { name: 'May', value: 20000 },
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        {payload.map((p, index) => (
          <p key={index} style={{ color: p.color }}>{`${p.name}: ${p.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

const Charts = () => {
  const [barFocus, setBarFocus] = useState(null);
  const [pieFocus, setPieFocus] = useState(null);

  return (
    <div className="page-container charts-container">
      <div className="chart-card">
        <h3>Sale By Device</h3>
        <p className="chart-subtitle">Jan 2025 - May 2025</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData} onClick={(data) => setBarFocus(data?.activePayload[0].payload)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="Mobile" fill="#8884d8" />
            <Bar dataKey="Desktop" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        {barFocus && <div className="focus-text">Clicked {barFocus.name}: Mobile {barFocus.Mobile}, Desktop {barFocus.Desktop}</div>}
      </div>

      <div className="chart-card">
        <h3>Revenue Contribution</h3>
        <p className="chart-subtitle">Jan 2025 - May 2025</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={revenueData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onClick={(data) => setPieFocus(data)}
            >
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          </PieChart>
        </ResponsiveContainer>
        {pieFocus && <div className="focus-text">Clicked {pieFocus.name}: ₹{pieFocus.value.toLocaleString()}</div>}
      </div>
    </div>
  );
};

export default Charts;