import {
  ADD_QUESTION,
  CLICK_REQUIRED,
  DELETE_QUESTION,
  DRAG_QUESTION,
  questionActionDispatch,
  SELECT_OPTION,
} from './../actions/questionActionType';

interface InitialState {
  id: string;
  title: string;
  description: string;
  optionType: string;
  isRequired: boolean;
}

const initialState = [
  {
    id: (Math.random() + 1).toString(36).substring(7),
    title: '',
    description: '',
    optionType: 'shortAnswer',
    isRequired: false,
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
    case SELECT_OPTION: {
      const { index, type } = action.payload;
      const newArray = [...state];
      newArray[index].optionType = type;

      return [...newArray];
    }
    case CLICK_REQUIRED: {
      const { index, isRequired } = action.payload;
      const newArray = [...state];
      newArray[index].isRequired = !isRequired;

      return [...newArray];
    }
    default:
      return state;
  }
};
export default QuestionReducer;
