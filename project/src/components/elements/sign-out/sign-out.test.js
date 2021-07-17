import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import SignOut from './sign-out';

describe('Component: SignOut', () => {
  it('should render correctly', () => {
    const mockStore = configureStore();
    const history = createMemoryHistory();
    const storeFakeData = {
      USER: {
        authorizationStatus: 'AUTH',
        userInfo: {},
      },
    };

    const { getByText } = render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <SignOut />
        </Router>
      </Provider>,
    );

    expect(getByText('Sign out')).toBeInTheDocument();
  });
});
