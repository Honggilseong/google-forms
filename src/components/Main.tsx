import React from 'react';
import DragAndDrop from './DragAndDrop';
import SideBar from './SideBar';
import TitleForm from './TitleForm';

function Main() {
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

export default Main;
