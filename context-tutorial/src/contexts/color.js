import { createContext, useState } from "react";

// 고정(정적) Context
// const ColorContext = createContext({ color: "black" });

// 동적 Context
// createContext를 사용할 때 기본값으로 사용할 객체
// 이 기본값은 나중에 Provider의 value에 넣는 객체의 형태와 일치시켜주는 것이 권장
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

// ColorProvider 컴포넌트 정의
// value에서 상태는 state, 업데이트 함수는 actions로 정의 (이렇게 분리하면 편리)
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubColor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
