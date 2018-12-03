import { createStore } from "redux";

import { searchDeepRow } from './searchRow';
import { TableType } from "../types";

//////////////////////////////////////// Types

const ADD_TABLE = "ADD_TABLE";
const REMOVE_ITEM = "REMOVE_ITEM";

///////////////////////////////////////// Functions

type Payload = {
  type: string;
  payload: object | object[] | string;
};

///////////////////////////////////////////////////////////////

export const registerTable = (payload: TableType): Payload => ({
  type: ADD_TABLE,
  payload
});

export const removeItem = (payload: string): Payload => ({
  type: REMOVE_ITEM,
  payload
});

///////////////////////////////////////// Functions

const tableReducer = (state: object = {}, action: Payload) => {
  switch (action.type) {
    case ADD_TABLE:
      return typeof action.payload === 'object' ? { ...state, ...action.payload } : [];
    case REMOVE_ITEM:
      typeof action.payload === 'string' && searchDeepRow(state, action.payload);
      return state;
    default:
      return state;
  }
};

export default createStore(tableReducer);
