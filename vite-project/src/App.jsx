// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0); // 2/ state를 정한다음

//   const handleClick = () => {
//     // 3. 이벤트리스너를 만들고
//     setCount(count + 1); // 4. 이벤트리스너에서는 state 값을 변경하는 방식으로 이벤트를 처리
//   };

//   return <button onClick={handleClick}>{count}번 클릭</button>; // 1. 리액트 컴포넌트에서 JSX를 작성하고
// }

// export default App;

import Toggle from './Toggle';

function App() {
  return (
    <>
      <Toggle />
    </>
  );
}

export default App;
