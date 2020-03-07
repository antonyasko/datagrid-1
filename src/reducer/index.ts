import sort from '../utils/sorting-utils';
import {
  filterColumn, filterAll, filterBool, filterEnum,
} from '../utils/filter-utils';
import { StateModel } from './types';
import { Actions } from '../actions/types';

const initialState: StateModel = {
  usersData: [],
  usersDataProcessed: [],
  sortingColumns: null,
  currentBool: 'All',
  currentEnum: [],
};

const reducer = (
  state: StateModel = initialState,
  action: Actions,
): StateModel => {
  switch (action.type) {
    case 'LOAD_USERS_DATA_REQUEST':
      return {
        ...state,
      };
    case 'LOAD_USERS_DATA_SUCCESS':
      return {
        ...state,
        usersData: action.payload,
        usersDataProcessed: action.payload,
      };
    case 'SORT_BY_COLUMN':
      return {
        ...state,
        sortingColumns: action.payload,
        usersDataProcessed: sort(state.usersData, action.payload),
      };
    case 'FILTER_BY_COLUMN':
      return {
        ...state,
        usersDataProcessed: filterColumn(state.usersData, action.payload),
      };
    case 'FILTER_BY_ALL':
      return {
        ...state,
        usersDataProcessed: filterAll(state.usersData, action.payload),
      };
    case 'UPDATE_CURRENT_BOOL':
      return {
        ...state,
        currentBool: action.payload,
        usersDataProcessed: filterBool(state.usersData, action.payload),
      };
    case 'UPDATE_CURRENT_ENUM':
      return {
        ...state,
        currentEnum: [action.payload],
        usersDataProcessed: filterEnum(state.usersData, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
