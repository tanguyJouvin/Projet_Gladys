import axios from "axios";

export const GET_FILES = "GET_FILES";
export const ADD_FILE = "ADD_FILE";
export const EDIT_FILE = "EDIT_FILE";
export const DELETE_FILE = "DELETE_FILE";

export const getFiles = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/files?_sort=id&_order=desc")
      .then((res) => {
        dispatch({ type: GET_FILES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addFile = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/files", data)
      .then(() => {
        dispatch({ type: ADD_FILE, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const editFile = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/files/${data.id}`,
      data: { ...data },
    })
      .then(() => {
        dispatch({ type: EDIT_FILE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteFile = (dataId) => {
  return (dispatch) => {
    return axios
      .delete(`https://affectionate-benz-1c28a4.netlify.app/files/${dataId}`)
      .then(() => {
        dispatch({ type: DELETE_FILE, payload: { dataId } });
      })
      .catch((err) => console.log(err));
  };
};

