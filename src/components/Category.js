import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
} from "../actions/category.action";
import Navigation from "../components/Navigation";
import CategoryForm from "./CategoryForm";
import { isEmpty } from "./Utils";

const Category = () => {
  const categories = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <>
      <Navigation />
      <div className="file">
        <div className="post-container">
          {!isEmpty(categories) &&
            categories.map((cat) => (
              <div>
                <p key={cat.id}>{cat.libelle}</p>
                <div className="edit-delete">
                  <img
                    src="./icons/delete.svg"
                    alt="delete"
                    onClick={() => {
                      dispatch(deleteCategory(cat.id));
                      dispatch(getCategories());
                    }}
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
        <CategoryForm input={input} />
      </div>
    </>
  );
};

export default Category;
