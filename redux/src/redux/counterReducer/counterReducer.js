// counter reducer

import { DICREMENT, INCREMENT } from "./action";
import initialState from "./initialState";

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DICREMENT:
      return state - 1;

    default:
      return state;
  }
};
export default counterReducer;
