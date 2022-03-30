import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdOutlineDragIndicator } from 'react-icons/md';
import QuestionForm from './QuestionForm';

function DragAndDrop() {
  const [questionForms, questionFormsSet] = useState([
    { id: '1', title: 'asdf' },
    { id: '2', title: 'asdf' },
  ]);
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(questionForms);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    questionFormsSet(items);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="forms">
        {(provided) => (
          <div
            className="forms mt-4 w-full"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {questionForms.map(({ id, title }, index) => {
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
  );
}

export default DragAndDrop;
