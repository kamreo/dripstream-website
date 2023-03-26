import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const dataMotors = [
  { date: '01/01/2022', activeUsers: 100 },
  { date: '02/01/2022', activeUsers: 150 },
  { date: '03/01/2022', activeUsers: 200 },
  { date: '04/01/2022', activeUsers: 250 },
  { date: '05/01/2022', activeUsers: 300 },
];

const dataMobile = [
  { name: 'January', activeUsers: 12, downloads: 4, purchases: 2 },
  { name: 'February', activeUsers: 19, downloads: 10, purchases: 3 },
  { name: 'March', activeUsers: 3, downloads: 5, purchases: 20 },
  { name: 'April', activeUsers: 5, downloads: 2, purchases: 5 },
  { name: 'May', activeUsers: 2, downloads: 8, purchases: 1 },
  { name: 'June', activeUsers: 3, downloads: 3, purchases: 4 },
];

const ActiveUsersChart = () => {
  return (
    <div className="chart-container">
      <h3>Users of DripMotors.com</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataMotors}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#2ecc71"
            strokeWidth={3}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
      <h3>Statistics for mobile app</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataMobile}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="activeUsers" fill="#3498db" />
          <Bar dataKey="downloads" fill="#f1c40f" />
          <Bar dataKey="purchases" fill="#27ae60" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveUsersChart;