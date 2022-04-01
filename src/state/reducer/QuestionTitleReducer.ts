import {
  questionTitleActionDispatch,
  TYPE_TITLE,
} from '../actions/questionTitleActionType';

interface InitialState {
  title: string;
  description: string;
}

const initialState = {
  title: '제목 없는 설문지',
  description: '',
};

const QuestionTitleReducer = (
  state: InitialState = initialState,
  action: questionTitleActionDispatch,
) => {
  switch (action.type) {
    case TYPE_TITLE: {
      const { event, name } = action.payload;

      return { ...state, [name]: event.target.value };
    }
    default:
      return state;
  }
};
export default QuestionTitleReducer;
