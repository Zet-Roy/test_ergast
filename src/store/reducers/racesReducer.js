import {types} from '../actions/raceAction';

const initialState = {
  isLoadingMore: false,
  isLoading: false,
  offset: 0,
  total: 0,
  list_race: [],
  error: null,
};

const races = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RACE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.FETCH_RACE_SUCCESS: {
      const {list, offset, total} = action.payload;
      return {
        ...state,
        isLoading: false,
        list_race: list,
        total,
        offset,
      };
    }
    case types.FETCH_MORE_RACE: {
      return {
        ...state,
        isLoadingMore: true,
      };
    }
    case types.FETCH_MORE_RACE_SUCCESS: {
      const {list, offset} = action.payload;
      return {
        ...state,
        isLoadingMore: false,
        list_race: [...state.list_race, ...list],
        offset,
      };
    }
    case types.FETCH_RACE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case types.CLEAR_RACE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default races;
