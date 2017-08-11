import {POST_USER_ENTRY_REQUEST,
POST_USER_ENTRY_SUCCESS,
POST_USER_ENTRY_ERROR} from '../actions/postEntry'


const initialState = {
  userEntries: [],
  loading: false,
  error: null,
  showForm: true
}

const postEntry = (state = initialState, action) => {
  if (action.type === POST_USER_ENTRY_REQUEST) {
    return ({
      ...state,
      loading: true
    })
  }
  else if (action.type === POST_USER_ENTRY_SUCCESS) {
    return ({
      userEntries: [...state.userEntries, action.userEntry],
      loading: false,
      error: null,
      showForm: false
    })
  }
  else if (action.type === POST_USER_ENTRY_ERROR) {
    return ({
      loading: false,
      error: action.message
    })
  }
  return state
}

export default postEntry;
