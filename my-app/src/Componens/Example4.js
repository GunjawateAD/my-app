import React, { useState } from "react";

function Example4() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const printValues = (e) => {
    e.preventDefault();
    console.log(userData.name, userData.email, userData.password);
  };

  const updateData = (e) => {
    //e.target.name is the key in object which comes from input feild
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={printValues}>
        <label>
          Username
          <input
            value={userData.name}
            name="name"
            onChange={(event) => updateData(event)}
          />
        </label>
        <br></br>
        <label>
          Email
          <input
            value={userData.email}
            name="email"
            onChange={(event) => updateData(event)}
          />
        </label>
        <br></br>
        <label>
          password
          <input
            value={userData.password}
            name="password"
            onChange={(event) => updateData(event)}
          />
        </label>
        <br></br>
        <button>Submit</button>
      </form>

      <h1>User info</h1>
      <h2>{userData.name}</h2>
      <h2>{userData.email}</h2>
      <h2>{userData.password}</h2>
    </div>
  );
}

export default Example4;
