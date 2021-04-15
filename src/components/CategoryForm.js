import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCategories,
  addCategory,
  editCategory,
} from "../actions/category.action";
import { isEmpty } from "./Utils";

function CategoryForm({ input }) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmpty(editText)) {
      if (!input.id) {
        dispatch(addCategory({ libelle: editText }));
        setEditText("");
        dispatch(getCategories());
      } else {
        dispatch(editCategory({ libelle: editText, id: input.id }));
        setEditText("");
        dispatch(getCategories());
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          defaultValue={input.libelle}
          placeholder="Ajouter une nouvelle catégorie"
          onChange={(e) => setEditText(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default CategoryForm;
