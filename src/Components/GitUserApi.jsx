
import React, { useRef, useState } from "react";
import Userprofile from "./Userprofile";

const GitUserApi = () => {
  const [inpVal, setInpVal] = useState("");

  const inpTag = useRef();

  // const [getApi, setGetApi] = useState("");

  // console.log(inpVal);
  // useEffect(async () => {
  // const api = await axios.get(`https://api.github.com/users/${apiCall}`);
  // console.log(api);

  // const data = api.data;
  // console.log(data);
  // setGetApi(data);

  // const {avatar_url,name,public_repos,html_url,followers,bio} = api.data
  // console.log(api.data);
  // console.log(followers);
  // }, [apiCall]);
  // const { avatar_url, name, public_repos, html_url, followers, bio } = getApi;
  //
  // console.log(data);
  const inpHandeler = (e) => {
    e.preventDefault();
    const searchValue = inpTag.current.value;
    setInpVal(searchValue);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Search Git Hub User Here</h1>
        <form onSubmit={inpHandeler} className="col-lg-5   m-auto d-flex">
          <input
            type="search"
            placeholder="🧒🏻 Search User Here..."
            className="form-control"
            
            ref={inpTag}
          />
          <button type="submit" className="btn btn-primary mx-1">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <Userprofile inpVal={inpVal}/>
      </div>
    </>
  );
};

export default GitUserApi;
