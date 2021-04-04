

export const UserActionType = {
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  AUTHORIZE: `user/authorize`,
  UNAUTHORIZE: `user/unauthorize`,
  SET_LOGIN_ERROR: `user/showError`,
  SET_APPLICATION_ERROR: `app/showError`,

};

export const authorize = (authInfo) => ({
  type: UserActionType.AUTHORIZE,
  payload: authInfo,
});
export const unauthorize = () => ({
  type: UserActionType.UNAUTHORIZE,
});
export const redirectToRoute = (url) => ({
  type: UserActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
export const setLoginError = (error) => ({
  type: UserActionType.SET_LOGIN_ERROR,
  payload: error,
});
export const setApplicationError = (error) => ({
  type: UserActionType.SET_APPLICATION_ERROR,
  payload: error,
});
