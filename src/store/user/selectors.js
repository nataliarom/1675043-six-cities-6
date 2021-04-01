import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAuthorizationInfo = (state) => state[NameSpace.USER].authInfo;
