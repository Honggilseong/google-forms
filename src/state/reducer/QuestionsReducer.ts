import {
  ADD_QUESTION,
  DELETE_QUESTION,
  questionActionDispatch,
} from './../actions/questionActionType';
interface InitialState {
  id: string;
}

const initialState = [{ id: '1' }];

const QuestionReducer = (
  state: InitialState[] = initialState,
  action: questionActionDispatch,
) => {
  switch (action.type) {
    case ADD_QUESTION: {
      return state.concat({ id: (state.length + 1).toString() });
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
// const questions = [...questionOption];
// if (questionOption.length > 1) {
//   questions.splice(index, 1);
// }
// questionSet(questions);
