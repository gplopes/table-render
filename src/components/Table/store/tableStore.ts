import { createStore } from "redux";

import { TableType } from "../types";
import { searchRow } from './searchRow';

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
  payload,
  type: ADD_TABLE,
});

export const removeItem = (payload: string): Payload => ({
  payload,
  type: REMOVE_ITEM,
});

///////////////////////////////////////// Functions

const tableReducer = (state: object = {}, action: Payload) => {
  switch (action.type) {
    case ADD_TABLE:
      return typeof action.payload === 'object' ? { ...state, ...action.payload } : [];
    case REMOVE_ITEM:
      return typeof action.payload === 'string' ? searchRow(state, action.payload) : [];
    default:
      return state;
  }
};

export default createStore(tableReducer);
