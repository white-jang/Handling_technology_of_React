import { createAction, handleAction, handleActions } from 'redux-actions';

// 액션 타입 정의
// 액션 타입은 대문자로 정의하고 문자열 내용은 '모듈 이름/액션 이름'으로 작성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의
// export는 여러 개 내보내기 가능
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// createAction을 사용하면 액션 객체 생성할 필요 없음
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return { number: state.number + 1 };
//     case DECREASE:
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// }
// handleActions를 활용하면 간단하게 작성 가능
// 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수, 두 번째 파라미터에는 초기 상태
const counter = handleAction(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

// export default는 여러 개 내보내기 가능
export default counter;
