import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import City from './city';

const history = createMemoryHistory();
const name = 'Paris';


describe('Component: City', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <City
          isActive={false}
          name={name}
          onClick={() => {}}
        />
      </Router>,
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('locations__item-link tabs__item');
  });

  it('should render correctly with active city', () => {
    render(
      <Router history={history}>
        <City
          isActive
          name={name}
          onClick={() => {}}
        />
      </Router>,
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('tabs__item--active');
  });

  it('should switch when click to link', () => {
    history.push('/offer/1');
    const onClickHandler = jest.fn();
    render(
      <Router history={history}>
        <City
          isActive={false}
          name={name}
          onClick={onClickHandler}
        />
      </Router>,
    );

    userEvent.click(screen.getByRole('link'));
    expect(onClickHandler).toHaveBeenCalledWith(name);
  });
});
