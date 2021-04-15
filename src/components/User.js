import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  const user = useSelector((state) => state.userReducer);
  
  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user) && user[0].pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
      </div>
    </div>
  );
};

export default User;
