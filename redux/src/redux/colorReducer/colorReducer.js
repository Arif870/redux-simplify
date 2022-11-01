// color reducer

import { BLUE, GREEN, RED } from "./actionType";
import { initialState } from "./initialState";

const colorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GREEN:
      return "green";
    case RED:
      return "red";
    case BLUE:
      return "blue";

    default:
      return state;
  }
};

export default colorReducer;
