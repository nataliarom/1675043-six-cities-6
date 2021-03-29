import React, {useEffect, useRef} from 'react';
import "leaflet/dist/leaflet.css";
import leaflet from 'leaflet';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CityProps} from "../../types/city-props";
import {OfferCardProps} from "../../types/offer-card-props";

const Map = ({className, currentCity, offers, activeOfferId}) => {

  const mapRef = useRef();
  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  const iconActive = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  });

  const coordinates = [currentCity.location.latitude, currentCity.location.longitude];
  const zoom = currentCity.location.zoom;


  const updateMap = () => {
    mapRef.current.setView(coordinates, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude],
            {icon: activeOfferId === offer.id ? iconActive : icon})
        .addTo(mapRef.current);
    });
  };

  useEffect(() => {

    mapRef.current = leaflet.map(`map`, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    updateMap();
  }, []);

  useEffect(() => {
    updateMap();
  }, [currentCity, offers, activeOfferId]);

  return (
    <section ref={mapRef} id="map" className={className + ` map`}/>
  );

};

const mapStateToProps = (state) => {
  return {
    currentCity: state.city,
    offers: state.offers,
    activeOfferId: state.activeOfferId
  };
};

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferCardProps)).isRequired,
  currentCity: PropTypes.shape(CityProps).isRequired,
  activeOfferId: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export {Map};
export default connect(mapStateToProps)(Map);

