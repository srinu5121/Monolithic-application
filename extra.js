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
      })
      .then((responseJson) => {
        console.log('responseJson',responseJson)
          return responseJson;
      })
      .catch((error) => {
       console.log('error',error)
          throw new Error({message:'Something went wrong', response: error});
      })

      return fetch('/api/customers')
        .then(res => res.json())
        .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))


        import { GET_PERSONS, DELETE_PERSON, ADD_PERSON } from '../constants';


        const removeById = (state = [], id) => {
          const reminders = state.filter(reminder => reminder.id !== id);
          return reminders;
        }

        const reminders = (state = [{name:"srinivas", id:225}], action) => {
          let reminders = null;
          switch(action.type){
            case GET_PERSONS:
             return state;
            case ADD_REMINDER:
              reminders = [...state, payload)];
              return reminders;
            case DELETE_REMINDER:
              reminders = removeById(state, payload.id);
              return reminders;
            default:
              return state;
          }
        }

        export default reminders;
import {GET_PERSONS, ADD_PERSON, DELETE_PERSON} from '../actions/constants'
