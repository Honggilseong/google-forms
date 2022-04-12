import {
  questionTitleActionDispatch,
  TYPE_TITLE,
  FOCUS_TITLE,
  UNFOCUS_TITLE,
} from '../actions/questionTitleActionType';

interface InitialState {
  title: string;
  description: string;
  isFocus: boolean;
}

const initialState = {
  title: '제목 없는 설문지',
  description: '',
  isFocus: true,
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
    case FOCUS_TITLE: {
      return { ...state, isFocus: true };
    }
    case UNFOCUS_TITLE: {
      return { ...state, isFocus: false };
    }
    default:
      return state;
  }
};
export default QuestionTitleReducer;
