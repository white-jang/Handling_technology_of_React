import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  // 성공 및 실패 액션 타입 정의
  const SUCCESS = `${type}_SUCCESSS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type }); // 요청을 시작한 것을 알림
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); // 요청 성공
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 요청 실패 (에러 발생)
      dispatch(finishLoading(type));
      throw e; // 나중에 컴포넌트에서 에러를 조회할 수 있게 해줌
    }
  };
}
// 사용법 : createRequestThunk('GET_USERS', api.getUsers);
