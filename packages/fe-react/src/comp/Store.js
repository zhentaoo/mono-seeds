import React, { useState, createContext } from 'react';
export const Context = new createContext();

function Store(props) {
  const [store, setStore] = useState('annnnnsssna');

  const changeStore = (data) => {
    setStore(data)
  }
  
  return (
    <div>
      <Context.Provider value={{ store, changeStore }}>
        {props.children}
      </Context.Provider>
    </div>
  )
}

export default Store;
