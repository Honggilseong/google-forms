import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { MdTextFields } from 'react-icons/md';
import { AiOutlinePicture } from 'react-icons/ai';
import { BsPlayBtn } from 'react-icons/bs';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { FiPause } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../state/actions/questionAction';
function SideBar() {
  const dispatch = useDispatch();
  return (
    <div className="flex w-14 flex-col items-center justify-center rounded-lg bg-white p-3">
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-slate-300"
        onClick={() => dispatch(addQuestion())}
      >
        <BsPlusCircle size="20" />
      </div>
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-slate-300">
        <HiOutlineClipboardCopy size="20" />
      </div>
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-slate-300">
        <MdTextFields size="20" />
      </div>
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-slate-300">
        <AiOutlinePicture size="20" />
      </div>
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-slate-300">
        <BsPlayBtn size="20" />
      </div>
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-slate-300">
        <FiPause size="20" className="rotate-90" />
      </div>
    </div>
  );
}

export default SideBar;
