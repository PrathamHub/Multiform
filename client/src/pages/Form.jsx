import React, { useState } from "react";
import First from "../Components/First";
import Second from "../Components/Second";
import Third from "../Components/Third";
import axios from "axios";
const Form = () => {
  const [page, setpage] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    dob: "",
    gender: "",
  });
  const registerUser = async (e) => {
    const { name, email, username, gender, dob, phone, address } = data;
    e.preventDefault();
    try {
      await axios.post("/api/data", {
        name,
        email,
        username,
        gender,
        dob,
        phone,
        address,
      });
      alert("registration Successfull");
    } catch (error) {
      console.log(error);
      console.log("Registration Unsuccessfull");
    }
  };
  const titles = ["First Page", "Second Page", "Third Page"];
  const showPage = () => {
    if (page == 0) {
      return <First data={data} setData={setData} />;
    } else if (page == 1) {
      return <Second data={data} setData={setData} />;
    } else {
      return <Third data={data} setData={setData} />;
    }
  };
  return (
    <>
      <h1>{titles[page]}</h1>
      <div>{showPage()}</div>
      <button
        onClick={(e) => {
          if (page == titles.length - 1) {
            alert("Registration done");
            registerUser(e);
            console.log(e);
          } else {
            setpage((curr) => curr + 1);
          }
        }}
      >
        {page == titles.length - 1 ? "Submit" : "Next"}
      </button>
    </>
  );
};

export default Form;
