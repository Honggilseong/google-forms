import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { dragQuestion, focusQuestion } from '../state/actions/questionAction';
import { unFocusTitle } from '../state/actions/questionTitleAction';
import { RootState } from '../state/reducer';

import QuestionForm from './QuestionForm';
import QuestionFormBottom from './QuestionFormBottom';

function DragAndDrop() {
  const state = useSelector((state: RootState) => state.question);
  const dispatch = useDispatch();

  const handleOnDragEnd = (result: DropResult) => {
    dispatch(dragQuestion(result));
  };

  const onClickQuestionHandler = (index: number) => {
    dispatch(focusQuestion(index));
    dispatch(unFocusTitle());
  };
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="forms">
          {(provided) => (
            <div
              className="forms mt-4 w-full"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.map(
                (
                  { id, optionType, isRequired, options, title, isFocus },
                  index,
                ) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="relative mb-4 overflow-hidden rounded-lg bg-white"
                          onClick={() => onClickQuestionHandler(index)}
                        >
                          {isFocus && (
                            <div className="absolute left-0 bottom-0 z-10 h-full w-2 bg-blue-500" />
                          )}
                          <div
                            {...provided.dragHandleProps}
                            className="relative flex h-5 items-center justify-center"
                          >
                            <MdOutlineDragIndicator
                              className="rotate-90 text-gray-400"
                              size={15}
                            />
                          </div>

                          <QuestionForm
                            optionType={optionType}
                            arrayIndex={index}
                            options={options}
                            title={title}
                          />
                          <QuestionFormBottom
                            id={id}
                            isRequired={isRequired}
                            index={index}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                },
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default DragAndDrop;
