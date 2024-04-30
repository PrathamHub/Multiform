import React from "react";

const First = ({ data, setData }) => {
  return (
    <>
      <label>Name</label>
      <input
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <label>UserName</label>
      <input
        type="text"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
    </>
  );
};

export default First;
