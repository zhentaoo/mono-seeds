import React, { useState, useEffect, useContext, createContext } from 'react';
import { Context } from './Store';

function Exp2(props) {
  const { store, changeStore } = useContext(Context);
  const [count, setCount] = useState(0);

  useEffect((a, b, c, d) => {
    document.title = `You clicked ${count} times`;
  });

  function addClickCount() {
    setCount(count + 1)
    changeStore(Math.random())
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <div>
        --{JSON.stringify(store)}--
      </div>
      <button onClick={() => addClickCount()}>
        Click
      </button>
    </div>
  );
}

export default Exp2;
