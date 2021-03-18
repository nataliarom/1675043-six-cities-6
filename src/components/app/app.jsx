import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in-screen/sign-in-screen';
import FavoritesPage from '../favorites-page/favorites-page';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={() =>(
            <Main/>)}
        />
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}
          render={()=><FavoritesPage favoriteOffers={[]} />}/>
        <Route exact path={AppRoute.OFFER}
          render = {({match})=>(
            Number(match.params.id) ? <Room id={Number(match.params.id)}/> : <PageNotFound />
          )}/>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

export default App;
