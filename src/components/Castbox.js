import React from "react";
import "../css/castbox.css";
function Castbox({ profile_path, original_name, character }) {
  console.log(profile_path);
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card text-center  mb-3">
      <div className="card-body ">
        <img className="card-img-top" src={API_IMG + profile_path} alt="" />
        <div className="card-body">
          <p>name:{original_name}</p>
          <p>character:{character}</p>
        </div>
      </div>
    </div>
  );
}

export default Castbox;
