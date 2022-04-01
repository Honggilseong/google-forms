import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Preview from './components/Preview';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
