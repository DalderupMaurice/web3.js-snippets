import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function exampleReducer(state = initialState.items, action) {
  switch(action.type) {
    case types.ADD_ITEM_SUCCESS:
      return [...state, Object.assign({}, action.item) ];
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}