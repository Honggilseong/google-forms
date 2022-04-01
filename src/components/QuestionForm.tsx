import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  AiOutlinePicture,
  AiFillCaretDown,
  AiOutlineClose,
} from 'react-icons/ai';
import { MdOutlineDragIndicator, MdOutlineSubject } from 'react-icons/md';
import Select from '@mui/material/Select';
import { Checkbox, MenuItem, Radio, SelectChangeEvent } from '@mui/material';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import {
  addOption,
  changeTitle,
  changeValue,
  deleteOption,
  dragOption,
  selectOption,
} from '../state/actions/questionAction';

interface CheckboxQuestion {
  id: string;
  value: string;
}
interface Props {
  optionType: string;
  arrayIndex: number;
  options: CheckboxQuestion[];
}

function QuestionForm({ optionType, arrayIndex, options }: Props) {
  const dispatch = useDispatch();
  const selectOptionsHandler = (event: SelectChangeEvent<string>) => {
    dispatch(selectOption({ index: arrayIndex, type: event.target.value }));
  };

  const handleOnDragEnd = (result: DropResult) => {
    dispatch(dragOption({ arrayIndex, result }));
  };

  const addCheckboxOptionHandler = () => {
    const newOption = {
      id: (Math.random() + 1).toString(36).substring(7),
      value: '옵션',
    };
    dispatch(addOption({ index: arrayIndex, addOption: newOption }));
  };

  const deleteQuestionHandler = (id: string) => {
    if (options.length > 1) {
      dispatch(deleteOption({ arrayIndex, optionId: id }));
    }
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitle({ arrayIndex, event }));
  };

  const onFocusInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    dispatch(changeValue({ arrayIndex, optionIndex: index, event }));
  };

  return (
    <div className="h-full w-full bg-white p-5">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="질문"
          onChange={(event) => onChangeTitle(event)}
          className="flex-1 border-b border-gray-800 p-3 hover:bg-slate-100 focus:outline-none"
        />
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center hover:bg-slate-200">
          <AiOutlinePicture size={20} />
        </div>
        <Select
          className="select flex w-48 items-center justify-center"
          style={{ color: '#5f6368', fontSize: '13px' }}
          value={optionType}
          onChange={(option) => selectOptionsHandler(option)}
        >
          <MenuItem value="shortAnswer">
            <MdOutlineSubject size="30" className="mr-2" />
            단답형
          </MenuItem>
          <MenuItem
            value="longAnswer"
            style={{ display: 'flex', justifyItems: 'center' }}
          >
            <MdOutlineSubject size="30" className="mr-2" /> 장문형
          </MenuItem>
          <MenuItem value="checkbox">
            <Radio className="mr-2" checked style={{ color: 'gray' }} />
            체크박스
          </MenuItem>
          <MenuItem value="multipleChoice">
            <AiFillCaretDown className="mr-3" />
            객관식 질문
          </MenuItem>
          <MenuItem value="dropdown">
            <IoMdArrowDropdownCircle className="mr-3" size="30" />
            드롭다운
          </MenuItem>
        </Select>
      </div>
      <div>
        {optionType === 'shortAnswer' && (
          <div className="mt-2 w-64 border-b">
            <input
              type="text"
              placeholder="단답형 텍스트"
              className="w-64 focus:outline-none"
              disabled
            />
          </div>
        )}
        {optionType === 'longAnswer' && (
          <div className="mt-2 border-b">
            <input
              type="text"
              placeholder="장문형 텍스트"
              className="w-64 focus:outline-none"
              disabled
            />
          </div>
        )}

        {optionType === 'multipleChoice' && (
          <div>
            <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
              <Droppable droppableId="forms">
                {(provided) => (
                  <div
                    className="forms mt-4 w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {options.map(({ id, value }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className="mb-4 flex items-center"
                            >
                              <div
                                {...provided.dragHandleProps}
                                className="flex h-7 w-4 items-center justify-center"
                              >
                                <MdOutlineDragIndicator
                                  className="text-gray-400"
                                  size="30px"
                                />
                              </div>
                              <div className=" flex w-full items-center">
                                <Radio disabled />
                                <input
                                  className="w-3/4 border-b pb-1 focus:outline-none"
                                  value={value}
                                  onChange={(event) =>
                                    onFocusInputHandler(event, index)
                                  }
                                />
                                {options.length > 1 && (
                                  <AiOutlineClose
                                    size="20"
                                    className="cursor-pointer"
                                    onClick={() => deleteQuestionHandler(id)}
                                  />
                                )}
                              </div>
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
            <div className="flex">
              <Radio disabled />
              <div className="flex items-center hover:border-b">
                <p
                  className=" text-gray-500"
                  onClick={() => addCheckboxOptionHandler()}
                >
                  옵션 추가{`\u00A0`}
                </p>
                <p>또는{`\u00A0`}</p>
                <p className="cursor-pointer text-blue-400">{`'기타' 추가`}</p>
              </div>
            </div>
          </div>
        )}
        {optionType === 'checkbox' && (
          <div>
            <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
              <Droppable droppableId="forms">
                {(provided) => (
                  <div
                    className="forms mt-4 w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {options.map(({ id, value }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className="mb-4 flex items-center"
                            >
                              <div
                                {...provided.dragHandleProps}
                                className="flex h-7 w-4 items-center justify-center"
                              >
                                <MdOutlineDragIndicator
                                  className="text-gray-400"
                                  size="30px"
                                />
                              </div>
                              <div className=" flex w-full items-center">
                                <Checkbox disabled />
                                <input
                                  className="w-3/4 border-b pb-1 focus:outline-none"
                                  value={value}
                                  onChange={(event) =>
                                    onFocusInputHandler(event, index)
                                  }
                                />
                                {options.length > 1 && (
                                  <AiOutlineClose
                                    size="20"
                                    className="cursor-pointer"
                                    onClick={() => deleteQuestionHandler(id)}
                                  />
                                )}
                              </div>
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
            <div className="flex">
              <Checkbox disabled />
              <div className="flex items-center hover:border-b">
                <p
                  className=" text-gray-500"
                  onClick={() => addCheckboxOptionHandler()}
                >
                  옵션 추가{`\u00A0`}
                </p>
                <p>또는{`\u00A0`}</p>
                <p className="cursor-pointer text-blue-400">{`'기타' 추가`}</p>
              </div>
            </div>
          </div>
        )}
        {optionType === 'dropdown' && (
          <div>
            <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
              <Droppable droppableId="forms">
                {(provided) => (
                  <div
                    className="forms mt-4 w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {options.map(({ id, value }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className="mb-4 flex items-center"
                            >
                              <div
                                {...provided.dragHandleProps}
                                className="flex h-7 w-4 items-center justify-center"
                              >
                                <MdOutlineDragIndicator
                                  className="text-gray-400"
                                  size="30px"
                                />
                              </div>
                              <div className="flex w-full items-center">
                                <input
                                  className="w-3/4 border-b pb-1 focus:outline-none"
                                  value={value}
                                  onChange={(event) =>
                                    onFocusInputHandler(event, index)
                                  }
                                />
                                {options.length > 1 && (
                                  <AiOutlineClose
                                    size="20"
                                    className="cursor-pointer"
                                    onClick={() => deleteQuestionHandler(id)}
                                  />
                                )}
                              </div>
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
            <div className="flex">
              <div className="flex items-center hover:border-b">
                <p
                  className=" text-gray-500"
                  onClick={() => addCheckboxOptionHandler()}
                >
                  옵션 추가{`\u00A0`}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionForm;
