import axios from "axios";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const getCategories = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/categories?_sort=libelle&_order=asc")
      .then((res) => {
        dispatch({ type: GET_CATEGORIES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addCategory = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/categories", data)
      .then(() => {
        dispatch({ type: ADD_CATEGORY, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const editCategory = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/categories/${data.id}`,
      data: { ...data },
    })
      .then(() => {
        dispatch({ type: EDIT_CATEGORY, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCategory = (dataId) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3000/categories/${dataId}`)
      .then(() => {
        dispatch({ type: DELETE_CATEGORY, payload: { dataId } });
      })
      .catch((err) => console.log(err));
  };
};
