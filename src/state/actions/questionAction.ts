import {
  ADD_QUESTION,
  CLICK_REQUIRED,
  DELETE_QUESTION,
  DRAG_QUESTION,
  TypeOption,
  Required,
  Option,
  SELECT_OPTION,
  ADD_OPTION,
  CHANGE_VALUE,
  ChangeOptionValue,
  DRAG_OPTION,
  DragOptionValue,
  DeleteOptionValue,
  DELETE_OPTION,
  CHANGE_TITLE,
  ChangeTitleValue,
  COPY_QUESTION,
  FOCUS_QUESTION,
  UNFOCUS_QUESTION,
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

export const selectOption = (option: TypeOption) => (dispatch: Dispatch) => {
  dispatch({
    type: SELECT_OPTION,
    payload: option,
  });
};

export const clickRequired = (required: Required) => (dispatch: Dispatch) => {
  dispatch({
    type: CLICK_REQUIRED,
    payload: required,
  });
};

export const addOption = (option: Option) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_OPTION,
    payload: option,
  });
};

export const changeValue =
  (option: ChangeOptionValue) => (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_VALUE,
      payload: option,
    });
  };

export const dragOption = (option: DragOptionValue) => (dispatch: Dispatch) => {
  dispatch({
    type: DRAG_OPTION,
    payload: option,
  });
};

export const deleteOption =
  (option: DeleteOptionValue) => (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_OPTION,
      payload: option,
    });
  };
export const changeTitle =
  (option: ChangeTitleValue) => (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_TITLE,
      payload: option,
    });
  };

export const copyQuestion = (option: number) => (dispatch: Dispatch) => {
  dispatch({
    type: COPY_QUESTION,
    payload: option,
  });
};

export const focusQuestion = (option: number) => (dispatch: Dispatch) => {
  dispatch({
    type: FOCUS_QUESTION,
    payload: option,
  });
};

export const unFocusQuestion = () => (dispatch: Dispatch) => {
  dispatch({
    type: UNFOCUS_QUESTION,
  });
};
