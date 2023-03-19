import React, { useEffect, userRef } from "react";

function HightChecker() {
  const divElementRef = userRef(null);

  useEffect(() => {
    console.log("the height is: ", divElementRef.current.offsetHeight);
  }, []);
  return <div ref={divElementRef}>HightChecker</div>;
}

export default HightChecker;
