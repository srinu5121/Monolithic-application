import {GET_PERSONS, ADD_PERSON, DELETE_PERSON} from '../actions/constants'

    const removeById = (state = [], id) => {
          const reminders = state.filter(reminder => reminder.id !== id);
          return reminders;
        }

  const reminders = (state = '', action) => {
          let reminders = null;
          switch(action.type){
            case GET_PERSONS:
            state = action.payload;
             return state;
            case ADD_PERSON:
            // console.log(action.payload, "payload")
              state = [...state, action.payload];
              return state;
            case DELETE_PERSON:
            // console.log("testing123", state)
              state = removeById(state, action.payload);
              return state;
            default:
              return state;
          }
        }

  export default reminders;
