import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import AuthScreen from './auth-screen';

const mockStore = configureStore();
const storeFakeData = {
  PROCESS: {city: 'Paris'},
  USER: {
    authorizationStatus: 'NO_AUTH',
    userInfo: {},
  },
};

describe('Component: AuthScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <AuthScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'test@test.com');
    userEvent.type(screen.getByTestId('password'), '123456');
    expect(screen.getByDisplayValue('test@test.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('123456')).toBeInTheDocument();
  });
});
