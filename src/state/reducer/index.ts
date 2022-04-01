import { combineReducers } from 'redux';
import QuestionReducer from './QuestionsReducer';
import QuestionTitleReducer from './QuestionTitleReducer';

const rootReducer = combineReducers({
  question: QuestionReducer,
  title: QuestionTitleReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
