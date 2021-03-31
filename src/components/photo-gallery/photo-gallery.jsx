import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

const PhotoGallery = ({images}) => {

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images && images.map((imageUrl)=>(
          <div key={imageUrl} className="property__image-wrapper">
            <img className="property__image" src={imageUrl} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
};

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
};


const mapStateToProps = ({HOTEL}) => {
  return {
    images: HOTEL.openedOffer.images.slice(0, 6),
  };
};


export {PhotoGallery};
export default connect(mapStateToProps)(PhotoGallery);
