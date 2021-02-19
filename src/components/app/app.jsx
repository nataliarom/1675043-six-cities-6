import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes, {arrayOf} from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesPage from '../favorites-page/favorites-page';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';
import {OfferProps} from "../../types/offer-props";


const App = ({offersCount, offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offersCount={offersCount} offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage favoriteOffers={offers}/>
        </Route>
        <Route exact path="/offer/:id"
          render = {({match})=>(
            Number(match.params.id) ? <Room id={Number(match.params.id)}/> : <PageNotFound />
          )
          }
        />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: arrayOf(OfferProps.isRequired)
};
export default App;
