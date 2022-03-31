import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { BiTrash, BiDotsVerticalRounded } from 'react-icons/bi';
import { deleteQuestion } from '../state/actions/questionAction';
import { useDispatch } from 'react-redux';
import Switch from '@mui/material/Switch';

interface Props {
  id: string;
}

function QuestionFormBottom({ id }: Props) {
  const [required, requiredSet] = useState<boolean>(false);
  const dispatch = useDispatch();

  const stateRequiredHandler = () => {
    requiredSet(!required);
  };

  const deleteQuestionHandler = () => {
    dispatch(deleteQuestion(id));
  };

  return (
    <div>
      <div className="flex flex-row-reverse items-center border-t p-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-200">
          <BiDotsVerticalRounded size="25" />
        </div>
        <div className="flex items-center justify-center">
          <p>필수</p>
          <Switch onClick={() => stateRequiredHandler()} />
        </div>
        <div className="mr-5 flex border-r border-gray-300 pr-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-200">
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
