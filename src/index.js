import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {checkAuth} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import rootReducer from './store/root-reducer';

const api = createAPI(
    () => store.dispatch(ActionCreator.unauthorize())
);


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

