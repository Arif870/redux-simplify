import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dicrement, increment } from "../../redux/counterReducer/actionType";
import store from "../../redux/store";

const Counter = () => {
  const { counter } = useSelector(store => store);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid gray",
        padding: "10px",
        width: "300px",
        margin: "20px auto",
        borderRadius: "5px",
      }}
    >
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(dicrement())}>-</button>
    </div>
  );
};

export default Counter;
