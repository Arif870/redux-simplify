import { DICREMENT, INCREMENT } from "./action";

export const increment = payload => {
  return {
    type: INCREMENT,
  };
};
export const dicrement = payload => {
  return {
    type: DICREMENT,
  };
};
