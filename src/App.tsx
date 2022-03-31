import React from 'react';
import './App.css';
import DragAndDrop from './components/DragAndDrop';
import SideBar from './components/SideBar';
import TitleForm from './components/TitleForm';
function App() {
  return (
    <div className="h-full w-full bg-fuchsia-100 p-3">
      <div className="mx-auto max-w-3xl">
        <div className="flex">
          <TitleForm />
          <div className="ml-2">
            <SideBar />
          </div>
        </div>
        <DragAndDrop />
      </div>
    </div>
  );
}

export default App;
