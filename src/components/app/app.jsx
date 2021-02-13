import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';


const App = ({placesCount, places}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} places={places} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id"
          render = {({match})=>(
            <Room id={match.params.id}/>)
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
  placesCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};
export default App;
