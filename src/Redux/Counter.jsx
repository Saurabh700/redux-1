import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "./action";

const Counter = () => {
  const ginti = useSelector((store) => store);
  console.log(ginti);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Counter: {ginti.count}</div>
      <button onClick={() => dispatch(decrementCount())}>-</button>
      <button onClick={() => dispatch(incrementCount())}>+</button>
    </div>
  );
};

export default Counter;
