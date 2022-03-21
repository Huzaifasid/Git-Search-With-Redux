import React from "react";
import GitErr from "./errorImage/errorLogo.png";
const UserError = () => {
  return (
    <div >
      <img className="rounded img-fluid " src={GitErr} />
      <h1 className="text-center">USER NOT FOUND</h1>
    </div>
  );
};

export default UserError;
