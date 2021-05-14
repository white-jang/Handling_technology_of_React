import { createAction, handleActions } from "redux-actions";

const INCREASE = "conter/INCREASE";
const DECREASE = "conter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0; // 초기 상태 (객체가 아니어도 됨)

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
