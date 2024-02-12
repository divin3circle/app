import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 border-t-4 border-green-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
