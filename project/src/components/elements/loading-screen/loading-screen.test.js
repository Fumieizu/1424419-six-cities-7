import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <LoadingScreen />
      </Router>,
    );

    expect(getByTestId('loading-id')).toBeInTheDocument();
  });
});
