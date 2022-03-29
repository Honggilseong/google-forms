import React from 'react';
import './App.css';
import DragAndDrop from './components/DragAndDrop';
import TitleForm from './components/TitleForm';
function App() {
  return (
    <div className="h-full w-full bg-fuchsia-100 p-3">
      <div className="mx-auto max-w-3xl">
        <TitleForm />
        <DragAndDrop />
      </div>
    </div>
  );
}

export default App;
