import React from 'react';
import './ReportsLayout.css';

const reports = [
  { id: 1, title: 'Blood Test Report', date: '2024-05-25', fileName: 'blood-test.png' },
  { id: 2, title: 'X-Ray Report', date: '2024-06-01', fileName: 'xray-report.png' },
  { id: 3, title: 'MRI Report', date: '2024-06-10', fileName: 'mri-report.png' }
];

const ReportsLayout = () => {
  const handleView = (id) => {
    alert(`Viewing report ID: ${id}`);
  };

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/reports/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                <button onClick={() => handleDownload(report.fileName)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
