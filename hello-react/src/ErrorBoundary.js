import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error, info) {
        // 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고
        // 오류 UI를 보여줄 수 있게 해주는 메소드
        this.setState({
            error: true
        });
        console.log({error, info});
    }

    render() {
        if (this.state.error)
            return <div>에러가 발생했습니다.</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;