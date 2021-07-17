import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomRatingElement from './room-rating-element';

describe('Component: RoomRatingElement', () => {
  it('should render correctly', () => {
    render(
      <RoomRatingElement
        title={'perfect'}
        rating={'5'}
        value={'5'}
        isDisabled={false}
        onChangeHandler={() => {}}
      />,
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
});
