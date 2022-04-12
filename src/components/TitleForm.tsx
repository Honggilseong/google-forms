import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unFocusQuestion } from '../state/actions/questionAction';

import { focusTitle, typeTitle } from '../state/actions/questionTitleAction';
import { RootState } from '../state/reducer';

function TitleForm() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.title);
  const onFocusInputHandler = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(typeTitle({ name, event }));
  };
  const onClickTitleHandler = () => {
    dispatch(focusTitle());
    dispatch(unFocusQuestion());
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-white"
      onClick={onClickTitleHandler}
    >
      <div className="flex flex-col">
        {state.isFocus && (
          <div className="absolute left-0 bottom-0 z-10 h-full w-2 bg-blue-500" />
        )}
        <div className="z-50 h-2 bg-purple-800" />
        <div className="w-full p-5">
          <div className="border-b border-gray-200">
            <input
              type="text"
              placeholder="설문지 제목"
              value={state.title}
              onChange={(event) => onFocusInputHandler('title', event)}
              className="h-10 w-full text-2xl placeholder:text-2xl focus:outline-none"
            />
          </div>
          <div className="border-b border-gray-200">
            <input
              type="text"
              placeholder="설문지 제목"
              value={state.description}
              onChange={(event) => onFocusInputHandler('description', event)}
              className="mt-3 h-5 w-full text-sm placeholder:text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleForm;
