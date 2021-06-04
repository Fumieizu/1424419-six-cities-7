import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MainInfo = {
  PLACE_COUNT: 200,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placeCount = {MainInfo.PLACE_COUNT}
    />
  </React.StrictMode>,

  document.getElementById('root'),
);
