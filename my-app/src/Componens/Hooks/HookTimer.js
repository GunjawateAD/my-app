import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalref = useRef(null);
  useEffect(() => {
    intervalref.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalref.current);
    };
  });
  return (
    <>
      <div>HookTimer-{timer}</div>
      <button
        ref={intervalref}
        onClick={() => clearInterval(intervalref.current)}
      >
        Stop Timer
      </button>
    </>
  );
}

export default HookTimer;
