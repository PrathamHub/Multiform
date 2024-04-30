import React from "react";

const Second = ({ data, setData }) => {
  return (
    <>
      <>
        <label>Phone</label>
        <input
          type="Number"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        <label>dob</label>
        <input
          type="String"
          onChange={(e) => setData({ ...data, dob: e.target.value })}
        />
        <label>Gender</label>
        <div>
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              name="male"
              checked={data.gender == "male"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="female"
              name="female"
              checked={data.gender == "female"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              value="other"
              name="other"
              checked={data.gender == "other"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="other">Others</label>
          </div>
        </div>
      </>
    </>
  );
};

export default Second;
