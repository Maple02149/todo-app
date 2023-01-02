import React from 'react';
import './App.css';
import { TodoList } from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="/logo.png"alt="logo" /> */}
        <img src="/logo.png" className="App-logo" alt="logo" />
        <TodoList
          name="Maple"
          items={[]}/>
      </header>
    </div>
  );
}

export default App;
