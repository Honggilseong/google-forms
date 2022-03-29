import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AiOutlinePicture } from 'react-icons/ai';

function DragAndDrop() {
  const [characters, updateCharacters] = useState([
    { id: '1', title: 'asdf' },
    { id: '2', title: 'asdf' },
  ]);
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
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
            {characters.map(({ id, title }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-4 cursor-all-scroll rounded-lg bg-white"
                    >
                      {title}
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
