import React from 'react';

function App() {
  // let numbers = [1, 555, 3];
  const [numbers, setNumbers] = React.useState([1, 555, 3]);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };

  setInterval(() => {
    console.log(1);
  }, 500);

  return (
    <div className="App">
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Новое число</button>
    </div>
  );
}

export default App;
