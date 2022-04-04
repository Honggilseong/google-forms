import React from 'react';
import { Link } from 'react-router-dom';
import DragAndDrop from './DragAndDrop';
import SideBar from './SideBar';
import TitleForm from './TitleForm';

function Main() {
  return (
    <div className="h-full w-full bg-fuchsia-100 p-3">
      <div className="mb-3 flex w-full justify-center">
        <Link to="/preview" className="rounded-full bg-blue-500 p-3">
          <p className="text-white">미리보기</p>
        </Link>
      </div>
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
