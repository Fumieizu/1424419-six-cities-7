import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewList from './review-list';

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

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    render(<ReviewList reviews={[fakeReview]}/>);

    expect(screen.getByRole('list')).toHaveClass('reviews__list');
    expect(screen.getByText(fakeReview.comment)).toBeInTheDocument();
  });
});
