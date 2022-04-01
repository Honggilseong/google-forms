import React, { Dispatch, SetStateAction, useState } from 'react';
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
import { selectOption } from '../state/actions/questionAction';
interface Props {
  optionType: string;
  index: number;
}

interface CheckboxQuestion {
  id: string;
  value: string;
}

function QuestionForm({ optionType, index }: Props) {
  // const [selectOption, selectOptionSet] = useState<string>('');
  const [multipleChoiceOptions, multipleChoiceOptionsSet] = useState<
    CheckboxQuestion[]
  >([{ id: (Math.random() + 1).toString(36).substring(7), value: '옵션 1' }]);
  const [checkboxOptions, checkboxOptionsSet] = useState<CheckboxQuestion[]>([
    { id: (Math.random() + 1).toString(36).substring(7), value: '옵션 1' },
  ]);
  const [dropdownOptions, dropdownOptionsSet] = useState<CheckboxQuestion[]>([
    { id: (Math.random() + 1).toString(36).substring(7), value: '옵션 1' },
  ]);

  const dispatch = useDispatch();

  const selectOptionsHandler = (event: SelectChangeEvent<string>) => {
    dispatch(selectOption({ index, type: event.target.value }));
  };

  const handleOnDragEnd = (
    questionOption: CheckboxQuestion[],
    questionSet: Dispatch<SetStateAction<CheckboxQuestion[]>>,
    result: DropResult,
  ) => {
    if (!result.destination) return;

    const items = Array.from(questionOption);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    questionSet(items);
  };

  const addCheckboxOptionHandler = (
    questionOption: CheckboxQuestion[],
    questionSet: Dispatch<SetStateAction<CheckboxQuestion[]>>,
  ) => {
    const checkboxLength = (questionOption.length + 1).toString();
    const addOption = {
      id: (Math.random() + 1).toString(36).substring(7),
      value: `옵션 ${checkboxLength}`,
    };
    questionSet([...questionOption, addOption]);
  };

  const deleteQuestionHandler = (
    questionOption: CheckboxQuestion[],
    questionSet: Dispatch<SetStateAction<CheckboxQuestion[]>>,
    index: number,
  ) => {
    const questions = [...questionOption];
    if (questionOption.length > 1) {
      questions.splice(index, 1);
    }
    questionSet(questions);
  };

  const onFocusInputHandler = (
    questionOption: CheckboxQuestion[],
    questionSet: Dispatch<SetStateAction<CheckboxQuestion[]>>,
    value: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newOption = [...questionOption];
    newOption[index].value = value.target.value;
    console.log(newOption);
    questionSet(newOption);
  };
  return (
    <div className="h-full w-full bg-white p-5">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="질문"
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
            <DragDropContext
              onDragEnd={(result) =>
                handleOnDragEnd(
                  multipleChoiceOptions,
                  multipleChoiceOptionsSet,
                  result,
                )
              }
            >
              <Droppable droppableId="forms">
                {(provided) => (
                  <div
                    className="forms mt-4 w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {multipleChoiceOptions.map(({ id, value }, index) => {
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
                                  onChange={(value) =>
                                    onFocusInputHandler(
                                      multipleChoiceOptions,
                                      multipleChoiceOptionsSet,
                                      value,
                                      index,
                                    )
                                  }
                                />
                                <AiOutlineClose
                                  size="20"
                                  className={`${
                                    multipleChoiceOptions.length === 1 &&
                                    'hidden'
                                  } cursor-pointer`}
                                  onClick={() =>
                                    deleteQuestionHandler(
                                      multipleChoiceOptions,
                                      multipleChoiceOptionsSet,
                                      index,
                                    )
                                  }
                                />
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
                  onClick={() =>
                    addCheckboxOptionHandler(
                      multipleChoiceOptions,
                      multipleChoiceOptionsSet,
                    )
                  }
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
            <DragDropContext
              onDragEnd={(result) =>
                handleOnDragEnd(checkboxOptions, checkboxOptionsSet, result)
              }
            >
              <Droppable droppableId="forms">
                {(provided) => (
                  <div
                    className="forms mt-4 w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {checkboxOptions.map(({ id, value }, index) => {
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
                                  onChange={(value) =>
                                    onFocusInputHandler(
                                      checkboxOptions,
                                      checkboxOptionsSet,
                                      value,
                                      index,
                                    )
                                  }
                                />
                                <AiOutlineClose
                                  size="20"
                                  className={`${
                                    checkboxOptions.length === 1 && 'hidden'
                                  } cursor-pointer`}
                                  onClick={() =>
                                    deleteQuestionHandler(
                                      checkboxOptions,
                                      checkboxOptionsSet,
                                      index,
                                    )
                                  }
                                />
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
                  onClick={() =>
                    addCheckboxOptionHandler(
                      checkboxOptions,
                      checkboxOptionsSet,
                    )
                  }
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
            <DragDropContext
              onDragEnd={(result) =>
                handleOnDragEnd(dropdownOptions, dropdownOptionsSet, result)
              }
            >
              <Droppable droppableId="forms">
                {(provided) => (
                  <div
                    className="forms mt-4 w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {dropdownOptions.map(({ id, value }, index) => {
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
                                  onChange={(value) =>
                                    onFocusInputHandler(
                                      dropdownOptions,
                                      dropdownOptionsSet,
                                      value,
                                      index,
                                    )
                                  }
                                />
                                <AiOutlineClose
                                  size="20"
                                  className={`${
                                    checkboxOptions.length === 1 && 'hidden'
                                  } cursor-pointer`}
                                  onClick={() =>
                                    deleteQuestionHandler(
                                      dropdownOptions,
                                      dropdownOptionsSet,
                                      index,
                                    )
                                  }
                                />
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
                  onClick={() =>
                    addCheckboxOptionHandler(
                      dropdownOptions,
                      dropdownOptionsSet,
                    )
                  }
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
