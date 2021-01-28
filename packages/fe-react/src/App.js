import React from 'react';
import Exp from './comp/Exp';
import Exp2 from './comp/Exp2';
import Store from './comp/Store';

function App() {
  return (
    <div className="App">
      <Store>
        <Exp />
        <Exp2 />
      </Store>
    </div>
  );
}

export default App;
