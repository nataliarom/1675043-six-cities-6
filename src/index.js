import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {HOTEL_OFFERS, HOTEL_OFFERS_COUNT} from './mocks/offers.js';


ReactDOM.render(
    <App
      offersCount={HOTEL_OFFERS_COUNT}
      offers={HOTEL_OFFERS}
    />,
    document.querySelector(`#root`)
);

