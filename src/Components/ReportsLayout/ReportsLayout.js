// src/components/ReportsLayout/ReportsLayout.js

import React from 'react';
import './ReportsLayout.css';

const reports = [
  { id: 1, title: 'Blood Test Report', date: '2024-05-25' },
  { id: 2, title: 'X-Ray Report', date: '2024-06-01' },
  { id: 3, title: 'MRI Report', date: '2024-06-10' }
];

const ReportsLayout = () => {
  const handleView = (id) => {
    alert(`Viewing report ID: ${id}`);
    // TODO: Navigate or open a modal
  };

  const handleDownload = (id) => {
    alert(`Downloading report ID: ${id}`);
    // TODO: Link to actual download endpoint
  };

  return (
    <div className="reports-layout">
      <h2>Your Reports</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td>{report.date}</td>
              <td>
                <button onClick={() => handleView(report.id)}>View</button>
                <button onClick={() => handleDownload(report.id)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
