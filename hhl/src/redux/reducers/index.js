import State from '../state/state';
import { CHANGE_OPENID, CHANGE_TEST } from '../action/actionTypes';

function toDo(state=State, action) {
  switch (action.type) {
    case CHANGE_OPENID:
      return action.openId
    case CHANGE_TEST:
      const newTest = state.test.map(function (item, index) {
        if (index == action.index) {
          return {
            test: action.test,
            completed: action.completed
          };
        }
      })
      return Object.assign({}, state, {test: newTest})
    default:
      return state
  }
}

export default toDo