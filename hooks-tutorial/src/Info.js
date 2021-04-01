import React, { useState, useEffect } from "react";

const Info = () => {
  // useState는 가장 기본적인 Hooks로 함수형 컴포넌트에서도 상태 관리를 할 수 있게 해준다.
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    // useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hooks.
    // class형 컴포넌트의 componentDidMount, componentDidUpdate를 합친 형태로 봐도 무방.
    // console.log("렌더링이 완료되었습니다!");
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
