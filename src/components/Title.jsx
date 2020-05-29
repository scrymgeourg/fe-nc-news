import React from "react";

const Title = ({ user: { username, avatar_url, name } }) => {
  return (
    <header className="title">
      <h1 className="title--header">ncNEWS</h1>

      <section className="title--user">
        <h4 className="title--user--item">{username}</h4>
        <img
          src={avatar_url}
          alt="User avatar"
          className="title--user--item"
          id="nav-avatar"
        />
      </section>
    </header>
  );
};

export default Title;
