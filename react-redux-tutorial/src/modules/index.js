import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서 만들기
// 파일 이름을 index.js로 설정하면 다른 컴포넌트에서 불러올 때
// '/modules'만으로 불러오기 가능
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
