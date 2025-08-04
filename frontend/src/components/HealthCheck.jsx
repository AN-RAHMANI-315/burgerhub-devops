import React from 'react';

const HealthCheck = () => {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime ? process.uptime() : 'N/A'
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            BurgerHub Health Check
          </h1>
          <p className="text-gray-600">
            Application is running successfully!
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">Status</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {healthData.status}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">Version</span>
            <span className="text-sm text-gray-900">{healthData.version}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">Environment</span>
            <span className="text-sm text-gray-900">{healthData.environment}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">Timestamp</span>
            <span className="text-sm text-gray-900">
              {new Date(healthData.timestamp).toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Refresh Health Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthCheck;
