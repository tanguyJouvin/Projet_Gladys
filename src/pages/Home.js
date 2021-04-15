import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import File from "../components/File";
import FileForm from "../components/FileForm";
import User from "../components/User";
import Navigation from "../components/Navigation";

const Home = () => {
  const files = useSelector((state) => state.fileReducer);
  
  return (
    <div>
      <Navigation />
      <h1>Projet gladys</h1>
      <FileForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(files) &&
            files.map((file, index) => <File file={file} key={index} />)}
        </div>
        <User />
      </div>
    </div>
  );
};

export default Home;
