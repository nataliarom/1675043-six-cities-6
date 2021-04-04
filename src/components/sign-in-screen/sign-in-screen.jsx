import React, {useRef} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/user/api-action";
import PageHeader from "../page-header/page-header";
import {AppRoute, AuthorizationStatus} from "../../const";
import {ErrorType} from "../../types/error-type";


const SignInScreen = ({onSubmit, authorizationStatus, error}) => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (<Redirect to={AppRoute.ROOT} />);
  }

  return (
    <div className="page page--gray page--login">
      <PageHeader/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  type="email"
                  ref={emailRef}
                  id="email"
                  name="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required=""/>
              </div>
              <button className="login__submit form__submit button"
                type="submit">Sign in</button>
              {error ? <span style={{color: `red`}}>{error.message}</span> : ``}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


SignInScreen.propTypes = {
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.shape(ErrorType),
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  error: USER.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

