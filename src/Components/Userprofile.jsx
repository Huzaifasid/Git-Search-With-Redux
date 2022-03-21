import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGet } from "../store/actions";
import UserError from "./UserError";
import UserGit from "./UserGit";
const Userprofile = ({ inpVal }) => {
  const { userData, userDataLoading, userDataError } = useSelector(
    (state) => state.gitUserReducer
  );

  // console.log(userDataError, "userDataError");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGet(inpVal));
  }, [inpVal]);
  // console.log(userData);
  const { avatar_url, name, public_repos, html_url, followers, bio } = userData;
  return (
    <>
      <div className="col-lg-4 col-md-7 m-auto mt-5 border">
        {userDataLoading ? (
          <h1>Loading</h1>
        ) : userDataError ? (
          <UserError />
        ) : (
          <UserGit
            avatar_url={avatar_url}
            name={name}
            public_repos={public_repos}
            html_url={html_url}
            followers={followers}
            bio={bio}
          />
        )}
      </div>
    </>
  );
};

export default Userprofile;
