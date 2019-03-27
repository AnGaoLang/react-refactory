import State from '../state/state';
import { CHANGE_OPENID, CHANGE_TEST } from '../action/actionTypes';

function toDo(state=State, action) {
  switch (action.type) {
    case CHANGE_OPENID:
      return action.openId
    case CHANGE_TEST:
      let stateTest = state.test;
      let actionTest = action.test;
      let actionIndex = action.index;
      stateTest.
      return Object.assign({})
    default:
      return state
  }
}

export default toDo