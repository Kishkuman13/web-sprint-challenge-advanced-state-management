import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const ADD_SMURF = 'ADD_SMURF'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS })
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
      dispatch({
        type: ERROR_MESSAGE,
        payload: ''
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({ 
        type: FETCH_FAILURE,
        payload: err.message
      })
    })
}

export const addSmurf = (smurf) => {
  return {
    type: ADD_SMURF,
    payload: smurf
  }
}

export const errorMessage = (error) => {
  return {
    type: ERROR_MESSAGE,
    payload: error
  }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.