import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFile, getFiles } from "../actions/file.action";
import { isEmpty } from "../components/Utils";

const FileForm = () => {
  const [libelle, setLibelle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const user = useSelector((state) => state.userReducer);
  const categories = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (libelle && description) {
      const data = {
        libelle,
        description,
        category,
        author: user[0].pseudo,
      };

      await dispatch(addFile(data));
      setLibelle("");
      setDescription("");
      dispatch(getFiles());
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Libellé de la fiche"
          value={libelle}
          onChange={(e) => setLibelle(e.target.value)}
        />
        <textarea
          placeholder="Ajoutez une description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select onChange={(e) => setCategory(e.target.value)}>
          {!isEmpty(categories) &&
            categories.map((cat) => (
              <option key={cat.id} value={cat.libelle}>
                {cat.libelle}
              </option>
            ))}
        </select>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default FileForm;
