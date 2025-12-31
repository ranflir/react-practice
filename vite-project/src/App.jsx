import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>{count}번 클릭</button>;
}

export default App;
