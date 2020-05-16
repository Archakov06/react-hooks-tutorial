import React from 'react';

import Hello from './Hello';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    case 'TOGGLE_VISIBLE_HELLO':
      return {
        ...state,
        showHello: false,
      };
    default:
      return state;
  }
}

function init(state) {
  return {
    ...state,
    numbers: [5, 5, 5],
  };
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    {
      showHello: true,
      numbers: [1, 2, 3],
    },
    init,
  );

  const inputRef = React.useRef(null);
  const words = React.useRef(['hello', 'world']);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    dispatch({
      type: 'ADD_NUMBER',
      payload: randNumber,
    });
  };

  const setFocus = () => {
    inputRef.current.focus();
    console.log(words);
  };

  return (
    <div className="App">
      {state.showHello && <Hello />}
      <button
        onClick={() => {
          dispatch({
            type: 'TOGGLE_VISIBLE_HELLO',
          });
        }}>
        Скрыть/Показать Hello
      </button>
      <ul>
        {state.numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Новое число</button>
      <br />
      <br />
      <hr />
      <input ref={inputRef} type="text" placeholder="Логин" />
      <button onClick={setFocus}>Фокус на инпут</button>
    </div>
  );
}

export default App;
