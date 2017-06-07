import { combineReducers } from 'redux';
import { UPDATE_ROUTE } from './actions';

function routeReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_ROUTE:
      return action.route;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  route: routeReducer
});

export default rootReducer;
