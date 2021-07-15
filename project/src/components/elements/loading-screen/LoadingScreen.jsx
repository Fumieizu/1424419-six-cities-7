import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingScreen;
