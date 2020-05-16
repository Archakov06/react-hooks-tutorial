import React from 'react';

function Hello() {
  React.useEffect(() => {
    console.log('Hello отобразился один раз');

    return () => {
      console.log('Hello удаляется');
    };
  }, []);

  return <h2>Hello, World!</h2>;
}

export default Hello;
