import React, {useEffect, useRef} from 'react';
import "leaflet/dist/leaflet.css";
import leaflet from 'leaflet';
import PropTypes from "prop-types";

const Map = ({city, points}) => {
  const mapRef = useRef();

  useEffect(()=> {
    const zoom = city.zoom;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    mapRef.current = leaflet.map(`map`, {
      center: city.coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(city.coordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point)=> {
      leaflet
        .marker(point, {icon})
        .addTo(mapRef.current);
    });
  });

  return (
    <section ref={mapRef} id="map" className="cities__map map"/>
  );

};

Map.propTypes = {
  city: PropTypes.shape({
    coordinates: PropTypes.array,
    zoom: PropTypes.number.isRequired
  }),
  points: PropTypes.arrayOf(PropTypes.array)
};
export default Map;
