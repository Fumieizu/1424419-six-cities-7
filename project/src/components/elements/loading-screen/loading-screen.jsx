import React from 'react';
import './loading-screen.css';

function LoadingScreen() {
  return (
    <div className="lds-ring" data-testid="loading-id">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingScreen;
