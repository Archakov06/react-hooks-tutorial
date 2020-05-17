import React from 'react';

function App() {
  const [count, setCounter] = React.useState(0);

  const isFive = React.useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    console.log('Очень сложное вычисление ' + i);
    return Math.random();
  }, [count]);

  console.log('render');

  return (
    <div className="App">
      <h4>{count}</h4>
      <h4>{isFive}</h4>
      <button onClick={() => setCounter(count + 1)}>+</button>
      <button onClick={() => setCounter(5)}>5</button>
    </div>
  );
}

export default App;
