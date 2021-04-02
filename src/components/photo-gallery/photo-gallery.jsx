import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getPhotosForOffer} from "../../store/hotel/selectors";

const PhotoGallery = ({images}) => {

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images && images.map((imageUrl)=>(
          <div key={`image-` + imageUrl} className="property__image-wrapper">
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
    images: getPhotosForOffer(HOTEL),
  };
};


export {PhotoGallery};
export default connect(mapStateToProps)(PhotoGallery);
