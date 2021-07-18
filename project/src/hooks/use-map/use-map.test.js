import { renderHook } from '@testing-library/react-hooks';
import useMap from './use-map';

describe('Hook: useMap', () => {
  it('should return object', () => {
    const mapRef = null;
    const city = {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
      name: 'Amsterdam',
    };

    const { result } = renderHook(() => useMap(mapRef, city));

    expect(result).toBeInstanceOf(Object);
  });
});
