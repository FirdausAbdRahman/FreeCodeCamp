// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD'

//action creator
function addMessage(msg){
  return {
    type: ADD,
    message: msg
  }
}

//reducer
const messageReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD':
    return [...state, action.message];
    default:
    return state;
  }
}
//store
const store = Redux.createStore(messageReducer);
