import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomGallery from './room-gallery';

describe('Component: RoomGallery', () => {
  it('should render correctly', () => {
    render(<RoomGallery images={['test.png']}/>);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'test.png');
  });
});
