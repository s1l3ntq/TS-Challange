import { IUserActionModel, IUser } from '../model';
import { SEARCH_USER } from './ActionType';

const initalState: IUser[] = [];

const userReducers = (state = initalState, action: IUserActionModel) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_USER:
      return [...state, payload];
    default:
      return state;
  }
};
export default userReducers;