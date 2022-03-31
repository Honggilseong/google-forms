import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducer';

import QuestionForm from './QuestionForm';
import QuestionFormBottom from './QuestionFormBottom';

function DragAndDrop() {
  const [questionForms, questionFormsSet] = useState([
    { id: '1' },
    { id: '2' },
  ]);
  const state = useSelector((state: RootState) => state.question);
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(questionForms);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    questionFormsSet(items);
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
              {state.map(({ id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="mb-4 rounded-lg bg-white"
                      >
                        <div
                          {...provided.dragHandleProps}
                          className="flex h-5 items-center justify-center"
                        >
                          <MdOutlineDragIndicator
                            className="rotate-90 text-gray-400"
                            size={15}
                          />
                        </div>
                        <QuestionForm />
                        <QuestionFormBottom id={id} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default DragAndDrop;
