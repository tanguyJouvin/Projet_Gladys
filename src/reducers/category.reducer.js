import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
} from "../actions/category.action";

const initialState = {};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case ADD_CATEGORY:
      return [action.payload, ...state];
    case EDIT_CATEGORY:
      return state.map((category) => {
        if (category.id === action.payload.id) {
          return {
            ...category,
            libelle: action.payload.libelle,
          };
        } else return category;
      });
    case DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload.postId);
    default:
      return state;
  }
}
