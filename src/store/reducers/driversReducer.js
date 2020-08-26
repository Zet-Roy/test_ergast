import {types} from '../actions/driversAcrion';

const initialState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  total: 0,
  offset: 0,
  list_drivers: [],
};

const drivers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DRIVERS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.FETCH_DRIVERS_SUCCESS: {
      const {list, offset, total} = action.payload;
      return {
        ...state,
        isLoading: false,
        list_drivers: list,
        total,
        offset,
      };
    }
    case types.FETCH_MORE_DRIVERS: {
      return {
        ...state,
        isLoadingMore: true,
      };
    }
    case types.FETCH_MORE_DRIVERS_SUCCESS: {
      const {list, offset} = action.payload;
      return {
        ...state,
        isLoadingMore: false,
        list_drivers: [...state.list_drivers, ...list],
        offset,
      };
    }
    case types.FETCH_DRIVERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default drivers;
