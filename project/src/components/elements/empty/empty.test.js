import React from 'react';
import { render } from '@testing-library/react';
import Empty from './empty';

const city = 'Paris';

describe('Component: Empty', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Empty city={city} />);

    expect(getByText('No places to stay available')).toBeInTheDocument();
    expect(getByText(`We could not find any property available at the moment in ${city}`)).toBeInTheDocument();
  });
});
