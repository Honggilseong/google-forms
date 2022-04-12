import {
  TypeTitle,
  TYPE_TITLE,
  FOCUS_TITLE,
  UNFOCUS_TITLE,
} from './questionTitleActionType';
import { Dispatch } from 'redux';

export const typeTitle = (event: TypeTitle) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPE_TITLE,
    payload: event,
  });
};
export const focusTitle = () => (dispatch: Dispatch) => {
  dispatch({
    type: FOCUS_TITLE,
  });
};
export const unFocusTitle = () => (dispatch: Dispatch) => {
  dispatch({
    type: UNFOCUS_TITLE,
  });
};
