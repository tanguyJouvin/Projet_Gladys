import {
  ADD_FILE,
  GET_FILES,
  EDIT_FILE,
  DELETE_FILE,
} from "../actions/file.action";

const initialState = {};

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILES:
      return action.payload;
    case ADD_FILE:
      return [action.payload, ...state];
    case EDIT_FILE:
      return state.map((file) => {
        if (file.id === action.payload.id) {
          return {
            ...file,
            description: action.payload.description,
          };
        } else return file;
      });
    case DELETE_FILE:
      return state.filter((file) => file.id !== action.payload.postId);
    default:
      return state;
  }
}
