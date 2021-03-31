import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {AuthInfoProps} from "../../types/auth-info-props";

const PageHeader = ({authorizationStatus, authInfo}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">

                <Link className="header__nav-link header__nav-link--profile"
                  to="/favorites">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.AUTH
                    ? <span className="header__user-name user__name">{authInfo.email}</span>
                    :
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authInfo: PropTypes.shape(AuthInfoProps)
};

const mapStateToProps = ({USER}) => {
  return {
    authorizationStatus: USER.authorizationStatus,
    authInfo: USER.authInfo,
  };
};

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
