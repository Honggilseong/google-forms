import { DropResult } from 'react-beautiful-dnd';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DRAG_QUESTION = 'DRAG_QUESTION';
export const SELECT_OPTION = 'SELECT_OPTION';
export const CLICK_REQUIRED = 'CLICK_REQUIRED';

export interface AddQuestion {
  type: typeof ADD_QUESTION;
}

export interface DeleteQuestion {
  type: typeof DELETE_QUESTION;
  payload: string;
}

export interface DragQuestion {
  type: typeof DRAG_QUESTION;
  payload: DropResult;
}

export interface Option {
  index: number;
  type: string;
}

export interface SelectOption {
  type: typeof SELECT_OPTION;
  payload: Option;
}

export interface Required {
  index: number;
  isRequired: boolean;
}

export interface ClickRequired {
  type: typeof CLICK_REQUIRED;
  payload: Required;
}

export type questionActionDispatch =
  | AddQuestion
  | DeleteQuestion
  | DragQuestion
  | SelectOption
  | ClickRequired;
