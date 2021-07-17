import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CityList from './city-list';

const mockStore = configureStore();
const history = createMemoryHistory();
const cities = [
  {name: 'Paris'},
  {name: 'Cologne'},
  {name: 'Brussels'},
  {name: 'Amsterdam'},
  {name: 'Hamburg'},
  {name: 'Dusseldorf'},
];
const storeFakeData = {
  PROCESS: {
    city: 'Paris',
    cities,
  },
};

describe('Component: CityList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <CityList />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('link').length).toBe(cities.length);
  });
});
