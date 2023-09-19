import './App.css';
import Hello from './components/Hello';

function App() {
  return <div className='App'>
    <Hello />
  </div>
}

export default App;

// 중괄호를 사용하면 미리 정의해놓은 변수를 사용할 수 있다.
/* 
state: 컴포넌트의 속성값, 리액트는 속성값이 변하면 자동으로 UI를 변경해준다.
*/