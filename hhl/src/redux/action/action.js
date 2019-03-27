import { 
  CHANGE_OPENID,
  CHANGE_TEST
 } from './actionTypes.js';

function changeOpenid(id) {
  return {
    type: CHANGE_OPENID,
    openId: id
  }
}

function changeTest(index, text, completed) {
  return {
    type: CHANGE_TEST,
    index: index,
    text: text,
    completed: completed
  }
}

export default reducer