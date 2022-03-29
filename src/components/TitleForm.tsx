import React, { useState } from 'react';

interface TextValue {
  titleValue: string;
  descriptionValue: string;
}

function TitleForm() {
  const [textValue, textValueSet] = useState<TextValue>({
    titleValue: '제목 없는 설문지',
    descriptionValue: '',
  });

  const onFocusInputHandler = (
    name: string,
    value: React.ChangeEvent<HTMLInputElement>,
  ) => {
    textValueSet({ ...textValue, [name]: value.target.value });
  };
  const onBlurInputHandler = () => {
    if (textValue.titleValue.length === 0)
      textValueSet({ ...textValue, titleValue: '제목 없는 설문지' });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-white">
      <div className="flex flex-col">
        <div className="absolute left-0 bottom-0 z-10 h-full w-2 bg-blue-500" />
        <div className="z-50 h-2 bg-purple-800" />
        <div className="w-full p-5">
          <div className="border-b border-gray-200">
            <input
              type="text"
              placeholder="설문지 제목"
              value={textValue.titleValue}
              onChange={(value) => onFocusInputHandler('titleValue', value)}
              onBlur={() => onBlurInputHandler()}
              className="h-10 w-full text-2xl placeholder:text-2xl focus:outline-none"
            />
          </div>
          <div className="border-b border-gray-200">
            <input
              type="text"
              placeholder="설문지 제목"
              value={textValue.descriptionValue}
              onChange={(value) =>
                onFocusInputHandler('descriptionValue', value)
              }
              onBlur={() => onBlurInputHandler()}
              className="mt-3 h-5 w-full text-sm placeholder:text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleForm;
