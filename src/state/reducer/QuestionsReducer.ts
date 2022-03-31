import {
  ADD_QUESTION,
  DELETE_QUESTION,
  DRAG_QUESTION,
  questionActionDispatch,
} from './../actions/questionActionType';

interface InitialState {
  id: string;
  title: string;
  description: string;
}

const initialState = [{ id: '1', title: '', description: '' }];

const QuestionReducer = (
  state: InitialState[] = initialState,
  action: questionActionDispatch,
) => {
  switch (action.type) {
    case ADD_QUESTION: {
      return state.concat({
        id: (state.length + 1).toString(),
        title: '',
        description: '',
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
    default:
      return state;
  }
};
export default QuestionReducer;
