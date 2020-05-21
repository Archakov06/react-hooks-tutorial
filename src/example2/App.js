import React from 'react';
import Buttons from './Buttons';

import './index.css';

function App() {
  const [count, setCounter] = React.useState(0);

  const onPlus = () => setCounter((count) => count + 1);

  const onMinus = () => setCounter((count) => count - 1);

  return (
    <div className="App">
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
}

export default App;
