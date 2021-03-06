export const POST_USER_ENTRY_REQUEST = 'POST_USER_ENTRY_REQUEST';
const postUserEntryRequest = () => ({
  type: POST_USER_ENTRY_REQUEST
});

export const POST_USER_ENTRY_SUCCESS = 'POST_USER_ENTRY_SUCCESS';
const postUserEntrySuccess= (userEntry) => ({
  type: POST_USER_ENTRY_SUCCESS,
  userEntry
});

export const POST_USER_ENTRY_ERROR = 'POST_USER_ENTRY_ERROR';
const postUserEntryError = (message) => ({
  type: POST_USER_ENTRY_ERROR,
  message
});

export const postUserEntry = (inputBody, inputsomething) => {
  const url = '/api/userEntries'
  return (dispatch) => {
    dispatch(postUserEntryRequest())
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: 'startledJoe',
        comment: inputBody.value,
        emotion: inputsomething.value
      }),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(userEntries => dispatch(postUserEntrySuccess(inputBody.value)))
    .catch(err => dispatch(postUserEntryError(err.message)))
  }
}
