import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from './header';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render correctly with out authorization', () => {
    const storeFakeData = {
      USER: {
        authorizationStatus: 'NO_AUTH',
        userInfo: {},
      },
    };

    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  describe('Component: Header', () => {
    it('should render correctly with authorization', () => {
      const storeFakeData = {
        USER: {authorizationStatus: 'AUTH', userInfo: {}},
      };

      render(
        <Provider store={mockStore(storeFakeData)}>
          <Router history={history}>
            <Header/>
          </Router>
        </Provider>,
      );

      expect(screen.getByText('Sign out')).toBeInTheDocument();
    });
  });
});
