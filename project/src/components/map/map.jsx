import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from '../../hooks/use-map/use-map';
import offerProp from '../offers/offer-card/offer-card.prop';

const PinSize = {
  WIDTH: 30,
  HEIGHT: 30,
};

const PinUrl = {
  DEFAULT: 'img/pin.svg',
  ACTIVE: 'img/pin-active.svg',
};

const createPin = (pinUrl) => leaflet.icon({
  iconUrl: pinUrl,
  iconSize: [PinSize.WIDTH, PinSize.HEIGHT],
  iconAnchor: [PinSize.WIDTH, PinSize.HEIGHT],
});

function Map({offers, activeOffer, city}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach(({id, location}) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: id === activeOffer
              ? createPin(PinUrl.ACTIVE)
              : createPin(PinUrl.DEFAULT),
          })
          .addTo(map);
      });

    }
  }, [map, offers, activeOffer]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerProp),
  ).isRequired,
  activeOffer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  city: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Map;
