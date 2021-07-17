import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import NotFoundScreen from './not-found-screen';

const history = createMemoryHistory();
const mockStore = createMockStore();
const storeFakeData = {
  USER: {
    authorizationStatus: 'NO_AUTH',
    userInfo: {},
  },
};

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <NotFoundScreen />
        </Router>
      </Provider>,
    );


    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go on Main')).toBeInTheDocument();
  });
});
