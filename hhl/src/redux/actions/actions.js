import { 
  CHANGE_OPENID,
  CHANGE_TEST
 } from './actionsTypes.js';

 export function changeOpenid(id) {
  return {
    type: CHANGE_OPENID,
    openID: id
  }
}

export function changeTest(index, text, completed) {
  return {
    type: CHANGE_TEST,
    index: index,
    text: text,
    completed: completed
  }
}
