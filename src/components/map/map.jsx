import React, {useEffect, useRef} from 'react';
import "leaflet/dist/leaflet.css";
import leaflet from 'leaflet';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CityType} from "../../types/city-type";
import {OfferType} from "../../types/offer-type";
import {getOffersFilteredByCity} from "../../store/hotel/selectors";

const MAP_PARAM = {
  URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

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

  useEffect(() => {

    mapRef.current = leaflet.map(`map`, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    updateMap();

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    mapRef.current.eachLayer((layer)=>{
      layer.remove();
    });

    updateMap();
  }, [offers]);

  useEffect(() => {
    updateMap();
  }, [currentCity, offers, activeOfferId]);

  const updateMap = () => {
    mapRef.current.setView(coordinates, zoom);

    leaflet
      .tileLayer(MAP_PARAM.URL, {
        attribution: MAP_PARAM.ATTRIBUTION
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude],
            {icon: activeOfferId === offer.id ? iconActive : icon})
        .addTo(mapRef.current);
    });
  };

  return (
    <section ref={mapRef} id="map" className={`${className} map`}/>
  );

};

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferType)).isRequired,
  currentCity: PropTypes.shape(CityType).isRequired,
  activeOfferId: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

const mapStateToProps = ({HOTEL}) => {
  return {
    currentCity: HOTEL.city,
    offers: getOffersFilteredByCity(HOTEL),
    activeOfferId: HOTEL.activeOfferId
  };
};

export {Map};
export default connect(mapStateToProps)(Map);

