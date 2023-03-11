import React, {useState} from "react";

function Example3() {
  const [inputarr, setInputArr] = useState([])
  const [inputdata, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  })

  function changehandle(e) {
    //e.target.name is the key in object which comes from input feild
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { name, email, password } = inputdata;
  function printValues(e) {
    e.preventDefault();
    setInputArr([...inputarr, { name, email, password }]);
    console.log(inputarr);
    console.log(inputdata);
    setInputData({ name: "", email: "", password: "" });
  }

  return (
    <div>
      <form onSubmit={printValues}>
        <label>
          Username
          <input
            value={inputdata.name}
            name="name"
            onChange={(event) => changehandle(event)}
          />
        </label>
        <br></br>
        <label>
          Email
          <input
            value={inputdata.email}
            name="email"
            onChange={(event) => changehandle(event)}
          />
        </label>
        <br></br>
        <label>
          password
          <input
            value={inputdata.password}
            name="password"
            onChange={(event) => changehandle(event)}
          />
        </label>
        <br></br>
        <button>Submit</button>
      </form>

      {inputarr.map((info, ind) => {
        return (
          <>
            <tr>key={ind}</tr>
            <h1>{info.name}</h1>
            <h2>{info.email}</h2>
            <h1>{info.password}</h1>
          </>
        );
      })}
    </div>
  );
}

export default Example3;
