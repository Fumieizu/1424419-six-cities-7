import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from '../../hooks/use-map/use-map';
import offerProp from '../offers/offer-card/offer-card.prop';
import cityProp from '../city/city.prop';
import {CustomPin} from '../../const';


function Map({offers, activeOffer, city, currentOffer = null}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const defaultPin = leaflet.icon(CustomPin.DEFAULT);
  const activePin = leaflet.icon(CustomPin.ACTIVE);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      offers.forEach(({id, location}) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: id === activeOffer
              ? activePin
              : defaultPin,
          })
          .addTo(markers);
      });

      if (currentOffer !== null) {
        leaflet
          .marker({
            lat: currentOffer.location.latitude,
            lng: currentOffer.location.longitude,
          }, {
            icon: activePin,
          })
          .addTo(markers);
      }

      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
    }

    return () => {
      markers.clearLayers();
    };
  }, [map, offers, city, activeOffer]);


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
  currentOffer: PropTypes.shape(offerProp),
  activeOffer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  city:cityProp,
};

export default Map;
