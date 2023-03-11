import React, { useEffect, useState } from "react";

function Example2() {
  let [colors, setColors] = useState([]);
  const handleColor = (e) => {
    setColors((c) => [...c, e.target.value]); //...c Means copying previous elements
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a color"
        onBlur={(event) => handleColor(event)}
      />

      {colors.map((c) => (
        <h1>{c}</h1>
      ))}
    </div>
  );
}

export default Example2;
