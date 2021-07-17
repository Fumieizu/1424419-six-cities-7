import React from 'react';
import { render, screen } from '@testing-library/react';
import Review from './review';

const fakeReview = {
  id: 1,
  rating: 3,
  comment: 'test comment',
  date: '2019-05-08T14:13:56.569Z',
  user: {
    id: 1,
    isPro: false,
    name: 'test name',
    avatarUrl: 'img/test.png',
  },
};

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(<Review review={fakeReview} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', fakeReview.user.avatarUrl);
    expect(screen.getByText(fakeReview.user.name)).toBeInTheDocument();
  });
});
