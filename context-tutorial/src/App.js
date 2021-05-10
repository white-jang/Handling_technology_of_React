import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    // Provider를 이용해 Context value 변경
    // Provider가 없으면 기본값을 사용, Provider를 사용하면 value값 필수
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
