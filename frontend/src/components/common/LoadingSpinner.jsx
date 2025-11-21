import React from 'react';

const LoadingSpinner = ({ size = 'large' }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-16 w-16',
    large: 'h-32 w-32'
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}></div>
    </div>
  );
};

export default LoadingSpinner;