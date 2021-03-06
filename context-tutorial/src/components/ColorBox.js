import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  // useContext Hook을 활용하면 간편하게 조회
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />

      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;

// Consumer를 이용해 Context 값 조회
// or useContext Hook을 이용해 Context 값 조회
// <ColorConsumer>
//   Consumer 사이 (children 자리)에 JSX나 문자열이 아닌 함수를 넣음
//   => Function as a child, Render Props 패턴
//   {(value) => (
//     <>
//       <div
//         style={{
//           width: "64px",
//           height: "64px",
//           background: value.state.color,
//         }}
//       />

//       <div
//         style={{
//           width: "32px",
//           height: "32px",
//           background: value.state.subcolor,
//         }}
//       />
//     </>
//   )}
// </ColorConsumer>
