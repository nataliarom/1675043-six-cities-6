import React, {useEffect, useRef} from 'react';
import "leaflet/dist/leaflet.css";
import leaflet from 'leaflet';
import {MapProps} from "../../types/map-props";
// import {connect} from "react-redux";

const Map = ({currentCity, points}) => {
  const mapRef = useRef();

  useEffect(()=> {
    const coordinates = [currentCity.location.latitude, currentCity.location.longitude];
    const zoom = currentCity.location.zoom;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    // const points = offers.map((v)=>[v.city.location.latitude, v.city.location.longitude]);
    mapRef.current = leaflet.map(`map`, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(coordinates, zoom);

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

// const mapStateToProps = (state) => {
//   return {
//     currentCity: state.city,
//     offers: state.offers
//   };
// };

Map.propTypes = MapProps;

export default Map;
// export default connect(mapStateToProps)(Map);
//
