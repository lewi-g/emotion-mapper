export const FETCH_USER_ENTRIES_SUCCESS = 'FETCH_USER_ENTRIES_SUCCESS';
export const fetchUserEntriesSuccess = userEntries => ({
  type: FETCH_USER_ENTRIES_SUCCESS,
  userEntries
});

export const FETCH_USER_ENTRIES_REQUEST = 'FETCH_USER_ENTRIES_REQUEST';
export const fetchUserEntriesRequest = () => ({
  type: FETCH_USER_ENTRIES_REQUEST
});

export const FETCH_USER_ENTRIES_ERROR = 'FETCH_USER_ENTRIES_ERROR';
export const fetchUserEntriesError = message => ({
  type: FETCH_USER_ENTRIES_ERROR,
  message
});

export const fetchUserEntries = () => dispatch =>{
  console.log('UserEntries being fetched');
    dispatch(fetchUserEntriesRequest());
  fetch('/api/userEntries', {
    method: 'GET',
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json();
  })
  .then(userEntries => {
    dispatch(fetchUserEntriesSuccess(userEntries))
    console.log(userEntries)
  })
  .catch(error => dispatch(fetchUserEntriesError(error.message)))
};
