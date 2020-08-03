import React from 'react';

// class List extends React.Component {
//   state = {
//     numbers: [1, 2, 3],
//   };

//   addRandomNumber = () => {
//     const randNumber = Math.round(Math.random() * 10);
//     this.setState({
//       numbers: [...this.state.numbers, randNumber],
//     });
//   };

//   componentDidMount() {
//     console.log('КОМПОНЕНТ БЫЛ ОТОБРАЖЕН!');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log({ prevProps, prevState, nextProps: this.props, nextState: this.state });
//     if (this.state.numbers.length !== prevState.numbers.length) {
//       console.log('Список чисел обновился!');
//     }
//   }

//   componentWillUnmount() {
//     console.log('КОМПОНЕНТ БУДЕТ УДАЛЁН!');
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.numbers.map((num, index) => (
//             <li key={index}>{num}</li>
//           ))}
//         </ul>
//         <button onClick={this.addRandomNumber}>Новое число</button>
//       </div>
//     );
//   }
// }

const List = () => {
  const [numbers, setNumbers] = React.useState([1, 555, 3]);
  const [count, setCount] = React.useState(0);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };

  // componentDidUpdate (только для count)
  React.useEffect(() => {
    console.log('COUNT был оновлен');
  }, [count]);

  // componentDidUpdate (только для numbers)
  React.useEffect(() => {
    console.log('NUMBERS был оновлен');
  }, [numbers]);

  // componentDidUpdate
  React.useEffect(() => {
    console.log('КОМПОНЕНТ ОБНОВИЛСЯ');
  });

  // componentDidMount + componentWillUnmount
  React.useEffect(() => {
    console.log('КОМПОНЕНТ ОТОБРАЗИЛСЯ');
    return () => {
      console.log('КОМПОНЕНТ УДАЛИЛСЯ');
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Новое число</button>
    </div>
  );
};

export default List;
