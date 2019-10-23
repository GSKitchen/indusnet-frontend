import userReducer from "./userReducer";
import { combineReducers } from "redux";

// this is root reducer. Add another sub reducer to this for better experience
const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
