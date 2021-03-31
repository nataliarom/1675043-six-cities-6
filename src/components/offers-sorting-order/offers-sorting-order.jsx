import React, {useState} from 'react';
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {OffersOrder} from "../../const";

const OffersSortingOrder = ({offersOrder, onOrderSelect}) => {

  const [isDropdownOpened, setDropdownOpened] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={(evt) => {
          evt.preventDefault();
          setDropdownOpened(!isDropdownOpened);
        }}>
        {offersOrder}
        <svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"/></svg></span>
      { isDropdownOpened ?
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active"
            onClick={(evt) => {
              evt.preventDefault();
              setDropdownOpened(false);
              onOrderSelect(OffersOrder.POPULAR);
            }}
            tabIndex="0">{OffersOrder.POPULAR}</li>
          <li className="places__option"
            onClick={(evt) => {
              evt.preventDefault();
              setDropdownOpened(false);
              onOrderSelect(OffersOrder.LOW_TO_HIGH);
            }}
            tabIndex="0">{OffersOrder.LOW_TO_HIGH}</li>
          <li className="places__option"
            onClick={(evt) => {
              evt.preventDefault();
              setDropdownOpened(false);
              onOrderSelect(OffersOrder.HIGH_TO_LOW);
            }}
            tabIndex="0">{OffersOrder.HIGH_TO_LOW}</li>
          <li className="places__option"
            onClick={(evt) => {
              evt.preventDefault();
              setDropdownOpened(false);
              onOrderSelect(OffersOrder.TOP_RATED);
            }}
            tabIndex="0">{OffersOrder.TOP_RATED}</li>
        </ul> : ``}
    </form>
  );
};

OffersSortingOrder.propTypes = {
  offersOrder: PropTypes.string.isRequired,
  onOrderSelect: PropTypes.func.isRequired
};

const mapStateToProps = ({HOTEL}) => {
  return {
    offersOrder: HOTEL.offersOrder,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onOrderSelect(newSortingOrder) {
    dispatch(ActionCreator.setOffersOrder(newSortingOrder));
  },
});


export {OffersSortingOrder};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSortingOrder);


