import {GET_PERSONS, ADD_PERSON, DELETE_PERSON} from './constants';

export const getCustomers = () => dispatch => {
  return fetch('/api/people').then(res => res.json()).then(resJSON => dispatch({type: GET_PERSONS, payload: resJSON}))

}
export const addData = (data) => dispatch => {
  console.log(data, "data")
  return fetch("./api/addData", {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json',
            },
            body:JSON.stringify(data),
        })
        .then((response) => {
            console.log("response",response);
          return response.json();
        }).then((responseJson) => {
          dispatch({type:GET_PERSONS, payload:responseJson});
        })
        .catch((error) => {
         console.log('error',error)
            throw new Error({message:'Something went wrong', response: error});
        })

}
export const DeletePerson = (data) => dispatch => {
  return  fetch("./api/DeletePerson/"+ data, {
            method: 'DELETE',
            headers: {
                 'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log("response",response);
          return response.json();
        })
        .then((responseJson) => {
          console.log(responseJson, "resJSON2")
            dispatch({type:GET_PERSONS, payload:responseJson})
        })
        .catch((error) => {
         console.log('error',error)
            throw new Error({message:'Something went wrong', response: error});
        })

}
