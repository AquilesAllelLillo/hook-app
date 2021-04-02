import React from "react";
import { useCounter } from "../../hooks/useCounter";

import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(5);
  return (
    <>
      <h1>Counter With Hook: {state}</h1>
      <hr />
      {/* <button onClick={increment} className="btn">
        +1
      </button>
      <button onClick={decrement} className="btn">
        -1
      </button> */}
      <button onClick={() => increment(2)} className="btn">
        +1
      </button>
      <button onClick={() => decrement(1)} className="btn">
        -1
      </button>
      <button onClick={reset} className="btn">
        reset
      </button>
    </>
  );
};
