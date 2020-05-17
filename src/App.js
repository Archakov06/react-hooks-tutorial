import React from 'react';
import Count from './components/Count';
import IsFive from './components/IsFive';

function App() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div className="App">
      
      <h5>Счетчик 1: </h5>
      <div className="counter">
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1} />
      </div>

      <h5>Счетчик 2: </h5>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  );
}

export default App;
