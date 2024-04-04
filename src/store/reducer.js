import { combineReducers } from 'redux';

const skillsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [...state, action.payload];
    case 'DELETE_SKILL':
      return state.filter(skill => skill !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  skills: skillsReducer,
});

export default rootReducer;