import {
  ADD_QUESTION,
  DELETE_QUESTION,
  DRAG_QUESTION,
} from './questionActionType';
import { Dispatch } from 'redux';
import { DropResult } from 'react-beautiful-dnd';

export const addQuestion = () => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_QUESTION,
  });
};

export const deleteQuestion = (id: string | number) => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_QUESTION,
    payload: id,
  });
};

export const dragQuestion = (result: DropResult) => (dispatch: Dispatch) => {
  dispatch({
    type: DRAG_QUESTION,
    payload: result,
  });
};
