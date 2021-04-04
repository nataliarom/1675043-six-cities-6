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
import ErrorScreen from "../error-screen/error-screen";
import PropTypes from "prop-types";
import {ErrorType} from "../../types/error-type";
import {connect} from "react-redux";

const App = ({applicationError}) => {

  if (applicationError) {
    return (<ErrorScreen error={applicationError} />);
  }

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
          render={()=><FavoritesPage />}/>
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

App.propTypes = {
  applicationError: PropTypes.shape(ErrorType),
};
const mapStateToProps = ({USER}) => ({
  applicationError: USER.appError,
});
export {App};
export default connect(mapStateToProps)(App);

