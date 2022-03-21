import React from 'react'

const UserGit = ({ avatar_url, name, public_repos, html_url, followers, bio}) => {
  return (
    <>
      <img className="rounded img-fluid " src={avatar_url} alt="avatar_url" />
        <div className="mt-2">
          <p className="form-control">Name: {name}</p>
          <p className="form-control">Bio: {bio}</p>
          <p className="form-control">Repo: {public_repos}</p>
          <p className="form-control">Followers: {followers}</p>
          <p className="form-control">
            Url:
            <a className="px-2" target={"_blank"} href={`${html_url}`}>
              Get Profile
            </a>
          </p>
        </div>
    </>
  )
}

export default UserGit
