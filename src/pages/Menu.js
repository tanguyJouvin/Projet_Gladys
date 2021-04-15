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

const Menu = ({ category }) => {
  const categories = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      libelle: input,
    };
    dispatch(addCategory(data));
    setEditToggle(false);
    setInput('');
  };

   const handleEdit = (e, index) => {
    e.preventDefault();

    const data = {
      libelle: input,
      id: index
    };
    console.log(data);
    dispatch(editCategory(data));
    setEditToggle(false);
  }; 
  return (
    <>
      <Navigation />
      <div className="file">
        <div className="post-container">
          {!isEmpty(categories) &&
            categories.map((cat, index) => (
              <div>
                
                  <p>
                  {index} - {cat.libelle}
                </p>
               
        

                <div className="edit-delete">
                  <img
                    src="./icons/delete.svg"
                    alt="delete"
                    onClick={() => dispatch(deleteCategory(cat.id))}
                  />
                  <img
                    src="./icons/edit.svg"
                    alt="edit"
                    onClick={() => setInput(cat)}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              defaultValue={input.libelle}
              placeholder="Ajouter une nouvelle catégorie"
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Menu;
