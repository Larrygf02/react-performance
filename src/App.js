import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  console.log('APP RUNNING')
  
  const toggleParagraph = () => {
    setShowParagraph(!showParagraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={() => toggleParagraph()}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
