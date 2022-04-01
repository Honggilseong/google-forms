import {
  ADD_OPTION,
  ADD_QUESTION,
  CHANGE_VALUE,
  CLICK_REQUIRED,
  DELETE_QUESTION,
  DRAG_OPTION,
  DRAG_QUESTION,
  questionActionDispatch,
  SELECT_OPTION,
} from './../actions/questionActionType';

interface Options {
  id: string;
  value: string;
}

interface InitialState {
  id: string;
  title: string;
  description: string;
  optionType: string;
  isRequired: boolean;
  options: Options[];
}

const initialState = [
  {
    id: (Math.random() + 1).toString(36).substring(7),
    title: '',
    description: '',
    optionType: 'shortAnswer',
    isRequired: false,
    options: [
      { id: (Math.random() + 1).toString(36).substring(7), value: '옵션' },
    ],
  },
];

const QuestionReducer = (
  state: InitialState[] = initialState,
  action: questionActionDispatch,
) => {
  switch (action.type) {
    case ADD_QUESTION: {
      return state.concat({
        id: (Math.random() + 1).toString(36).substring(7),
        title: '',
        description: '',
        optionType: 'shortAnswer',
        isRequired: false,
        options: [
          {
            id: (Math.random() + 1).toString(36).substring(7),
            value: '옵션',
          },
        ],
      });
    }
    case DELETE_QUESTION: {
      if (state.length > 1) {
        return state.filter((question) => question.id !== action.payload);
      }
      return state;
    }
    case DRAG_QUESTION: {
      const { source, destination } = action.payload;
      if (destination) {
        const items = Array.from(state);
        const [reorderedItem] = items.splice(source.index, 1);
        items.splice(destination.index, 0, reorderedItem);

        return items;
      }
      return state;
    }
    case DRAG_OPTION: {
      const { arrayIndex, result } = action.payload;
      if (result.destination) {
        const items = [...state];
        const optionArray = items[arrayIndex];
        const [reorderedItem] = optionArray.options.splice(
          result.source.index,
          1,
        );
        optionArray.options.splice(result.destination.index, 0, reorderedItem);

        return items;
      }
      return state;
    }
    case SELECT_OPTION: {
      const { index, type } = action.payload;
      const newArray = [...state];
      newArray[index].optionType = type;
      newArray[index].options = [
        {
          id: (Math.random() + 1).toString(36).substring(7),
          value: '옵션',
        },
      ];
      return [...newArray];
    }
    case CLICK_REQUIRED: {
      const { index, isRequired } = action.payload;
      const newArray = [...state];
      newArray[index].isRequired = !isRequired;

      return [...newArray];
    }
    case ADD_OPTION: {
      const { index, addOption } = action.payload;
      const newArray = [...state];
      newArray[index].options.push(addOption);

      return [...newArray];
    }
    case CHANGE_VALUE: {
      const { arrayIndex, optionIndex, event } = action.payload;
      const newArray = [...state];
      newArray[arrayIndex].options[optionIndex].value = event.target.value;

      return [...newArray];
    }

    default:
      return state;
  }
};
export default QuestionReducer;
