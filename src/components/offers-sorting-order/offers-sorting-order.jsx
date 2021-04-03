import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {OffersOrder} from "../../const";
import {setOffersOrder} from "../../store/hotel/action";

const OffersSortingOrder = ({offersOrder, onOrderSelect}) => {
  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const orderOptions = [OffersOrder.POPULAR, OffersOrder.LOW_TO_HIGH, OffersOrder.HIGH_TO_LOW, OffersOrder.TOP_RATED];

  const handleDropdownClick = (evt) => {
    evt.preventDefault();
    setDropdownOpened(!isDropdownOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={handleDropdownClick}>
        {offersOrder}
        <svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"/></svg></span>
      { isDropdownOpened ?
        <ul className="places__options places__options--custom places__options--opened">
          {
            orderOptions.map((orderOption) => (
              <li className="places__option places__option--active"
                key={`order-${orderOption}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  setDropdownOpened(false);
                  onOrderSelect(orderOption);
                }}
                tabIndex="0">{orderOption}</li>
            ))
          }
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
    dispatch(setOffersOrder(newSortingOrder));
  },
});

export {OffersSortingOrder};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSortingOrder);


