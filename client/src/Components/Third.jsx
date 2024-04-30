import React from "react";

const Third = ({ data, setData }) => {
  return (
    <>
      <label>Address</label>
      <input
        type="text"
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />
    </>
  );
};

export default Third;
