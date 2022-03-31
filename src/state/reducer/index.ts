import { combineReducers } from 'redux';
import QuestionReducer from './QuestionsReducer';

const rootReducer = combineReducers({
  question: QuestionReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
