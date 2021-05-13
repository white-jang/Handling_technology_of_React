import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  // useSelector Hook으로 상태 조회하기
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
// const mapDispatchToProps = (dispatch) =>
// bindActionCreators 유틸 함수를 이용하면 각 액션 생성 함수를 호출하고 dispatch로 감싸지 않아도 됨
// bindActionCreators({ increase, decrease }, dispatch);

export default CounterContainer;
