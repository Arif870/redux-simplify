// action

import { BLUE, GREEN, RED } from "./actionType";

export const redClick = payload => {
  return {
    type: RED,
  };
};
export const greenClick = payload => {
  return {
    type: GREEN,
  };
};
export const blueClick = payload => {
  return {
    type: BLUE,
  };
};
