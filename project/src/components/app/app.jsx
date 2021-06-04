import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App({placeCount}) {

  return (
    <Main
      placeCount = {placeCount}
    />
  );
}

App.propTypes = {
  placeCount: PropTypes.number.isRequired,
};

export default App;
