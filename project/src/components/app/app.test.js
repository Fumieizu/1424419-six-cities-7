import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppRoute } from '../../const';
import App from './app';


jest.mock('../pages/favorites/favorites', () => ({
  __esModule: true,
  default() {
    return <>This is mock Favorites Screen</>;
  },
}));

jest.mock('../pages/main/main', () => ({
  __esModule: true,
  default() {
    return <>This is mock Main Screen</>;
  },
}));

jest.mock('../pages/auth-screen/auth-screen', () => ({
  __esModule: true,
  default() {
    return <>This is mock Auth Screen</>;
  },
}));

jest.mock('../elements/room-wrapper/room-wrapper', () => ({
  __esModule: true,
  default() {
    return <>This is mock Room Screen</>;
  },
}));

jest.mock('../pages/not-found-screen/not-found-screen', () => ({
  __esModule: true,
  default() {
    return <>This is mock NotFound Screen</>;
  },
}));

const history = createMemoryHistory();
const fakeStore = configureStore();
const fakeStoreData = {
  USER: {authorizationStatus: 'NO_AUTH'},
};

describe('Application Routing', () => {
  it('should render Main screen when navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(
      <Provider store={fakeStore(fakeStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is mock Main Screen')).toBeInTheDocument();
  });

  it('should render Auth-screen screen when navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(
      <Provider store={fakeStore(fakeStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is mock Auth Screen')).toBeInTheDocument();
  });

  it('should render Room screen when navigate to /offer/:id route', () => {
    const fakeId = 1;
    history.push(`${AppRoute.OFFER}/${fakeId}`);
    render(
      <Provider store={fakeStore(fakeStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is mock Room Screen')).toBeInTheDocument();
  });

  it('should render Favorite screen when navigate to "/favorites" with successful authorization', () => {
    history.push(AppRoute.FAVORITES);

    render(
      <Provider store={fakeStore(
        {
          USER: {authorizationStatus: 'AUTH'},
        },
      )}
      >,
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/This is mock Favorites Screen/i)).toBeInTheDocument();
  });

  it('should render Auth-screen screen when navigate to "/favorites" with no authorization', () => {
    history.push(AppRoute.FAVORITES);

    render(
      <Provider store={fakeStore(fakeStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is mock Auth Screen')).toBeInTheDocument();
  });

  it('should render Main screen when navigate to "/login" with successful authorization', () => {
    history.push(AppRoute.ROOT);
    history.push(AppRoute.LOGIN);

    render(
      <Provider store={fakeStore(
        {
          USER: {authorizationStatus: 'AUTH'},
        },
      )}
      >,
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/This is mock Main Screen/i)).toBeInTheDocument();
  });

  it('should render 404 screen when navigate to "/404"', () => {
    history.push(AppRoute.NOT_FOUND || '/non-existent path');
    render(
      <Provider store={fakeStore(fakeStoreData)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is mock NotFound Screen')).toBeInTheDocument();
  });
});
