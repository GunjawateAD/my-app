import React, { useEffect, useState } from "react";
import axios from "axios";
function HExample1() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //data fetch
    console.log("studing use effect");
  }, [count]); //dependency of count is passed so useEffect will be called when count changes
  useEffect(() => {
    axios.get("https://dummyjson.com/carts").then((response) => {
      setCart(response.data.carts);
    });
  }, []); //no dependency

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click Here</button>

      {cart?.map((element) => {
        return (
          <>
            <h1 key={element.id}>{element.id}</h1>
            {element.products.map((eachProduct) => {
              return <h2 key={eachProduct.id}>{eachProduct.title}</h2>;
            })}
          </>
        );
      })}
    </div>
  );
}

export default HExample1;
