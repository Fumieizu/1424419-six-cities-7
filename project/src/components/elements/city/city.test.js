import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import City from './city';

const mockStore = configureStore();
const history = createMemoryHistory();
const storeFakeData = {
  PROCESS: {
    city:'Paris',
  },
};

describe('Component: City', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <City
            isActive={false}
            name={'Paris'}
            onClick={() => {}}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('locations__item-link tabs__item');
  });

  it('should render correctly with active city', () => {
    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <City
            isActive
            name={'Paris'}
            onClick={() => {}}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('tabs__item--active');
  });

  it('should switch when click to link', () => {
    history.push('/offer/1');
    const onClickHandler = jest.fn();
    const name = 'Paris';
    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <City
            isActive={false}
            name={'Paris'}
            onClick={onClickHandler}
          />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByRole('link'));
    expect(onClickHandler).toHaveBeenCalledWith(name);
  });
});
