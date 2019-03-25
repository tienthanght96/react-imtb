import { fromJS } from 'immutable';
import { Actions } from "../interfaces/Actions";
import {homeConstants} from "./homeConstants";

export const initialState = fromJS({
  username: '',
});

export function homeReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case homeConstants.HOME_CHANGE_USERNAME: {
      return state.set('username', action.data.replace(/@/gi, ''));
    }
    default: {
      return state;
    }
  }
}