import { DECREMENT, INCREMENT } from "./actionTypes";

const incrementCount = () => {
  return {
    type: INCREMENT,
    payload: 5,
  };
};
const decrementCount = () => {
  return {
    type: DECREMENT,
    payload: 2,
  };
};

export { incrementCount, decrementCount };
