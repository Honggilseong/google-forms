import { TypeTitle, TYPE_TITLE } from './questionTitleActionType';
import { Dispatch } from 'redux';

export const typeTitle = (event: TypeTitle) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPE_TITLE,
    payload: event,
  });
};
