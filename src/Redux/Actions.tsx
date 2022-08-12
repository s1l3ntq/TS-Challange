import { IUser } from '../model';
import { SEARCH_USER } from './ActionType';

export const searchUserAction = (user: IUser) => {
  return {
    type: SEARCH_USER,
    payload: user,
  };
};