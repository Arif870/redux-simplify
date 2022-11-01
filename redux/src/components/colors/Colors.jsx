import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  blueClick,
  greenClick,
  redClick,
} from "../../redux/colorReducer/action";

const Colors = () => {
  const { color } = useSelector(store => store);
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
        backgroundColor: color,
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Select box color</h2>
      <button onClick={() => dispatch(redClick())}>red</button>
      <button onClick={() => dispatch(greenClick())}>green</button>
      <button onClick={() => dispatch(blueClick())}>blue</button>
    </div>
  );
};

export default Colors;
