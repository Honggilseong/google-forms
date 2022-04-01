import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { BiTrash, BiDotsVerticalRounded } from 'react-icons/bi';
import {
  clickRequired,
  copyQuestion,
  deleteQuestion,
} from '../state/actions/questionAction';
import { useDispatch } from 'react-redux';
import Switch from '@mui/material/Switch';

interface Props {
  id: string;
  index: number;
  isRequired: boolean;
}

function QuestionFormBottom({ id, isRequired, index }: Props) {
  const dispatch = useDispatch();
  const stateRequiredHandler = () => {
    dispatch(clickRequired({ index, isRequired }));
  };

  const deleteQuestionHandler = () => {
    dispatch(deleteQuestion(id));
  };

  const copyQuestionHandler = () => {
    dispatch(copyQuestion(index));
  };

  return (
    <div className="bg-white">
      <div className="flex flex-row-reverse items-center border-t p-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-200">
          <BiDotsVerticalRounded size="25" />
        </div>
        <div className="flex items-center justify-center">
          <p>필수</p>
          <Switch onClick={() => stateRequiredHandler()} />
        </div>
        <div className="mr-5 flex border-r border-gray-300 pr-5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-200"
            onClick={() => copyQuestionHandler()}
          >
            <IoCopyOutline size="25" />
          </div>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-200"
            onClick={() => deleteQuestionHandler()}
          >
            <BiTrash size="25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionFormBottom;
