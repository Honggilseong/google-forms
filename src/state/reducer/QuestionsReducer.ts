import {
  ADD_QUESTION,
  DELETE_QUESTION,
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
    default:
      return state;
  }
};
export default QuestionReducer;
