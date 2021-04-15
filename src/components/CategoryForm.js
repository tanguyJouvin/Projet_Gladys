import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
} from "../actions/category.action";
import Navigation from "../components/Navigation";
import { isEmpty } from "./Utils";

function CategoryForm({ input }) {
  const dispatch = useDispatch();
  console.log("modif : " + input.libelle);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmpty(editText)) {
      if (!input.id) {
        console.log("par là", editText, " - ", input.libelle);
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
        {input.id}
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default CategoryForm;
