import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./Category";
import { isEmpty } from "./Utils";
import { editFile, deleteFile } from "../actions/file.action";

const File = ({ file }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);
  const [description, setDescription] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      libelle: file.libelle,
      description,
      author: user[0].pseudo,
      category: file.category,
      id: file.id,
    };
    dispatch(editFile(data));
    setEditToggle(false);
  };
  return (
    <div className="file">
      {!isEmpty(user[0]) && user[0].pseudo === file.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)}
          />
          <img
            src="./icons/delete.svg"
            alt="delete"
            onClick={() => dispatch(deleteFile(file.id))}
          />
        </div>
      )}
      <h2>{file.libelle}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="file-img"
        alt="img-file"
      />
      {/* condition pour éditer description */}
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            defaultValue={file.description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input type="submit" value="modifier" />
        </form>
      ) : (
        <p>{file.description}</p>
      )}

      <div className="author">
        <h5>{file.author}</h5>
        <h4>{file.category}</h4>
       {/*  <Category file={file} /> */}
      </div>
    </div>
  );
};

export default File;
