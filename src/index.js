import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {HOTEL_OFFERS, HOTEL_OFFERS_COUNT} from './mocks/offers.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        offersCount={HOTEL_OFFERS_COUNT}
        offers={HOTEL_OFFERS}
      />
    </Provider>,
    document.querySelector(`#root`)
);

