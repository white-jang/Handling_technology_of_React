import React, {
    Component
} from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref를 설정할 부분

    constructor(props) {
        // 컴포넌트의 생성자
        super(props);
        console.log("constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // props로 받아온 값을 state에 동기화시키는 용도로 사용되는 메소드
        // 컴포넌트가 마운트될 때, 업데이트될 때 호출됨

        // 부모 컴포넌트에게 받은 color값을 state에 동기화
        console.log("getDerivedStateFromProps");
        if (nextProps.color !== prevState.color) {
            return {
                color: nextProps.color
            };
        }
        return null;
    }

    componentDidMount() {
        // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행되는 메소드
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        // props 또는 state를 변경했을 때 리렌더링 여부를 지정하는 메소드
        // true를 반환하면 다음 라이프사이클 메소드를 계속 실행
        // false를 반환하면 작업 중지 
        console.log("shouldComponentUpdate", nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        // 컴포넌트가 웹 브라우저 상에서 사라지기 전에 호출하는 메소드
        console.log("componentWillUnmount");
    }

    handleClick = () => {
        // 이벤트 핸들러
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출

        // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 componentDidUpdate에서 조회 가능
        console.log("getSnapshotBeforeUpdate");
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 리렌더링을 완료한 후 실행
        // prevProps/State를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능
        // getSnapshotBeforeUpdate에서 반환한 값을 파라미터인 snapshot으로 전달받음
        console.log("componentDidUpdate", prevProps, prevState);
        if (snapshot) {
            console.log("업데이트 되기 전 색상: ", snapshot);
        }
    }

    render() {
        console.log("render");

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;