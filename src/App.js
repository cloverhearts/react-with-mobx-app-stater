import React from 'react';
import StoreProvider from 'Store'
import TodoView from 'View/Main'
import 'App.css';


function App() {
  return (
    <StoreProvider>
      <div className="App">
        <TodoView />
      </div>
    </StoreProvider>
  );
}

export default App;
