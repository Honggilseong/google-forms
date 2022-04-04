import { Checkbox, MenuItem, Select } from '@mui/material';
import { Radio, RadioGroup } from '@pongo-ui/react-radio';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../state/reducer';

interface Option {
  id: string;
  value: string;
}

function Preview() {
  const [radioValue, radioValueSet] = useState<Option[][]>([]);
  const [dropdownValue, dropdownValueSet] = useState<Option[][]>([]);
  const title = useSelector((state: RootState) => state.title);
  const questions = useSelector((state: RootState) => state.question);

  useEffect(() => {
    const dropOptions = questions.map(
      (options) => options.optionType === 'dropdown' && options.options,
    );
    console.log(dropOptions);
    dropdownValueSet(dropOptions);

    const multipleOptions = questions.map(
      (options) => options.optionType === 'multipleChoice' && options.options,
    );
    radioValueSet(multipleOptions);
  }, [questions]);

  return (
    <div className="h-full w-full bg-fuchsia-100 p-3">
      <div className="mb-3 flex w-full justify-center">
        <Link to="/" className="rounded-full bg-blue-500 p-3">
          <p className="text-white">되돌아가기</p>
        </Link>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 w-full overflow-hidden rounded-lg border border-gray-300 bg-white">
          <div className="z-50 h-2 bg-purple-800" />
          <div className="w-full p-5">
            <h1 className="mb-3 text-3xl">
              {title.title || '제목 없는 설문지'}
            </h1>
            <p className="mb-3">{title.description}</p>
            <p className="text-red-500">* 필수항목</p>
          </div>
        </div>
        {questions.map((question, index) => (
          <div
            key={question.id}
            className="mb-3 rounded-lg border border-gray-300 bg-white p-5"
          >
            <p>
              {question.title}
              {question.isRequired && <span className="text-red-500"> *</span>}
            </p>
            {question.optionType === 'shortAnswer' && (
              <div className="mt-5 w-52 border-b">
                <input
                  type="text"
                  placeholder="내 답변"
                  className="w-full focus:outline-none"
                />
              </div>
            )}
            {question.optionType === 'longAnswer' && (
              <div className="mt-5 w-full border-b">
                <input
                  type="text"
                  placeholder="내 답변"
                  className="w-full focus:outline-none"
                />
              </div>
            )}
            {question.optionType === 'checkbox' && (
              <div className="mt-5 w-full ">
                {question.options.map((option: Option) => (
                  <div key={option.id} className="flex items-center">
                    <Checkbox />
                    <p>{option.value}</p>
                  </div>
                ))}
              </div>
            )}
            {question.optionType === 'multipleChoice' && (
              <div className="mt-5 w-full ">
                <RadioGroup>
                  {radioValue[index]?.map((option: Option) => (
                    <div key={option.id} className="flex items-center">
                      <Radio value={option.value} label={option.value} />
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            {question.optionType === 'dropdown' && (
              <div className="mt-5 w-full ">
                <Select>
                  {dropdownValue[index]?.map((options: Option) => (
                    <MenuItem key={options.id} value={options.value}>
                      {options.value}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
