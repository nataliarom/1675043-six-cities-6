export const UserActionType = {
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  AUTHORIZE: `user/authorize`,
  UNAUTHORIZE: `user/unauthorize`,
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
