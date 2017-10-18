import {
  FETCH_USER_ENTRIES_SUCCESS,
  FETCH_USER_ENTRIES_REQUEST,
  FETCH_USER_ENTRIES_ERROR
} from "../actions/getEntries";

const initialState = {
  userEntries: [],
  loading: false,
  error: null
};

const userEntries = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ENTRIES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case FETCH_USER_ENTRIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_ENTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userEntries: action.userEntries
      };
    default:
      return state;
  };
};

export default userEntries;
