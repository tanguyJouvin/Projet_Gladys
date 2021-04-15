import { combineReducers } from "redux";
import fileReducer from "./file.reducer";
import userReducer from './user.reducer';
import categoryReducer from "./category.reducer";


export default combineReducers({
  fileReducer,
  userReducer,
  categoryReducer
});