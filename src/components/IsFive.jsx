import React from 'react';

let renderCount = 0;

export default React.memo(
  function IsFive({ value }) {
    console.warn(`🔴 isFive render: ${++renderCount}`);

    const getResult = React.useMemo(() => {
      let i = 0;
      while (i < 600000000) i++;
      return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
    }, [value]);

    return <h3>{getResult}</h3>;
  },
  (prevProps, nextPropx) => {
    if (nextPropx.value === 5) {
      return false;
    } else {
      return true;
    }
  },
);
